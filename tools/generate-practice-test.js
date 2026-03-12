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
const PRACTICE_DIR = path.join(ROOT_DIR, 'src', 'components', 'practiceAcademicTests');
const PRACTICE_INDEX_PATH = path.join(PRACTICE_DIR, 'index.js');

// ─── Passage blueprints ───────────────────────────────────────────────────────
// Each passage defines which question groups to generate and how many questions.
const PASSAGE_BLUEPRINTS = [
  {
    passageIndex: 0,
    totalQuestions: 13,
    groups: [
      { type: 'paragraph-headings', count: 5 },
      { type: 'true-false-not-given', count: 5 },
      { type: 'sentence-completion', count: 3 },
    ],
  },
  {
    passageIndex: 1,
    totalQuestions: 13,
    groups: [
      { type: 'paragraph-matching', count: 5 },
      { type: 'matching', count: 4 },
      { type: 'summary-completion', count: 4 },
    ],
  },
  {
    passageIndex: 2,
    totalQuestions: 14,
    groups: [
      { type: 'multiple-choice', count: 5 },
      { type: 'yes-no-not-given', count: 5 },
      { type: 'sentence-completion', count: 4 },
    ],
  },
];

// ─── Utility ──────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = argv.slice(2);
  if (args.length !== 1) return null;
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

// ─── File / registry helpers ──────────────────────────────────────────────────

function collectExistingPracticeTitles() {
  if (!fs.existsSync(PRACTICE_DIR)) return new Set();
  const titles = new Set();
  const files = fs.readdirSync(PRACTICE_DIR).filter((f) => f.endsWith('.js') && f !== 'index.js');
  for (const file of files) {
    const content = fs.readFileSync(path.join(PRACTICE_DIR, file), 'utf8');
    const matches = content.matchAll(/["']title["']\s*:\s*["'`](.*?)["'`]/g);
    for (const match of matches) {
      const normalized = normalizeTitle(match[1]);
      if (normalized) titles.add(normalized);
    }
  }
  return titles;
}

