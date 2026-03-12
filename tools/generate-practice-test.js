#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
const { loadEnv } = require('./lib/env');
const { crawlUrl, cleanText, discoverArticleUrls } = require('./lib/url-crawler');
const { validateTestObject } = require('./lib/validate-test');
const { normalizeTestObject } = require('./lib/normalize-test');

loadEnv();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY in tools/.env');
  process.exit(1);
}

const ROOT_DIR = path.join(__dirname, '..');
const GENERATED_DIR = path.join(__dirname, 'generated');
const PRACTICE_DIR = path.join(ROOT_DIR, 'src', 'components', 'practiceTests');
const PRACTICE_INDEX_PATH = path.join(PRACTICE_DIR, 'index.js');

function parseArgs(argv) {
  const args = argv.slice(2);
  if (args.length !== 1) {
    return null;
  }
  return { homepageUrl: args[0] };
}

function usage() {
  console.log('Usage: node tools/generate-practice-test.js <homepage-or-category-url>');
  console.log('Example: node tools/generate-practice-test.js https://www.nationalgeographic.com/');
}

function stripCodeFences(text) {
  const trimmed = text.trim();
  if (!trimmed.startsWith('```')) return trimmed;
  return trimmed.replace(/^```(?:json|javascript|js)?\s*/i, '').replace(/\s*```$/, '').trim();
}

function parseJsonResponse(text) {
  return JSON.parse(stripCodeFences(text));
}

function summarizeValidationErrors(errors) {
  return errors.map((error, index) => `${index + 1}. ${error}`).join('\n');
}

