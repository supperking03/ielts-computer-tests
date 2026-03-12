#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
const { loadEnv } = require('./lib/env');
const { crawlUrl, cleanText } = require('./lib/url-crawler');
const { validateTestObject } = require('./lib/validate-test');
const { normalizeTestObject } = require('./lib/normalize-test');

loadEnv();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY in tools/.env');
  process.exit(1);
}

function parseArgs(argv) {
  const args = argv.slice(2);
  if (args.length < 2) {
    return null;
  }

  const exportName = args[0];
  let testId = 900 + Math.floor(Math.random() * 100);
  let urlStartIndex = 1;

  if (/^\d+$/.test(args[1])) {
    testId = parseInt(args[1], 10);
    urlStartIndex = 2;
  }

  const urls = args.slice(urlStartIndex).filter(Boolean);
  if (urls.length < 1 || urls.length > 3) {
    return null;
  }

  return { exportName, testId, urls };
}

function usage() {
  console.log('Usage: node generate-from-urls.js <export-name> [test-id] <article-url-1> [article-url-2] [article-url-3]');
  console.log('Example: node generate-from-urls.js natgeoMvp 901 https://site/article-1 https://site/article-2');
}

function stripCodeFences(text) {
  const trimmed = text.trim();
  if (!trimmed.startsWith('```')) return trimmed;
  return trimmed.replace(/^```(?:json|javascript|js)?\s*/i, '').replace(/\s*```$/, '').trim();
}

function parseJsonResponse(text) {
  return JSON.parse(stripCodeFences(text));
}

function buildSourcePayload(crawled) {
  return crawled.map((item, index) => ({
    sourceIndex: index + 1,
    sourceUrl: item.sourceUrl,
    sourceTitle: item.title,
    description: item.description,
    paragraphCount: item.paragraphCount,
    paragraphs: item.paragraphs.slice(0, 20),
  }));
}

function countWords(text) {
  return cleanText(text).split(/\s+/).filter(Boolean).length;
}