function assertUniqueArticleTitles(crawled) {
  const existingTitles = collectExistingPracticeTitles();
  const seenInRequest = new Map();
  for (const item of crawled) {
    const normalized = normalizeTitle(item.title);
    if (!normalized) throw new Error(`Could not derive a usable title from ${item.sourceUrl}.`);
    if (seenInRequest.has(normalized)) {
      throw new Error(`Duplicate article titles: "${item.title}" and "${seenInRequest.get(normalized)}".`);
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
    throw new Error(`Could not discover enough articles from ${homepageUrl}. Found only ${discovered.length}.`);
  }
  const picked = [];
  const seenTitles = new Set();
  for (const candidate of discovered) {
    let crawled;
    try { crawled = await crawlUrl(candidate.url); } catch { continue; }
    if (!crawled.paragraphCount) continue;
    const normalized = normalizeTitle(crawled.title);
    if (!normalized) continue;
    if (existingTitles.has(normalized) || seenTitles.has(normalized)) continue;
    seenTitles.add(normalized);
    picked.push(crawled);
    if (picked.length === 3) return picked;
  }
  throw new Error(`Could not find 3 fresh articles from ${homepageUrl}.`);
}

function ensureIndexFile() {
  if (!fs.existsSync(PRACTICE_DIR)) fs.mkdirSync(PRACTICE_DIR, { recursive: true });
  if (!fs.existsSync(PRACTICE_INDEX_PATH)) {
    fs.writeFileSync(PRACTICE_INDEX_PATH, 'export const practiceTests = [];\n', 'utf8');
  }
}

function readPracticeModules() {
  ensureIndexFile();
  return fs
    .readdirSync(PRACTICE_DIR)
    .filter((f) => f.endsWith('.js') && f !== 'index.js')
    .map((file) => ({ file, content: fs.readFileSync(path.join(PRACTICE_DIR, file), 'utf8') }));
}

function buildGeneratedNames() {
  const modules = readPracticeModules();
  let maxFileNumber = 0, maxTitleNumber = 0, maxId = 4999;
  for (const module of modules) {
    const fileMatch = module.file.match(/practiceTest(\d+)\.js$/i);
    if (fileMatch) maxFileNumber = Math.max(maxFileNumber, parseInt(fileMatch[1], 10));
    const titleMatch = module.content.match(/["']title["']\s*:\s*["']Practice Test (\d+)["']/i);
    if (titleMatch) maxTitleNumber = Math.max(maxTitleNumber, parseInt(titleMatch[1], 10));
    const idMatch = module.content.match(/["']id["']\s*:\s*(\d+)/);
    if (idMatch) maxId = Math.max(maxId, parseInt(idMatch[1], 10));
  }
  const nextNumber = Math.max(maxFileNumber, maxTitleNumber) + 1;
  const paddedNumber = String(nextNumber).padStart(2, '0');
  return { exportName: `practiceTest${paddedNumber}`, displayTitle: `Practice Test ${paddedNumber}`, testId: maxId + 1 };
}

function updatePracticeIndex(exportName) {
  ensureIndexFile();
  let content = fs.readFileSync(PRACTICE_INDEX_PATH, 'utf8');
  const importLine = `import { ${exportName} } from './${exportName}';`;
  if (!content.includes(importLine)) {
    const importLines = content.match(/^import .*;$/gm) || [];
    const otherContent = content.replace(/^import .*;$/gm, '').trimStart();
    content = `${[...importLines, importLine].sort().join('\n')}\n\n${otherContent}`;
  }
  const exportMatch = content.match(/export const practiceTests = \[([\s\S]*?)\];/);
  const existingItems = exportMatch
    ? exportMatch[1].split(',').map((i) => i.trim()).filter(Boolean)
    : [];
  if (!existingItems.includes(exportName)) existingItems.push(exportName);
  const exportBlock = `export const practiceTests = [\n  ${existingItems.join(',\n  ')}\n];`;
  content = exportMatch
    ? content.replace(/export const practiceTests = \[[\s\S]*?\];/, exportBlock)
    : `${content.trimEnd()}\n\n${exportBlock}\n`;
  fs.writeFileSync(PRACTICE_INDEX_PATH, `${content.trimEnd()}\n`, 'utf8');
}

// ─── AI helpers ───────────────────────────────────────────────────────────────

async function getJsonCompletion(client, { systemPrompt, userPrompt, model = 'gpt-4o', maxTokens = 6000 }) {
  const response = await client.chat.completions.create({
    model,
    temperature: 0.2,
    max_tokens: maxTokens,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });
  const text = response.choices?.[0]?.message?.content || '';
  return parseJsonResponse(text);
}

// ─── Stage 1: Rewrite one article into an IELTS academic passage ──────────────

async function rewritePassage(client, source) {
  const systemPrompt = `You are an IELTS Academic Reading passage writer.
Return strict JSON only. No markdown, no commentary.

Your task: Transform a scraped article into a Cambridge IELTS Academic Reading passage.

PASSAGE RULES:
- Academic tone. Neutral. No personal opinion. No conversational or marketing language.
- Bad: "I think", "You should", "This amazing discovery", "Click here"
- Good: "Research indicates", "Studies suggest", "Evidence demonstrates"
- Target 700–1100 words. Summarize if too long; rewrite more formally if too short. Do NOT invent facts.
- Label every paragraph A, B, C, D, E, F (max G or H if truly necessary).
- Each paragraph covers exactly one main idea. No huge blocks.
- Remove: ads, promotional tone, clickbait, calls to action, repetition.
- Preserve: facts, research findings, explanations, comparisons, cause-effect relationships.

Return JSON:
{
  "title": "Exact source title",
  "contentHtml": "<p><strong>A</strong> Paragraph text.</p><p><strong>B</strong> ...</p>...",
  "paragraphLabels": ["A", "B", "C", "D", "E", "F"],
  "wordCount": 800
}`;

  const userPrompt = `Rewrite this article as an IELTS Academic Reading passage.

Source title: ${source.sourceTitle}
Source URL: ${source.sourceUrl}

Article paragraphs:
${source.paragraphs.map((p, i) => `[${i + 1}] ${p}`).join('\n\n')}`;

  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 4000 });
}

// ─── Stage 2: Build evidence map for a passage ────────────────────────────────

async function buildEvidenceMap(client, passage) {
  const systemPrompt = `You are an IELTS question designer doing pre-analysis before writing questions.
Return strict JSON only.

Analyze the passage and extract an evidence map with these fields for each paragraph:
- label: paragraph letter
- mainIdea: one sentence summary of the paragraph's central point
- keyFacts: 2–4 specific facts, figures, or claims
- paraphraseCandidates: 2–3 sentences that can be paraphrased for True/False/Yes/No questions
- contradictionCandidates: 1–2 statements that could be FALSE if partially modified
- notGivenCandidates: 1–2 topics NOT mentioned that a test-taker might expect
- completionPhrases: exact 1–2 word phrases from the text suitable for gap-fill answers

Also provide:
- headingIdeas: 8 distinct short IELTS-style headings (i–viii). Each covers a different main idea from the passage. Include at least 2–3 distractor headings not directly matching any paragraph.

Return JSON:
{
  "paragraphs": [
    {
      "label": "A",
      "mainIdea": "...",
      "keyFacts": ["...", "..."],
      "paraphraseCandidates": ["...", "..."],
      "contradictionCandidates": ["...", "..."],
      "notGivenCandidates": ["...", "..."],
      "completionPhrases": ["...", "..."]
    }
  ],
  "headingIdeas": [
    { "value": "i", "text": "..." },
    { "value": "ii", "text": "..." },
    { "value": "iii", "text": "..." },
    { "value": "iv", "text": "..." },
    { "value": "v", "text": "..." },
    { "value": "vi", "text": "..." },
    { "value": "vii", "text": "..." },
    { "value": "viii", "text": "..." }
  ]
}`;

  const passagePlain = toPassagePlainText(passage.contentHtml);
  const userPrompt = `Build an evidence map for this IELTS passage.\n\nTitle: ${passage.title}\n\nPassage:\n${passagePlain}`;
  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 4000 });
}

// ─── Stage 3: Generate questions for one passage ──────────────────────────────

function buildQuestionTypeInstructions(blueprint) {
  return blueprint.groups.map((g) => {
    switch (g.type) {
      case 'paragraph-headings':
        return `paragraph-headings (${g.count} items):
  - title: "The reading passage has ${g.count} paragraphs, A–E. Choose the correct heading for each paragraph from the list of headings below."
  - instruction: "Write the correct number, i-viii, in boxes [START]-[END] on your answer sheet."
  - options: use the headingIdeas from the evidence map (all 8, i–viii). Each option MUST have "value" (Roman numeral) and "text" (meaningful IELTS heading, NOT just the numeral).
  - items: [{ "paragraph": "A" }, { "paragraph": "B" }, ...] — one per paragraph being matched.
  - answers: Roman numerals (i, ii, iii, …). Each paragraph maps to exactly one heading. Answers need not be consecutive.
  - Headings test main ideas, not details. Include distractor headings.`;

      case 'true-false-not-given':
        return `true-false-not-given (${g.count} items):
  - title: "Do the following statements agree with the information given in the reading passage?"
  - instruction: "In boxes [START]-[END] on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this."
  - items: [{ "statement": "..." }]
  - answers: TRUE, FALSE, or NOT GIVEN (all caps).
  - TRUE: statement matches text. FALSE: statement contradicts text. NOT GIVEN: topic completely absent.
  - Do NOT confuse FALSE with NOT GIVEN. NOT GIVEN must be truly absent, not just unsupported.
  - Questions must follow passage text order.
  - Use synonym/paraphrase traps. Include at least one NOT GIVEN that seems plausible but is absent.`;

      case 'yes-no-not-given':
        return `yes-no-not-given (${g.count} items):
  - title: "Do the following statements agree with the views of the writer?"
  - instruction: "In boxes [START]-[END] on your answer sheet, write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this."
  - items: [{ "statement": "..." }]
  - answers: YES, NO, or NOT GIVEN (all caps).
  - Use only for opinions, views, claims — not facts.
  - Questions must follow passage text order.`;

      case 'sentence-completion':
        return `sentence-completion (${g.count} items):
  - title: "Complete the sentences below."
  - instruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes [START]-[END] on your answer sheet."
  - items: [{ "prefix": "...", "suffix": "..." }] — the blank goes between prefix and suffix.
  - answers: exact 1–2 words from the passage text. NEVER more than 2 words.
  - Questions must follow passage text order.
  - Avoid multiple possible answers for the same blank.`;

      case 'summary-completion':
        return `summary-completion (${g.count} items):
  - title: "Complete the summary below."
  - instruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes [START]-[END] on your answer sheet."
  - items: [{ "prefix": "...", "suffix": "..." }]
  - answers: exact 1–2 words from the passage. NEVER more than 2 words.
  - The items together form a coherent summary paragraph about part of the passage.`;

      case 'paragraph-matching':
        return `paragraph-matching (${g.count} items):
  - title: "The reading passage has several paragraphs, A–G. Which paragraph contains the following information?"
  - instruction: "Write the correct letter, A–G, in boxes [START]-[END] on your answer sheet."
  - items: [{ "description": "..." }]
  - answers: paragraph letters (A, B, C, …).
  - Descriptions must paraphrase specific information found in that paragraph.
  - Questions need NOT follow passage order.`;

      case 'matching':
        return `matching (${g.count} items):
  - title: "Match each statement with the correct [person/organisation/concept]."
  - instruction: "Write the correct letter, A–F, in boxes [START]-[END] on your answer sheet."
  - items: [{ "description": "..." }]
  - options: [{ "value": "A", "label": "..." }, …] — derive from passage entities.
  - answers: option letters.
  - Include more options than items (distractors).`;

      case 'multiple-choice':
        return `multiple-choice (${g.count} items):
  - title: "Choose the correct letter, A, B, C or D."
  - instruction: "Write the correct letter in boxes [START]-[END] on your answer sheet."
  - items: [{ "question": "...", "options": [{ "value": "A", "text": "..." }, { "value": "B", "text": "..." }, { "value": "C", "text": "..." }, { "value": "D", "text": "..." }] }]
  - answers: A, B, C, or D.
  - Exactly one correct answer per item. Distractors must be plausible and come from nearby ideas.
  - Questions must follow passage text order.`;

      default:
        return `${g.type} (${g.count} items)`;
    }
  });
}

async function generatePassageQuestions(client, { passage, evidenceMap, blueprint, startQuestionNumber }) {
  const typeInstructions = buildQuestionTypeInstructions(blueprint);
  const passagePlain = toPassagePlainText(passage.contentHtml);
  const endQuestionNumber = startQuestionNumber + blueprint.totalQuestions - 1;

  const systemPrompt = `You are a Cambridge IELTS Reading exam writer.
Return strict JSON only. No markdown, no commentary.

Your output must be:
{
  "questions": [ ...question groups... ],
  "answers": [ ...${blueprint.totalQuestions} answers in order... ]
}

CRITICAL RULES:
- Exactly ${blueprint.groups.length} question groups in order.
- Exactly ${blueprint.totalQuestions} answers total (questions ${startQuestionNumber}–${endQuestionNumber}).
- Every group must have: type, startQuestionNumber, title, instruction, and the group's items/options.
- Replace [START] and [END] in instructions with the actual question numbers.
- Answers must be supported by passage text only. Never require outside knowledge.
- Output must feel like a real Cambridge IELTS test, not a school worksheet.

QUESTION GROUPS TO GENERATE:
${typeInstructions.join('\n\n')}

EVIDENCE MAP (use this to design questions):
${JSON.stringify(evidenceMap, null, 2)}`;

  const groupSpec = blueprint.groups
    .map((g, i) => {
      const s = startQuestionNumber + blueprint.groups.slice(0, i).reduce((acc, g2) => acc + g2.count, 0);
      return `Group ${i + 1}: ${g.type}, questions ${s}–${s + g.count - 1}`;
    })
    .join('\n');

  const userPrompt = `Generate IELTS Reading questions for this passage.

Passage title: ${passage.title}

Passage text:
${passagePlain}

Question allocation:
${groupSpec}

Total questions: ${blueprint.totalQuestions} (${startQuestionNumber}–${endQuestionNumber})`;

  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 5000 });
}

