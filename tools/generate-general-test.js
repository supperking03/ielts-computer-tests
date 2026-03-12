#!/usr/bin/env node

/**
 * IELTS General Training Reading test generator.
 *
 * Usage:
 *   node tools/generate-general-test.js <homepage-or-category-url>
 *
 * Generates a 40-question IELTS General Training Reading test:
 *   Section 1 (14 q)  – 2–3 short practical / social-survival texts (AI-generated)
 *   Section 2 (13 q)  – 2 workplace instructional texts (AI-generated)
 *   Section 3 (13 q)  – 1 long general-interest article (crawled from the given URL)
 *
 * Output saved to:
 *   tools/generated/practiceGeneralTest<N>.js
 *   tools/generated/practiceGeneralTest<N>.pack.json
 *   src/components/practiceGeneralTests/practiceGeneralTest<N>.js  ← published
 *   src/components/practiceGeneralTests/index.js                   ← updated
 */

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
const GENERAL_DIR = path.join(ROOT_DIR, 'src', 'components', 'practiceGeneralTests');
const GENERAL_INDEX_PATH = path.join(GENERAL_DIR, 'index.js');

// ─── Blueprints ───────────────────────────────────────────────────────────────
// Each section maps to one passage in the app (same format as Cambridge general tests).
const SECTION_BLUEPRINTS = [
  {
    sectionNumber: 1,
    sectionType: 'social_survival',
    label: 'Section 1',
    totalQuestions: 14,
    textCount: 3,
    groups: [
      { type: 'matching-information', count: 7 },  // which text (T1/T2/T3) contains info
      { type: 'true-false-not-given', count: 4 },
      { type: 'sentence-completion', count: 3 },
    ],
  },
  {
    sectionNumber: 2,
    sectionType: 'workplace',
    label: 'Section 2',
    totalQuestions: 13,
    textCount: 2,
    groups: [
      { type: 'true-false-not-given', count: 5 },
      { type: 'sentence-completion', count: 4 },
      { type: 'multiple-choice', count: 4 },
    ],
  },
  {
    sectionNumber: 3,
    sectionType: 'general_article',
    label: 'Section 3',
    totalQuestions: 13,
    textCount: 1,
    groups: [
      { type: 'paragraph-headings', count: 5 },
      { type: 'true-false-not-given', count: 4 },
      { type: 'summary-completion', count: 4 },
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
  console.log('Usage: node tools/generate-general-test.js <homepage-or-category-url>');
  console.log('Example: node tools/generate-general-test.js https://www.nationalgeographic.com/');
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
  return errors.map((e, i) => `${i + 1}. ${e}`).join('\n');
}

function normalizeTitle(title) {
  return cleanText(String(title || ''))
    .toLowerCase()
    .replace(/[|:-]\s*(bbc|guardian|cnn|national geographic|reuters)$/i, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

function countWords(text) {
  return cleanText(text).split(/\s+/).filter(Boolean).length;
}

function toPlainText(contentHtml) {
  return cleanText(
    String(contentHtml || '')
      .replace(/<\/p>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  );
}

function serializeAsModule(exportName, obj) {
  return `export const ${exportName} = ${JSON.stringify(obj, null, 2)};\n`;
}

// Remove "<hN>Text N: anything</hN>" labels — actual title is in the <h3> below
function stripTextLabels(html) {
  return (html || '').replace(/<h[1-4][^>]*>Text \d+:[^<]*<\/h[1-4]>/gi, '');
}

// ─── Registry helpers ─────────────────────────────────────────────────────────

function collectExistingGeneralTitles() {
  if (!fs.existsSync(GENERAL_DIR)) return new Set();
  const titles = new Set();
  const files = fs.readdirSync(GENERAL_DIR).filter((f) => f.endsWith('.js') && f !== 'index.js');
  for (const file of files) {
    const content = fs.readFileSync(path.join(GENERAL_DIR, file), 'utf8');
    const matches = content.matchAll(/["']title["']\s*:\s*["'`](.*?)["'`]/g);
    for (const match of matches) {
      const normalized = normalizeTitle(match[1]);
      if (normalized) titles.add(normalized);
    }
  }
  return titles;
}

async function pickFreshArticle(homepageUrl) {
  const existingTitles = collectExistingGeneralTitles();
  const discovered = await discoverArticleUrls(homepageUrl, { limit: 40 });
  if (!discovered.length) {
    throw new Error(`Could not discover any article URLs from ${homepageUrl}.`);
  }
  for (const candidate of discovered) {
    let crawled;
    try { crawled = await crawlUrl(candidate.url); } catch { continue; }
    if (!crawled.paragraphCount || crawled.paragraphCount < 3) continue;
    const normalized = normalizeTitle(crawled.title);
    if (!normalized) continue;
    if (existingTitles.has(normalized)) continue;
    return crawled;
  }
  throw new Error(`Could not find a fresh article page from ${homepageUrl}.`);
}

function ensureIndexFile() {
  if (!fs.existsSync(GENERAL_DIR)) fs.mkdirSync(GENERAL_DIR, { recursive: true });
  if (!fs.existsSync(GENERAL_INDEX_PATH)) {
    fs.writeFileSync(GENERAL_INDEX_PATH, 'export const practiceGeneralTests = [];\n', 'utf8');
  }
}

function readGeneralModules() {
  ensureIndexFile();
  return fs
    .readdirSync(GENERAL_DIR)
    .filter((f) => f.endsWith('.js') && f !== 'index.js')
    .map((file) => ({ file, content: fs.readFileSync(path.join(GENERAL_DIR, file), 'utf8') }));
}

function buildGeneratedNames() {
  const modules = readGeneralModules();
  let maxFileNumber = 0, maxTitleNumber = 0, maxId = 5999;
  for (const m of modules) {
    const fileMatch = m.file.match(/practiceGeneralTest(\d+)\.js$/i);
    if (fileMatch) maxFileNumber = Math.max(maxFileNumber, parseInt(fileMatch[1], 10));
    const titleMatch = m.content.match(/["']title["']\s*:\s*["']Practice General Test (\d+)["']/i);
    if (titleMatch) maxTitleNumber = Math.max(maxTitleNumber, parseInt(titleMatch[1], 10));
    const idMatch = m.content.match(/["']id["']\s*:\s*(\d+)/);
    if (idMatch) maxId = Math.max(maxId, parseInt(idMatch[1], 10));
  }
  const nextNumber = Math.max(maxFileNumber, maxTitleNumber) + 1;
  const paddedNumber = String(nextNumber).padStart(2, '0');
  return {
    exportName: `practiceGeneralTest${paddedNumber}`,
    displayTitle: `Practice General Test ${paddedNumber}`,
    testId: maxId + 1,
  };
}

function updateGeneralIndex(exportName) {
  ensureIndexFile();
  let content = fs.readFileSync(GENERAL_INDEX_PATH, 'utf8');
  const importLine = `import { ${exportName} } from './${exportName}';`;
  if (!content.includes(importLine)) {
    const importLines = content.match(/^import .*;$/gm) || [];
    const otherContent = content.replace(/^import .*;$/gm, '').trimStart();
    content = `${[...importLines, importLine].sort().join('\n')}\n\n${otherContent}`;
  }
  const exportMatch = content.match(/export const practiceGeneralTests = \[([\s\S]*?)\];/);
  const existingItems = exportMatch
    ? exportMatch[1].split(',').map((i) => i.trim()).filter(Boolean)
    : [];
  if (!existingItems.includes(exportName)) existingItems.push(exportName);
  const exportBlock = `export const practiceGeneralTests = [\n  ${existingItems.join(',\n  ')}\n];`;
  content = exportMatch
    ? content.replace(/export const practiceGeneralTests = \[[\s\S]*?\];/, exportBlock)
    : `${content.trimEnd()}\n\n${exportBlock}\n`;
  fs.writeFileSync(GENERAL_INDEX_PATH, `${content.trimEnd()}\n`, 'utf8');
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

// ─── Stage 1a: Generate Section 1 (social survival texts) ────────────────────

async function generateSection1(client) {
  const systemPrompt = `You are an IELTS General Training test writer.
Return strict JSON only. No markdown, no commentary.

Generate 3 short practical texts for IELTS General Training Reading Section 1.

Section 1 rules:
- 2–3 short practical/social-survival texts total (generate 3).
- Each text: 100–200 words.
- Examples: notices, advertisements, public information, timetables, library rules, gym policies, travel brochures, course registration info.
- Tone: simple functional English (CEFR B1 level). NO academic language.
- Texts should be different types (e.g., one notice, one advertisement, one information leaflet).
- Make them realistic and specific — real places, plausible rules, concrete details.
- Each text gets a clear title.
- Use HTML: wrap each text in a <div> with a heading. Keep it simple.

Return:
{
  "texts": [
    {
      "id": "T1",
      "title": "Text title",
      "wordCount": 150,
      "contentHtml": "<h3>Title</h3><p>...</p>..."
    },
    { "id": "T2", ... },
    { "id": "T3", ... }
  ],
  "combinedHtml": "<p><em>Questions 1–14 refer to the texts below.</em></p><h2>Text 1: ...</h2>...<hr/><h2>Text 2: ...</h2>...",
  "topic": "one sentence describing the theme"
}`;

  return getJsonCompletion(client, {
    systemPrompt,
    userPrompt: 'Generate 3 distinct practical texts for IELTS General Training Section 1. Make them realistic and varied.',
    maxTokens: 3000,
  });
}

// ─── Stage 1b: Generate Section 2 (workplace texts) ──────────────────────────

async function generateSection2(client, section1Topic) {
  const systemPrompt = `You are an IELTS General Training test writer.
Return strict JSON only. No markdown, no commentary.

Generate 2 workplace texts for IELTS General Training Reading Section 2.

Section 2 rules:
- Exactly 2 workplace/professional texts.
- Each text: 200–400 words.
- Examples: employee handbook excerpt, training procedures, workplace safety guidelines, job description, company policy, onboarding instructions.
- Tone: professional, instructional, informational. NOT academic.
- Vocabulary: CEFR B1–B2.
- Include specific details: numbered steps, conditions, dates, requirements, exceptions.
- These details are what IELTS questions will test.

Return:
{
  "texts": [
    {
      "id": "T1",
      "title": "Text title",
      "wordCount": 300,
      "contentHtml": "<h3>Title</h3><p>...</p>..."
    },
    { "id": "T2", ... }
  ],
  "combinedHtml": "<p><em>Questions 15–27 refer to the texts below.</em></p><h2>Text 1: ...</h2><p>...</p><hr/><h2>Text 2: ...</h2><p>...</p>",
  "topic": "one sentence describing the workplace context"
}`;

  return getJsonCompletion(client, {
    systemPrompt,
    userPrompt: 'Generate 2 distinct workplace texts for IELTS General Training Section 2. Make them different types (e.g., handbook + safety guidelines).',
    maxTokens: 3000,
  });
}

// ─── Stage 1c: Rewrite crawled article as Section 3 ──────────────────────────

async function rewriteSection3(client, crawled) {
  const systemPrompt = `You are an IELTS General Training test writer.
Return strict JSON only. No markdown, no commentary.

Rewrite an article as an IELTS General Training Section 3 long passage.

Section 3 rules:
- 1 long informational article: 700–1000 words.
- Topics: social issues, education, technology, community, lifestyle, history, work trends.
- Style: neutral informational English — clearer and more accessible than Academic IELTS.
- Vocabulary: CEFR B1–B2. Avoid heavy academic jargon.
- Label paragraphs A, B, C, D, E, F (max H if needed).
- Each paragraph covers exactly one main idea.
- Use HTML: <p><strong>A</strong> Paragraph text.</p>
- Remove: promotional tone, ads, marketing language, calls to action.
- Preserve: facts, explanations, comparisons, cause-effect relationships.
- Do NOT invent facts. Use only facts from the source.

Return:
{
  "title": "Exact article title",
  "wordCount": 850,
  "paragraphLabels": ["A", "B", "C", "D", "E", "F"],
  "contentHtml": "<p><strong>A</strong> ...</p><p><strong>B</strong> ...</p>..."
}`;

  const paragraphs = (crawled.paragraphs || []).slice(0, 20).join('\n\n');
  const userPrompt = `Rewrite this article as an IELTS General Training Section 3 passage.

Title: ${crawled.title}
Source: ${crawled.sourceUrl}

Article text:
${paragraphs}`;

  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 4000 });
}

// ─── Stage 2: Build evidence map for a section ───────────────────────────────

async function buildSectionEvidenceMap(client, section) {
  const systemPrompt = `You are an IELTS General Training question designer.
Return strict JSON only.

Analyze the passage/texts and extract an evidence map for question planning.

For each text unit (paragraph or short text), provide:
- id: paragraph label (A, B, C...) or text ID (T1, T2, T3)
- mainIdea: one sentence summary
- keyFacts: 2–4 specific facts, rules, numbers, conditions
- tfngCandidates: 2–3 statements that can be tested as TRUE/FALSE/NOT GIVEN
- contradictionCandidates: 1–2 statements that would be FALSE if slightly changed
- notGivenCandidates: 1–2 topics NOT mentioned but plausible
- completionPhrases: exact 1–2 word phrases from text suitable for gap-fill

${section.sectionType === 'general_article' ? `Also provide:
- headingIdeas: 8 distinct IELTS-style headings (i–viii). Main idea headings for actual paragraphs, plus 2–3 distractors. Each must have "value" (i–viii) and "text" (meaningful heading, not just the numeral).` : ''}

Return JSON:
{
  "units": [
    {
      "id": "A",
      "mainIdea": "...",
      "keyFacts": ["...", "..."],
      "tfngCandidates": ["...", "..."],
      "contradictionCandidates": ["...", "..."],
      "notGivenCandidates": ["...", "..."],
      "completionPhrases": ["...", "..."]
    }
  ]${section.sectionType === 'general_article' ? `,
  "headingIdeas": [
    { "value": "i", "text": "..." },
    { "value": "ii", "text": "..." },
    { "value": "iii", "text": "..." },
    { "value": "iv", "text": "..." },
    { "value": "v", "text": "..." },
    { "value": "vi", "text": "..." },
    { "value": "vii", "text": "..." },
    { "value": "viii", "text": "..." }
  ]` : ''}
}`;

  const plainText = toPlainText(section.contentHtml);
  const userPrompt = `Build an evidence map for this IELTS General Training ${section.label} passage.\n\nTitle: ${section.title}\n\nContent:\n${plainText}`;
  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 4000 });
}

// ─── Stage 3: Generate questions for a section ────────────────────────────────

function buildGeneralQuestionTypeInstructions(blueprint) {
  return blueprint.groups.map((g) => {
    switch (g.type) {
      case 'matching-information':
        return `matching-information (${g.count} items):
  - Use type "paragraph-matching" in the output JSON.
  - title: "The passage has several texts, T1–T3. Which text contains the following information?"
  - instruction: "Write the correct text number, T1–T3, in boxes [START]–[END] on your answer sheet. NB You may use any letter more than once."
  - items: [{ "description": "..." }] — descriptions that paraphrase specific info in one text.
  - answers: T1, T2, or T3.
  - Each description must clearly map to exactly one text. Focus on scanning/locating details.`;

      case 'true-false-not-given':
        return `true-false-not-given (${g.count} items):
  - title: "Do the following statements agree with the information given in the text(s)?"
  - instruction: "In boxes [START]–[END] on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this."
  - items: [{ "statement": "..." }]
  - answers: TRUE, FALSE, or NOT GIVEN (all caps).
  - General IELTS TFNG tests factual info, rules, conditions, dates — not research interpretation.
  - Do NOT confuse FALSE with NOT GIVEN. NOT GIVEN must be truly absent. FALSE must contradict.
  - Good traps: synonyms, numbers slightly changed, before/after conditions, required vs optional.
  - Questions must follow text order.`;

      case 'sentence-completion':
        return `sentence-completion (${g.count} items):
  - title: "Complete the sentences below."
  - instruction: "Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer. Write your answers in boxes [START]–[END] on your answer sheet."
  - items: [{ "prefix": "...", "suffix": "..." }]
  - answers: exact 1–2 words or a number directly from the text. NEVER more than 2 words.
  - Questions must follow text order. No multiple possible answers.`;

      case 'summary-completion':
        return `summary-completion (${g.count} items):
  - title: "Complete the summary below."
  - instruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes [START]–[END] on your answer sheet."
  - items: [{ "prefix": "...", "suffix": "..." }]
  - answers: exact 1–2 words from the passage. The items form a coherent summary paragraph.`;

      case 'multiple-choice':
        return `multiple-choice (${g.count} items):
  - title: "Choose the correct letter, A, B or C."
  - instruction: "Write the correct letter in boxes [START]–[END] on your answer sheet."
  - items: [{ "question": "...", "options": [{ "value": "A", "text": "..." }, { "value": "B", "text": "..." }, { "value": "C", "text": "..." }] }]
  - answers: A, B, or C. Exactly one correct answer. Distractors plausible but clearly wrong from the text.
  - Questions must follow text order.`;

      case 'paragraph-headings':
        return `paragraph-headings (${g.count} items):
  - title: "The reading passage has ${g.count} paragraphs, A–E. Choose the correct heading for each paragraph from the list of headings below."
  - instruction: "Write the correct number, i-viii, in boxes [START]–[END] on your answer sheet."
  - options: use all 8 headingIdeas from the evidence map. Each option MUST have "value" (Roman numeral) and "text" (meaningful heading, NOT just the numeral).
  - items: [{ "paragraph": "A" }, { "paragraph": "B" }, ...] — one per paragraph being matched.
  - answers: Roman numerals (i–viii). Include distractor headings.`;

      default:
        return `${g.type} (${g.count} items)`;
    }
  });
}

async function generateSectionQuestions(client, { section, evidenceMap, blueprint, startQuestionNumber }) {
  const typeInstructions = buildGeneralQuestionTypeInstructions(blueprint);
  const plainText = toPlainText(section.contentHtml);
  const endQ = startQuestionNumber + blueprint.totalQuestions - 1;

  const systemPrompt = `You are a Cambridge IELTS General Training Reading exam writer.
Return strict JSON only. No markdown, no commentary.

Output:
{
  "questions": [ ...question groups... ],
  "answers": [ ...${blueprint.totalQuestions} answers in order... ]
}

CRITICAL RULES:
- Exactly ${blueprint.groups.length} question groups, in order.
- Exactly ${blueprint.totalQuestions} answers (questions ${startQuestionNumber}–${endQ}).
- Every group must have: type, startQuestionNumber, title, instruction, and items (and options if required).
- Replace [START] and [END] in instructions with actual question numbers.
- Answers must come from the text only. No outside knowledge required.
- This is IELTS General Training — test information location and factual understanding, NOT academic inference.
- General IELTS difficulty: Section 1 = easy, Section 2 = medium, Section 3 = medium.

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

  const userPrompt = `Generate IELTS General Training questions for ${section.label}.

Section title: ${section.title}
Section type: ${blueprint.sectionType}

Passage/texts:
${plainText.slice(0, 3000)}

Question allocation:
${groupSpec}

Total: ${blueprint.totalQuestions} questions (${startQuestionNumber}–${endQ})`;

  return getJsonCompletion(client, { systemPrompt, userPrompt, maxTokens: 5000 });
}

// ─── Stage 4: Assemble final test JSON ───────────────────────────────────────

function assembleTest({ testId, displayTitle, sections, perSectionResults }) {
  const correctAnswers = perSectionResults.flatMap((r) => r.answers);
  const passages = sections.map((section, i) => ({
    title: section.label,
    content: section.contentHtml,
    questions: perSectionResults[i].questions,
  }));
  return { id: testId, title: displayTitle, correctAnswers, passages };
}

// ─── Stage 5: Repair (fallback) ───────────────────────────────────────────────

async function repairTestJson(client, { brokenTest, validationErrors, sections }) {
  const systemPrompt = `You repair IELTS General Training reading test JSON.
Return strict JSON only. No markdown.

Fix all validation errors. Keep exactly 3 passages and exactly 40 answers.
Blueprints:
- Section 1 (Passage 1): paragraph-matching(7) + true-false-not-given(4) + sentence-completion(3) = 14
- Section 2 (Passage 2): true-false-not-given(5) + sentence-completion(4) + multiple-choice(4) = 13
- Section 3 (Passage 3): paragraph-headings(5) + true-false-not-given(4) + summary-completion(4) = 13

For paragraph-headings: options must have 8 entries (i–viii) with meaningful "text" (not just numeral).
For sentence-completion/summary-completion: answers must be NO MORE THAN TWO WORDS AND/OR A NUMBER.
For true-false-not-given: answers must be TRUE/FALSE/NOT GIVEN (all caps).
For multiple-choice: each item must have its own options array.
startQuestionNumber must be sequential: 1, 8, 12, 15, 20, 24, 28, 33, 37.`;

  const plainTexts = sections.map((s, i) => `Section ${i + 1} (${s.title}):\n${toPlainText(s.contentHtml).slice(0, 1000)}`).join('\n\n');

  const userPrompt = `Repair this IELTS General Training test JSON.

Validation errors:
${summarizeValidationErrors(validationErrors)}

Section texts:
${plainTexts}

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

  const existingPath = path.join(GENERAL_DIR, `${exportName}.js`);
  if (fs.existsSync(existingPath)) {
    throw new Error(`practiceGeneralTests/${exportName}.js already exists.`);
  }

  const client = new OpenAI({ apiKey: OPENAI_API_KEY });

  console.log(`Export: ${exportName} | Title: ${displayTitle} | ID: ${testId}`);

  // ── Stage 1: Generate/rewrite all 3 sections ──────────────────────────────────
  console.log('\nStage 1/3: Building section texts...');

  console.log('  Generating Section 1 (social survival texts)...');
  const sec1Raw = await generateSection1(client);
  console.log(`    → ${sec1Raw.texts?.length || 0} texts generated`);

  console.log('  Generating Section 2 (workplace texts)...');
  const sec2Raw = await generateSection2(client, sec1Raw.topic);
  console.log(`    → ${sec2Raw.texts?.length || 0} texts generated`);

  console.log(`  Discovering article for Section 3 from: ${homepageUrl}`);
  const crawled = await pickFreshArticle(homepageUrl);
  console.log(`    → "${crawled.title}", ${crawled.paragraphCount} paragraphs`);

  console.log('  Rewriting Section 3 as IELTS General passage...');
  const sec3Raw = await rewriteSection3(client, crawled);
  console.log(`    → ${sec3Raw.wordCount || countWords(toPlainText(sec3Raw.contentHtml))} words, paragraphs: ${(sec3Raw.paragraphLabels || []).join(', ')}`);

  const sections = [
    {
      label: 'Section 1',
      title: 'Section 1 — Social Survival Texts',
      sectionType: 'social_survival',
      contentHtml: stripTextLabels(sec1Raw.combinedHtml),
      texts: sec1Raw.texts,
    },
    {
      label: 'Section 2',
      title: 'Section 2 — Workplace Texts',
      sectionType: 'workplace',
      contentHtml: stripTextLabels(sec2Raw.combinedHtml),
      texts: sec2Raw.texts,
    },
    {
      label: 'Section 3',
      title: sec3Raw.title || crawled.title,
      sectionType: 'general_article',
      contentHtml: sec3Raw.contentHtml,
      sourceUrl: crawled.sourceUrl,
      sourceTitle: crawled.title,
      image: crawled.image,
    },
  ];

  // ── Stage 2: Build evidence maps ──────────────────────────────────────────────
  console.log('\nStage 2/3: Building evidence maps...');
  const evidenceMaps = [];
  for (let i = 0; i < sections.length; i++) {
    const blueprint = SECTION_BLUEPRINTS[i];
    console.log(`  Evidence map for ${sections[i].label}...`);
    const map = await buildSectionEvidenceMap(client, { ...sections[i], ...blueprint });
    evidenceMaps.push(map);
    console.log(`    → ${(map.units || []).length} units analyzed`);
  }

  // ── Stage 3: Generate questions per section ───────────────────────────────────
  console.log('\nStage 3/3: Generating questions per section...');
  const perSectionResults = [];
  let startQ = 1;
  for (let i = 0; i < sections.length; i++) {
    const blueprint = SECTION_BLUEPRINTS[i];
    console.log(`  ${sections[i].label}: questions ${startQ}–${startQ + blueprint.totalQuestions - 1}`);
    const result = await generateSectionQuestions(client, {
      section: sections[i],
      evidenceMap: evidenceMaps[i],
      blueprint,
      startQuestionNumber: startQ,
    });
    perSectionResults.push(result);
    startQ += blueprint.totalQuestions;
  }

  // ── Assemble ──────────────────────────────────────────────────────────────────
  let generated = normalizeTestObject(assembleTest({ testId, displayTitle, sections, perSectionResults }));
  generated.image = sections[2].image || '';

  // ── Validate + repair ─────────────────────────────────────────────────────────
  let errors = validateTestObject(generated);
  if (errors.length) {
    console.log(`\nValidation failed (${errors.length} errors). Attempting repair...`);
    errors.forEach((e) => console.log(`  - ${e}`));
    generated = normalizeTestObject(await repairTestJson(client, { brokenTest: generated, validationErrors: errors, sections }));
    errors = validateTestObject(generated);
  }

  if (errors.length) {
    throw new Error(`Validation failed after repair:\n${summarizeValidationErrors(errors)}`);
  }

  // ── Write files ───────────────────────────────────────────────────────────────
  fs.mkdirSync(GENERATED_DIR, { recursive: true });

  const generatedModulePath = path.join(GENERATED_DIR, `${exportName}.js`);
  const generatedPackPath = path.join(GENERATED_DIR, `${exportName}.pack.json`);
  const publishedModulePath = path.join(GENERAL_DIR, `${exportName}.js`);

  const pack = { title: displayTitle, sections };
  fs.writeFileSync(generatedPackPath, JSON.stringify(pack, null, 2), 'utf8');
  fs.writeFileSync(generatedModulePath, serializeAsModule(exportName, generated), 'utf8');
  fs.writeFileSync(publishedModulePath, serializeAsModule(exportName, generated), 'utf8');

  updateGeneralIndex(exportName);

  console.log(`\nDone!`);
  console.log(`  Pack:      ${generatedPackPath}`);
  console.log(`  Generated: ${generatedModulePath}`);
  console.log(`  Published: ${publishedModulePath}`);
  console.log(`  Registry:  ${GENERAL_INDEX_PATH}`);
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