function toPassagePlainText(contentHtml) {
  return cleanText(
    contentHtml
      .replace(/<\/p>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  );
}

function summarizeValidationErrors(errors) {
  return errors.map((error, index) => `${index + 1}. ${error}`).join('\n');
}

function serializeAsModule(exportName, testObject) {
  return `export const ${exportName} = ${JSON.stringify(testObject, null, 2)};\n`;
}

async function getJsonCompletion(client, { systemPrompt, userPrompt, model = 'gpt-4o' }) {
  const response = await client.chat.completions.create({
    model,
    temperature: 0.2,
    max_tokens: 12000,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });

  const text = response.choices?.[0]?.message?.content || '';
  return parseJsonResponse(text);
}

async function selectPassages(client, sources) {
  const systemPrompt = `You are building an IELTS-style reading source pack from scraped English articles.
Return strict JSON only.

Requirements:
- Create exactly 3 reading passages.
- Use only source material provided by the user.
- If there are fewer than 3 source URLs, split long source text into multiple passages.
- Each passage should contain 5-8 labeled paragraphs using HTML like <p><strong>A</strong> Paragraph text...</p>.
- Each passage should be suitable for IELTS reading question types such as paragraph headings, paragraph matching, multiple choice, and completion.
- Keep each passage roughly 450-900 words.
- Preserve factual meaning; do not invent facts.

Return JSON shape:
{
  "title": "Reading test title",
  "passages": [
    {
      "title": "Passage-specific title",
      "sourceUrl": "https://...",
      "sourceTitle": "Original article title",
      "contentHtml": "<p><strong>A</strong> ...</p>..."
    }
  ]
}`;

  const userPrompt = `Build a 3-passage IELTS-style source pack from these crawled sources:\n\n${JSON.stringify(sources, null, 2)}`;
  return getJsonCompletion(client, { systemPrompt, userPrompt });
}

async function generateTestJson(client, { exportName, testId, pack }) {
  const systemPrompt = `You are an expert IELTS Reading exam writer for a web app.
Return strict JSON only. Do not wrap in markdown.

You must output this shape:
{
  "id": 901,
  "title": "Reading Something",
  "correctAnswers": ["...", "..."],
  "passages": [
    {
      "title": "Reading Passage 1",
      "content": "<p>...</p>",
      "questions": [ ... ]
    }
  ]
}

Rules:
- Exactly 3 passages.
- Exactly 40 total question slots.
- Exactly 40 entries in correctAnswers, in question order.
- Passage question counts must be 13, 13, and 14.
- Follow this fixed blueprint exactly:
  - Passage 1: paragraph-headings (5) + true-false-not-given OR yes-no-not-given (5) + fill-in-blanks OR sentence-completion (3)
  - Passage 2: paragraph-matching (5) + matching (4) + sentence-completion OR summary-completion (4)
  - Passage 3: multiple-choice (5) + true-false-not-given OR yes-no-not-given (5) + fill-in-blanks OR summary-completion OR table-completion (4)
- Do not use multiple-select in this MVP.
- Use only these question types:
  fill-in-blanks
  sentence-completion
  true-false-not-given
  yes-no-not-given
  multiple-choice
  multiple-select
  matching
  paragraph-matching
  paragraph-headings
  summary-completion
  table-completion
- Use schemas that are compatible with this React renderer:
  - Every group has type, startQuestionNumber, title, instruction.
  - Most groups use items[].
  - table-completion uses totalQuestions and table.rows[].cells[] with input cells using questionIndex.
  - multiple-select uses a single items[0] object plus selectCount, and contributes selectCount answers.
- The passage content already contains labeled paragraphs; keep them.
- Do not cite the source URLs inside the passage content.
- Keep answers defensible from the passage text only.
- For completion answers, use exact words/phrases from the passage.
- TRUE/FALSE/NOT GIVEN and YES/NO/NOT GIVEN answers must be all caps.`;

  const userPrompt = `Create a complete IELTS-style reading test JSON for export name "${exportName}" with id ${testId}.

Use this 3-passage source pack:
${JSON.stringify(pack, null, 2)}`;

  return getJsonCompletion(client, { systemPrompt, userPrompt });
}

async function repairTestJson(client, { brokenTest, validationErrors, pack, exportName, testId }) {
  const systemPrompt = `You repair IELTS reading test JSON.
Return strict JSON only.
Do not remove factual support from the source passages.
Keep exactly 3 passages and exactly 40 answers.
Use this exact blueprint:
- Passage 1 total 13 = 5 + 5 + 3
- Passage 2 total 13 = 5 + 4 + 4
- Passage 3 total 14 = 5 + 5 + 4
Do not use multiple-select.`;

  const userPrompt = `Repair this generated IELTS test JSON so it passes validation.

Validation errors:
${summarizeValidationErrors(validationErrors)}

Original source pack:
${JSON.stringify(pack, null, 2)}

Broken JSON:
${JSON.stringify(brokenTest, null, 2)}

Return a full corrected JSON object for export name "${exportName}" with id ${testId}.`;

  return getJsonCompletion(client, { systemPrompt, userPrompt });
}

async function main() {
  const parsed = parseArgs(process.argv);
  if (!parsed) {
    usage();
    process.exit(1);
  }

  const { exportName, testId, urls } = parsed;
  const client = new OpenAI({ apiKey: OPENAI_API_KEY });

  console.log(`Export: ${exportName}`);
  console.log(`Test ID: ${testId}`);
  console.log(`Crawling ${urls.length} URL(s)...`);

  const crawled = await Promise.all(urls.map((url) => crawlUrl(url)));

  for (const result of crawled) {
    if (!result.paragraphCount) {
      throw new Error(`No usable article paragraphs found for ${result.sourceUrl}. Provide article URLs instead of homepage/category pages.`);
    }
    console.log(`- ${result.title}: ${result.paragraphCount} paragraphs, ${result.textLength} chars`);
  }

  const sourcePayload = buildSourcePayload(crawled);
  console.log('Selecting/shaping passages with AI...');
  const pack = await selectPassages(client, sourcePayload);

  if (!pack || !Array.isArray(pack.passages) || pack.passages.length !== 3) {
    throw new Error('AI did not return a valid 3-passage pack.');
  }

  pack.passages.forEach((passage, index) => {
    const plainText = toPassagePlainText(passage.contentHtml || '');
    console.log(`- Passage ${index + 1}: ${countWords(plainText)} words from ${passage.sourceTitle || 'unknown source'}`);
  });

  console.log('Generating IELTS test JSON...');
  let generated = normalizeTestObject(await generateTestJson(client, { exportName, testId, pack }));
  let errors = validateTestObject(generated);

  if (errors.length) {
    console.log('Validation failed on first pass. Attempting repair...');
    generated = normalizeTestObject(await repairTestJson(client, {
      brokenTest: generated,
      validationErrors: errors,
      pack,
      exportName,
      testId,
    }));
    errors = validateTestObject(generated);
  }

  if (errors.length) {
    throw new Error(`Validation failed after repair:\n${summarizeValidationErrors(errors)}`);
  }

  generated.id = testId;
  generated.title = generated.title || `Reading ${exportName}`;

  const outputDir = path.join(__dirname, 'generated');
  fs.mkdirSync(outputDir, { recursive: true });

  const modulePath = path.join(outputDir, `${exportName}.js`);
  const packPath = path.join(outputDir, `${exportName}.pack.json`);
  const crawlPath = path.join(outputDir, `${exportName}.sources.json`);

  fs.writeFileSync(crawlPath, JSON.stringify(crawled, null, 2), 'utf8');
  fs.writeFileSync(packPath, JSON.stringify(pack, null, 2), 'utf8');
  fs.writeFileSync(modulePath, serializeAsModule(exportName, generated), 'utf8');

  console.log(`Saved sources: ${crawlPath}`);
  console.log(`Saved passage pack: ${packPath}`);
  console.log(`Saved test module: ${modulePath}`);
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