// ─── Stage 4: Assemble full test JSON ────────────────────────────────────────

function assembleTest({ testId, displayTitle, passages, perPassageResults }) {
  const correctAnswers = perPassageResults.flatMap((r) => r.answers);
  const assembledPassages = passages.map((passage, i) => ({
    title: passage.title,
    content: passage.contentHtml,
    questions: perPassageResults[i].questions,
  }));
  return { id: testId, title: displayTitle, correctAnswers, passages: assembledPassages };
}

// ─── Stage 5: Repair (fallback) ───────────────────────────────────────────────

async function repairTestJson(client, { brokenTest, validationErrors, passages }) {
  const systemPrompt = `You repair IELTS reading test JSON.
Return strict JSON only. No markdown.

Fix all validation errors listed. Keep exactly 3 passages and exactly 40 answers.
Blueprints:
- Passage 1: paragraph-headings(5) + true-false-not-given(5) + sentence-completion(3) = 13
- Passage 2: paragraph-matching(5) + matching(4) + summary-completion(4) = 13
- Passage 3: multiple-choice(5) + yes-no-not-given(5) + sentence-completion(4) = 14

For paragraph-headings:
  - options: 8 entries (i–viii), each with "value" (Roman numeral) and "text" (meaningful heading, NOT just the numeral).
For multiple-choice: every item must have its own options array with value/text.
For sentence-completion/summary-completion: answers must be NO MORE THAN TWO WORDS from the passage.
For true-false-not-given/yes-no-not-given: answers must be TRUE/FALSE/NOT GIVEN or YES/NO/NOT GIVEN (all caps).
startQuestionNumber must be sequential across all groups in order (1, 6, 11, 14, 19, 23, 27, 32, 37).`;

  const userPrompt = `Repair this IELTS practice test JSON.

Validation errors:
${summarizeValidationErrors(validationErrors)}

Passage texts for reference:
${passages.map((p, i) => `Passage ${i + 1} (${p.title}):\n${toPassagePlainText(p.contentHtml).slice(0, 1500)}`).join('\n\n')}

Broken JSON:
${JSON.stringify(brokenTest, null, 2)}`;

  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 12000 });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const parsed = parseArgs(process.argv);
  if (!parsed) { usage(); process.exit(1); }

  const { homepageUrl } = parsed;
  ensureIndexFile();
  const { exportName, displayTitle, testId } = buildGeneratedNames();

  const existingModulePath = path.join(PRACTICE_DIR, `${exportName}.js`);
  if (fs.existsSync(existingModulePath)) {
    throw new Error(`practiceTests/${exportName}.js already exists.`);
  }

  const client = new OpenAI({ apiKey: OPENAI_API_KEY });

  console.log(`Export: ${exportName} | Title: ${displayTitle} | ID: ${testId}`);
  console.log(`Discovering articles from: ${homepageUrl}`);

  const crawled = await pickFreshArticles(homepageUrl);
  for (const r of crawled) {
    console.log(`  - "${r.title}": ${r.paragraphCount} paragraphs`);
  }
  assertUniqueArticleTitles(crawled);

  const sources = buildSourcePayload(crawled);

  // ── Stage 1: Rewrite each article into an IELTS academic passage ─────────────
  console.log('\nStage 1/3: Rewriting articles into IELTS academic passages...');
  const passages = [];
  for (let i = 0; i < sources.length; i++) {
    console.log(`  Rewriting passage ${i + 1}: "${sources[i].sourceTitle}"`);
    const rewritten = await rewritePassage(client, sources[i]);
    // Force correct metadata from crawl
    passages.push({
      title: crawled[i].title,
      sourceTitle: crawled[i].title,
      sourceUrl: crawled[i].sourceUrl,
      image: crawled[i].image,
      contentHtml: rewritten.contentHtml,
      wordCount: rewritten.wordCount || countWords(toPassagePlainText(rewritten.contentHtml)),
    });
    console.log(`    → ${passages[i].wordCount} words, paragraphs: ${(rewritten.paragraphLabels || []).join(', ')}`);
  }

  // ── Stage 2: Build evidence map per passage ───────────────────────────────────
  console.log('\nStage 2/3: Building evidence maps...');
  const evidenceMaps = [];
  for (let i = 0; i < passages.length; i++) {
    console.log(`  Evidence map for passage ${i + 1}: "${passages[i].title}"`);
    const map = await buildEvidenceMap(client, passages[i]);
    evidenceMaps.push(map);
    console.log(`    → ${(map.paragraphs || []).length} paragraphs analyzed, ${(map.headingIdeas || []).length} headings`);
  }

  // ── Stage 3: Generate questions per passage ────────────────────────────────────
  console.log('\nStage 3/3: Generating questions per passage...');
  const perPassageResults = [];
  let startQ = 1;
  for (let i = 0; i < passages.length; i++) {
    const blueprint = PASSAGE_BLUEPRINTS[i];
    console.log(`  Passage ${i + 1}: questions ${startQ}–${startQ + blueprint.totalQuestions - 1}`);
    const result = await generatePassageQuestions(client, {
      passage: passages[i],
      evidenceMap: evidenceMaps[i],
      blueprint,
      startQuestionNumber: startQ,
    });
    perPassageResults.push(result);
    startQ += blueprint.totalQuestions;
  }

  // ── Assemble ──────────────────────────────────────────────────────────────────
  let generated = normalizeTestObject(assembleTest({ testId, displayTitle, passages, perPassageResults }));
  generated.image = crawled.find((item) => item.image)?.image || '';

  // ── Validate + repair ─────────────────────────────────────────────────────────
  let errors = validateTestObject(generated);
  if (errors.length) {
    console.log(`\nValidation failed (${errors.length} errors). Attempting repair...`);
    errors.forEach((e) => console.log(`  - ${e}`));
    generated = normalizeTestObject(await repairTestJson(client, { brokenTest: generated, validationErrors: errors, passages }));
    errors = validateTestObject(generated);
  }

  if (errors.length) {
    throw new Error(`Validation failed after repair:\n${summarizeValidationErrors(errors)}`);
  }

  // ── Write files ───────────────────────────────────────────────────────────────
  fs.mkdirSync(GENERATED_DIR, { recursive: true });

  const generatedModulePath = path.join(GENERATED_DIR, `${exportName}.js`);
  const generatedPackPath = path.join(GENERATED_DIR, `${exportName}.pack.json`);
  const generatedSourcesPath = path.join(GENERATED_DIR, `${exportName}.sources.json`);
  const publishedModulePath = path.join(PRACTICE_DIR, `${exportName}.js`);

  const pack = { title: displayTitle, passages: passages.map((p) => ({ ...p })) };
  fs.writeFileSync(generatedSourcesPath, JSON.stringify(crawled, null, 2), 'utf8');
  fs.writeFileSync(generatedPackPath, JSON.stringify(pack, null, 2), 'utf8');
  fs.writeFileSync(generatedModulePath, serializeAsModule(exportName, generated), 'utf8');
  fs.writeFileSync(publishedModulePath, serializeAsModule(exportName, generated), 'utf8');

  updatePracticeIndex(exportName);

  console.log(`\nDone!`);
  console.log(`  Sources:   ${generatedSourcesPath}`);
  console.log(`  Pack:      ${generatedPackPath}`);
  console.log(`  Generated: ${generatedModulePath}`);
  console.log(`  Published: ${publishedModulePath}`);
  console.log(`  Registry:  ${PRACTICE_INDEX_PATH}`);
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