function normalizeTitle(title) {
  return cleanText(String(title || ''))
    .toLowerCase()
    .replace(/[|:-]\s*(national geographic|ng|bbc|cnn|the guardian|new york times)$/i, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

function countWords(text) {
  return cleanText(text).split(/\s+/).filter(Boolean).length;
}

function toPassagePlainText(contentHtml) {
  return cleanText(
    String(contentHtml || '')
      .replace(/<\/p>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  );
}

function buildSourcePayload(crawled) {
  return crawled.map((item, index) => ({
    sourceIndex: index + 1,
    sourceUrl: item.sourceUrl,
    sourceTitle: item.title,
    description: item.description,
    image: item.image,
    paragraphCount: item.paragraphCount,
    paragraphs: item.paragraphs.slice(0, 20),
  }));
}

function serializeAsModule(exportName, testObject) {
  return `export const ${exportName} = ${JSON.stringify(testObject, null, 2)};\n`;
}

function collectExistingPracticeTitles() {
  if (!fs.existsSync(PRACTICE_DIR)) {
    return new Set();
  }

  const titles = new Set();
  const files = fs.readdirSync(PRACTICE_DIR).filter((file) => file.endsWith('.js') && file !== 'index.js');

  for (const file of files) {
    const fullPath = path.join(PRACTICE_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const matches = content.matchAll(/["']title["']\s*:\s*["'`](.*?)["'`]/g);
    for (const match of matches) {
      const normalized = normalizeTitle(match[1]);
      if (normalized) {
        titles.add(normalized);
      }
    }
  }

  return titles;
}

function assertUniqueArticleTitles(crawled) {
  const existingTitles = collectExistingPracticeTitles();
  const seenInRequest = new Map();

  for (const item of crawled) {
    const normalized = normalizeTitle(item.title);
    if (!normalized) {
      throw new Error(`Could not derive a usable title from ${item.sourceUrl}.`);
    }

    if (seenInRequest.has(normalized)) {
      throw new Error(`Selected URLs contain duplicate article titles: "${item.title}" and "${seenInRequest.get(normalized)}".`);
    }
    seenInRequest.set(normalized, item.title);

    if (existingTitles.has(normalized)) {
      throw new Error(`Article title already exists in practiceTests: "${item.title}". Choose a different article.`);
    }
  }
}

async function pickFreshArticles(homepageUrl) {
  const existingTitles = collectExistingPracticeTitles();
  const discovered = await discoverArticleUrls(homepageUrl, { limit: 40 });

  if (discovered.length < 3) {
    throw new Error(`Could not discover enough article URLs from ${homepageUrl}. Found only ${discovered.length}.`);
  }

  const picked = [];
  const seenTitles = new Set();

  for (const candidate of discovered) {
    let crawled;
    try {
      crawled = await crawlUrl(candidate.url);
    } catch {
      continue;
    }

    if (!crawled.paragraphCount) {
      continue;
    }

    const normalized = normalizeTitle(crawled.title);
    if (!normalized) {
      continue;
    }

    if (existingTitles.has(normalized) || seenTitles.has(normalized)) {
      continue;
    }

    seenTitles.add(normalized);
    picked.push(crawled);

    if (picked.length === 3) {
      return picked;
    }
  }

  throw new Error(`Could not find 3 fresh article pages from ${homepageUrl} after filtering duplicates against practiceTests.`);
}

function ensureIndexFile() {
  if (!fs.existsSync(PRACTICE_DIR)) {
    fs.mkdirSync(PRACTICE_DIR, { recursive: true });
  }

  if (!fs.existsSync(PRACTICE_INDEX_PATH)) {
    fs.writeFileSync(PRACTICE_INDEX_PATH, 'export const practiceTests = [];\n', 'utf8');
  }
}

function readPracticeModules() {
  ensureIndexFile();

  return fs
    .readdirSync(PRACTICE_DIR)
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .map((file) => {
      const fullPath = path.join(PRACTICE_DIR, file);
      return {
        file,
        content: fs.readFileSync(fullPath, 'utf8'),
      };
    });
}

function buildGeneratedNames() {
  const modules = readPracticeModules();
  let maxFileNumber = 0;
  let maxTitleNumber = 0;
  let maxId = 4999;

  for (const module of modules) {
    const fileMatch = module.file.match(/practiceTest(\d+)\.js$/i);
    if (fileMatch) {
      maxFileNumber = Math.max(maxFileNumber, parseInt(fileMatch[1], 10));
    }

    const titleMatch = module.content.match(/["']title["']\s*:\s*["']Practice Test (\d+)["']/i);
    if (titleMatch) {
      maxTitleNumber = Math.max(maxTitleNumber, parseInt(titleMatch[1], 10));
    }

    const idMatch = module.content.match(/["']id["']\s*:\s*(\d+)/);
    if (idMatch) {
      maxId = Math.max(maxId, parseInt(idMatch[1], 10));
    }
  }

  const nextNumber = Math.max(maxFileNumber, maxTitleNumber) + 1;
  const paddedNumber = String(nextNumber).padStart(2, '0');

  return {
    exportName: `practiceTest${paddedNumber}`,
    displayTitle: `Practice Test ${paddedNumber}`,
    testId: maxId + 1,
  };
}

function updatePracticeIndex(exportName) {
  ensureIndexFile();

  let content = fs.readFileSync(PRACTICE_INDEX_PATH, 'utf8');
  const importLine = `import { ${exportName} } from './${exportName}';`;

  if (!content.includes(importLine)) {
    const importLines = content.match(/^import .*;$/gm) || [];
    const otherContent = content.replace(/^import .*;$/gm, '').trimStart();
    const updatedImports = [...importLines, importLine].sort().join('\n');
    content = `${updatedImports}\n\n${otherContent}`;
  }

  const exportMatch = content.match(/export const practiceTests = \[([\s\S]*?)\];/);
  const existingItems = exportMatch
    ? exportMatch[1].split(',').map((item) => item.trim()).filter(Boolean)
    : [];

  if (!existingItems.includes(exportName)) {
    existingItems.push(exportName);
  }

  const exportBlock = `export const practiceTests = [\n  ${existingItems.join(',\n  ')}\n];`;

  if (exportMatch) {
    content = content.replace(/export const practiceTests = \[[\s\S]*?\];/, exportBlock);
  } else {
    content = `${content.trimEnd()}\n\n${exportBlock}\n`;
  }

  fs.writeFileSync(PRACTICE_INDEX_PATH, `${content.trimEnd()}\n`, 'utf8');
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
  const systemPrompt = `You are building a 3-passage IELTS reading source pack from scraped English articles.
Return strict JSON only.

Requirements:
- Keep the passage order exactly the same as sourceIndex order.
- Create exactly 3 passages, one from each source article.
- Preserve each sourceTitle exactly as the passage title.
- Preserve each sourceTitle exactly as sourceTitle in the output.
- Each passage must contain 5-8 labeled paragraphs using HTML like <p><strong>A</strong> Paragraph text...</p>.
- Each passage should be 450-900 words and suitable for IELTS reading questions.
- Use only the facts from the source paragraphs. Do not invent facts.

Return JSON shape:
{
  "title": "Practice reading test title",
  "passages": [
    {
      "title": "Exact source title",
      "sourceUrl": "https://...",
      "sourceTitle": "Exact source title",
      "contentHtml": "<p><strong>A</strong> ...</p>..."
    }
  ]
}`;

  const userPrompt = `Build a 3-passage IELTS-style source pack from these crawled sources, preserving title order exactly:\n\n${JSON.stringify(sources, null, 2)}`;
  return getJsonCompletion(client, { systemPrompt, userPrompt });
}

async function generateTestJson(client, { exportName, testId, pack }) {
  const systemPrompt = `You are an expert IELTS Reading exam writer for a web app.
Return strict JSON only. Do not wrap in markdown.

You must output this shape:
{
  "id": 901,
  "title": "Practice Test",
  "correctAnswers": ["...", "..."],
  "passages": [
    {
      "title": "Exact source title",
      "content": "<p>...</p>",
      "questions": [ ... ]
    }
  ]
}

Rules:
- Exactly 3 passages.
- Use the passage titles exactly as provided in the source pack.
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
  matching
  paragraph-matching
  paragraph-headings
  summary-completion
  table-completion
- Every group has type, startQuestionNumber, title, instruction.
- For paragraph-headings, group-level options must have 8 entries (i–viii). Each option's "value" is the Roman numeral (i, ii, iii, …, viii) and "text" must be a short, meaningful IELTS-style heading title (NOT just the Roman numeral itself). Example: { "value": "i", "text": "A technological solution to personal grief" }.
- Most groups use items[].
- table-completion uses totalQuestions and table.rows[].cells[] with input cells using questionIndex.
- Every multiple-choice item must be an object like:
  {
    "question": "...",
    "options": [
      { "value": "A", "text": "..." },
      { "value": "B", "text": "..." },
      { "value": "C", "text": "..." },
      { "value": "D", "text": "..." }
    ]
  }
- Every table-completion input cell must be an object like:
  { "type": "input", "questionIndex": 0 }
- Keep answers defensible from the passage text only.
- For completion answers, use exact words or phrases from the passage.
- TRUE/FALSE/NOT GIVEN and YES/NO/NOT GIVEN answers must be all caps.`;

  const userPrompt = `Create a complete IELTS-style reading practice test JSON for export name "${exportName}" with id ${testId}.

Use this 3-passage source pack:
${JSON.stringify(pack, null, 2)}`;

  return getJsonCompletion(client, { systemPrompt, userPrompt });
}

async function repairTestJson(client, { brokenTest, validationErrors, pack, exportName, testId }) {
  const systemPrompt = `You repair IELTS reading test JSON.
Return strict JSON only.
Keep exactly 3 passages and exactly 40 answers.
Preserve each passage title exactly as given in the source pack.
Use this exact blueprint:
- Passage 1 total 13 = 5 + 5 + 3
- Passage 2 total 13 = 5 + 4 + 4
- Passage 3 total 14 = 5 + 5 + 4
For paragraph-headings, each option must have a Roman numeral "value" (i–viii) and a meaningful IELTS-style heading "text" (not just the numeral). Correct answers are Roman numerals.
Every multiple-choice item must include its own options array with value/text.
Every table-completion blank must use a cell object with type "input" and questionIndex.
Do not use multiple-select.`;

  const userPrompt = `Repair this generated IELTS practice test JSON so it passes validation.

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

  const { homepageUrl } = parsed;
  ensureIndexFile();
  const { exportName, displayTitle, testId } = buildGeneratedNames();

  const existingModulePath = path.join(PRACTICE_DIR, `${exportName}.js`);
  if (fs.existsSync(existingModulePath)) {
    throw new Error(`practiceTests/${exportName}.js already exists. Choose a different export name.`);
  }

  const client = new OpenAI({ apiKey: OPENAI_API_KEY });

  console.log(`Export: ${exportName}`);
  console.log(`Title: ${displayTitle}`);
  console.log(`Test ID: ${testId}`);
  console.log(`Discovering fresh articles from: ${homepageUrl}`);

  const crawled = await pickFreshArticles(homepageUrl);

  for (const result of crawled) {
    console.log(`- ${result.title}: ${result.paragraphCount} paragraphs, ${result.textLength} chars`);
  }

  assertUniqueArticleTitles(crawled);

  console.log('Selecting/shaping passages with AI...');
  const pack = await selectPassages(client, buildSourcePayload(crawled));

  if (!pack || !Array.isArray(pack.passages) || pack.passages.length !== 3) {
    throw new Error('AI did not return a valid 3-passage pack.');
  }

  pack.title = displayTitle;
  pack.passages = pack.passages.map((passage, index) => ({
    ...passage,
    title: crawled[index].title,
    sourceTitle: crawled[index].title,
    sourceUrl: crawled[index].sourceUrl,
    image: crawled[index].image,
  }));

  pack.passages.forEach((passage, index) => {
    const plainText = toPassagePlainText(passage.contentHtml || '');
    console.log(`- Passage ${index + 1}: ${countWords(plainText)} words, title "${passage.title}"`);
  });

  console.log('Generating IELTS practice test JSON...');
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
  generated.title = displayTitle;
  generated.image = crawled.find((item) => item.image)?.image || '';
  generated.passages = generated.passages.map((passage, index) => ({
    ...passage,
    title: crawled[index].title,
  }));

  fs.mkdirSync(GENERATED_DIR, { recursive: true });

  const generatedModulePath = path.join(GENERATED_DIR, `${exportName}.js`);
  const generatedPackPath = path.join(GENERATED_DIR, `${exportName}.pack.json`);
  const generatedSourcesPath = path.join(GENERATED_DIR, `${exportName}.sources.json`);
  const publishedModulePath = path.join(PRACTICE_DIR, `${exportName}.js`);

  fs.writeFileSync(generatedSourcesPath, JSON.stringify(crawled, null, 2), 'utf8');
  fs.writeFileSync(generatedPackPath, JSON.stringify(pack, null, 2), 'utf8');
  fs.writeFileSync(generatedModulePath, serializeAsModule(exportName, generated), 'utf8');
  fs.writeFileSync(publishedModulePath, serializeAsModule(exportName, generated), 'utf8');

  updatePracticeIndex(exportName);

  console.log(`Saved sources: ${generatedSourcesPath}`);
  console.log(`Saved passage pack: ${generatedPackPath}`);
  console.log(`Saved generated module: ${generatedModulePath}`);
  console.log(`Published practice test: ${publishedModulePath}`);
  console.log(`Updated registry: ${PRACTICE_INDEX_PATH}`);
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
