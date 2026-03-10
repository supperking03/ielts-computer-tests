#!/usr/bin/env node
/**
 * IELTS Test Importer
 * Usage: node import-test.js <html-file> <export-name> [test-id]
 * Example: node import-test.js general-test02.html generalTest02 102
 * Example: node import-test.js cam19test1.html cam19test1 25
 *
 * Output: <export-name>.js in the current directory
 */

const fs = require('fs');
const path = require('path');

// ---------- Load .env ----------
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .forEach(line => {
      const eq = line.indexOf('=');
      if (eq > 0) {
        const k = line.slice(0, eq).trim();
        const v = line.slice(eq + 1).trim();
        if (k && !process.env[k]) process.env[k] = v;
      }
    });
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('❌  Missing OPENAI_API_KEY in tools/.env');
  process.exit(1);
}

// ---------- CLI args ----------
const [, , htmlFile, exportName, testIdArg] = process.argv;

if (!htmlFile || !exportName) {
  console.log('Usage: node import-test.js <html-file> <export-name> [test-id]');
  console.log('  html-file   Path to the HTML file of the IELTS test');
  console.log('  export-name Name for the JS export (e.g. generalTest02, cam19test1)');
  console.log('  test-id     Optional numeric ID (defaults to 200 + random)');
  console.log('');
  console.log('Examples:');
  console.log('  node import-test.js general-test02.html generalTest02 102');
  console.log('  node import-test.js cam19test1.html cam19test1 25');
  process.exit(1);
}

const htmlFilePath = path.resolve(htmlFile);
if (!fs.existsSync(htmlFilePath)) {
  console.error(`❌  File not found: ${htmlFilePath}`);
  process.exit(1);
}

const testId = testIdArg ? parseInt(testIdArg) : 200 + Math.floor(Math.random() * 800);
const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// ---------- System Prompt ----------
const SYSTEM_PROMPT = `You are an expert IELTS test data converter. Your job is to convert HTML content of an IELTS Reading test into a JavaScript export object following the exact format specification below.

CRITICAL OUTPUT RULES:
1. Return ONLY raw JavaScript code — NO markdown fences, NO backticks around the whole output, NO explanation text before or after
2. Start your response with exactly: export const
3. Every question must have exactly ONE entry in correctAnswers[] — in question order Q1 through the last question
4. Keep passage HTML clean: preserve <p>, <strong>, <em>, <h2>, <h3>, <h4>, <ul>, <ol>, <li>, <hr>, <table>, <tr>, <td>, <th> tags; remove scripts, navigation, header/footer site chrome
5. Passage content should include the passage text AND "Read the passage and answer Questions X–Y" instruction lines, but NOT the question items themselves

OUTPUT STRUCTURE:
export const EXPORT_NAME = {
    id: TEST_ID,
    title: 'Test Title Here',
    correctAnswers: [
        // Q1-X: question type (comment describing each group)
        "answer1", "answer2", "answer3"
    ],
    passages: [
        {
            title: "Reading Passage 1",
            content: \`<html content>\`,
            questions: [/* question objects */]
        },
        {
            title: "Reading Passage 2",
            content: \`<html content>\`,
            questions: [/* question objects */]
        },
        {
            title: "Reading Passage 3",
            content: \`<html content>\`,
            questions: [/* question objects */]
        }
    ]
};

═══════════════════════════════════════
QUESTION TYPE SCHEMAS (use exactly these)
═══════════════════════════════════════

1. FILL-IN-BLANKS — free text typed from passage (also used for note/table/summary completion with passage words):
{
    type: 'fill-in-blanks',
    startQuestionNumber: 1,
    title: 'Questions 1-5',
    instruction: 'Complete the notes below.',
    wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    sectionTitle: 'Title of the notes section (optional, omit if none)',
    tableView: false,  // set true only when questions are presented as a table/grid
    items: [
        { prefix: 'Text before the gap', suffix: 'text after the gap.' },
        { prefix: 'Another sentence start', suffix: 'sentence end.' }
    ]
}
correctAnswers: exact word(s) from the passage that fill each gap, in order

2. SENTENCE-COMPLETION — completing sentence halves using words from passage (same renderer as fill-in-blanks):
{
    type: 'sentence-completion',
    startQuestionNumber: 6,
    title: 'Questions 6-10',
    instruction: 'Complete the sentences below.',
    wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
    items: [
        { prefix: 'The process begins with', suffix: '.' },
        { prefix: 'Scientists discovered that the material', suffix: 'when heated.' }
    ]
}
correctAnswers: exact words from the passage

3. TRUE-FALSE-NOT GIVEN:
{
    type: 'true-false-not-given',
    startQuestionNumber: 1,
    title: 'Questions 1-6',
    instruction: 'Do the following statements agree with the information given in the text?',
    options: [
        { value: 'TRUE', description: 'if the statement agrees with the information' },
        { value: 'FALSE', description: 'if the statement contradicts the information' },
        { value: 'NOT GIVEN', description: 'if there is no information on this' }
    ],
    items: [
        { statement: 'Exact statement text as written in the test.' },
        { statement: 'Another statement.' }
    ]
}
correctAnswers: "TRUE", "FALSE", or "NOT GIVEN" — exactly as written (all caps)

4. YES-NO-NOT GIVEN (used when asking about writer's views/opinions):
{
    type: 'yes-no-not-given',
    startQuestionNumber: 1,
    title: 'Questions 1-6',
    instruction: 'Do the following statements agree with the views/claims of the writer?',
    options: [
        { value: 'YES', description: 'if the statement agrees with the views of the writer' },
        { value: 'NO', description: 'if the statement contradicts the views of the writer' },
        { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
    ],
    items: [
        { statement: 'Exact statement text.' }
    ]
}
correctAnswers: "YES", "NO", or "NOT GIVEN"

5. PARAGRAPH-MATCHING — match statements to labeled paragraphs/sections (A, B, C...):
{
    type: 'paragraph-matching',
    startQuestionNumber: 7,
    title: 'Questions 7-13',
    instruction: 'The reading passage has several sections, A-G. Which section contains the following information?',
    paragraphRange: 'A-G',
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    note: 'NB  You may use any letter more than once.',  // include only if the test says this
    items: [
        { description: 'a reference to a specific idea or finding' },
        { description: 'an explanation of why a method is preferred' }
    ]
}
correctAnswers: single uppercase letter "A", "B", etc.

ALSO USE paragraph-matching when the test lists labeled items (A, B, C...) in the passage and asks students to match questions to those items (e.g. "look at five reviews A-E, for which review are the following statements true?"):
{
    type: 'paragraph-matching',
    startQuestionNumber: 7,
    title: 'Questions 7-14',
    instruction: 'Look at the five reviews of rice cookers, A–E. For which rice cooker are the following statements true?',
    paragraphRange: 'A–E',
    options: ['A', 'B', 'C', 'D', 'E'],
    note: 'NB  You may use any letter more than once.',
    items: [
        { description: 'The handles at the side are hard to use.' }
    ]
}

6. MULTIPLE-CHOICE — single correct answer (A/B/C/D):
{
    type: 'multiple-choice',
    startQuestionNumber: 14,
    title: 'Questions 14-18',
    instruction: 'Choose the correct letter, A, B, C or D.',
    items: [
        {
            question: 'The full question text as written?',
            options: [
                { value: 'A', text: 'First option text' },
                { value: 'B', text: 'Second option text' },
                { value: 'C', text: 'Third option text' },
                { value: 'D', text: 'Fourth option text' }
            ]
        }
    ]
}
correctAnswers: "A", "B", "C", or "D"

7. MULTIPLE-CHOICE with multiple answers (choose TWO/THREE):
{
    type: 'multiple-choice',
    startQuestionNumber: 19,
    title: 'Questions 19-20',
    instruction: 'Choose TWO letters, A-E.',
    multipleSelect: true,
    selectCount: 2,
    items: [
        {
            question: 'Which TWO of the following statements are true according to the passage?',
            options: [
                { value: 'A', text: 'First option' },
                { value: 'B', text: 'Second option' },
                { value: 'C', text: 'Third option' },
                { value: 'D', text: 'Fourth option' },
                { value: 'E', text: 'Fifth option' }
            ]
        }
    ]
}
correctAnswers: For "choose TWO" that spans Q19-20, add TWO entries like "A" and "C" (one per question number), NOT "A,C" as one entry.
IMPORTANT: each question number = one correctAnswers entry. So Q19-20 = 2 entries. The letters should be sorted alphabetically.

8. MATCHING — match descriptions to a named list (dropdown):
{
    type: 'matching',
    startQuestionNumber: 21,
    title: 'Questions 21-25',
    instruction: 'Look at the following statements and the list of researchers below. Match each statement with the correct researcher.',
    note: 'NB  You may use any letter more than once.',  // include only if stated
    options: [
        { value: 'A', text: 'Researcher Name A' },
        { value: 'B', text: 'Researcher Name B' },
        { value: 'C', text: 'Researcher Name C' }
    ],
    items: [
        { description: 'Description that matches one of the options above' }
    ]
}
correctAnswers: "A", "B", "C", etc.

9. SUMMARY-COMPLETION — fill blanks in a summary by choosing from a word box:
{
    type: 'summary-completion',
    startQuestionNumber: 26,
    title: 'Questions 26-31',
    instruction: 'Complete the summary below. Choose the correct letter, A-F, from the box below.',
    sectionTitle: 'Optional title of this summary section',
    options: [
        { value: 'A', text: 'word or phrase A' },
        { value: 'B', text: 'word or phrase B' },
        { value: 'C', text: 'word or phrase C' },
        { value: 'D', text: 'word or phrase D' },
        { value: 'E', text: 'word or phrase E' },
        { value: 'F', text: 'word or phrase F' }
    ],
    items: [
        { prefix: 'Text before the blank', suffix: 'text after the blank.' }
    ]
}
correctAnswers: the letter value like "A", "B", etc.

10. PARAGRAPH-HEADINGS — choose headings for numbered/lettered paragraphs:
{
    type: 'paragraph-headings',
    startQuestionNumber: 1,
    title: 'Questions 1-7',
    instruction: 'Reading Passage has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below.',
    options: [
        { value: 'i', text: 'First heading text' },
        { value: 'ii', text: 'Second heading text' },
        { value: 'iii', text: 'Third heading text' },
        { value: 'iv', text: 'Fourth heading text' },
        { value: 'v', text: 'Fifth heading text' },
        { value: 'vi', text: 'Sixth heading text' },
        { value: 'vii', text: 'Seventh heading text' },
        { value: 'viii', text: 'Eighth heading text' }
    ],
    items: [
        { description: 'Paragraph A' },
        { description: 'Paragraph B' },
        { description: 'Paragraph C' }
    ]
}
correctAnswers: "i", "ii", "iii", "iv", etc.

═══════════════════════════════════════
QUESTION TYPE IDENTIFICATION GUIDE
═══════════════════════════════════════
- "Do the following statements agree with the information" → true-false-not-given
- "Do the following statements agree with the views/claims of the writer" → yes-no-not-given
- "Which paragraph/section contains..." → paragraph-matching
- "Look at [reviews/advertisements/notices] A-E, for which [item] are the following..." → paragraph-matching
- "Choose the correct letter, A, B, C or D" (each item has its own question stem + 4 options) → multiple-choice
- "Choose TWO/THREE letters, A-E" → multiple-choice with multipleSelect:true
- "Complete the [sentences/notes/table/diagram/flow chart] below" using words from the passage → fill-in-blanks
- "Complete the summary below" + word box with letters A-F etc. → summary-completion
- "Complete the summary below" using words from the passage (no word box) → fill-in-blanks
- "Choose the correct heading for each paragraph" → paragraph-headings
- "Match each statement with the correct [researcher/organisation/country]" (named list, dropdown) → matching
- "Complete each sentence with the correct ending" from lettered list → matching (options = sentence endings)

═══════════════════════════════════════
ANSWER EXTRACTION
═══════════════════════════════════════
- Look for answer key sections in the HTML (often near the bottom, labeled "Answers", "Answer Key", or in a collapsed/hidden section)
- Extract answers in strict question order Q1 through the final question
- For fill-in-blanks: use exact words as they appear in the answer key (preserve original case)
- For TRUE/FALSE/NOT GIVEN: always write exactly "TRUE", "FALSE", "NOT GIVEN" (all caps)
- For YES/NO/NOT GIVEN: always write exactly "YES", "NO", "NOT GIVEN" (all caps)
- For multiple-choice multiple answers spanning Q19-20: add one entry per question number

═══════════════════════════════════════
GENERAL NOTES
═══════════════════════════════════════
- A General IELTS Reading test has 3 passages, typically 40 questions total
- An Academic IELTS Reading test has 3 passages, 40 questions total
- If the HTML only has one or two passages, create only that many passage objects
- Include question instructions in the passage content HTML so students can read them
- Separate the three passages into three different passage objects in the passages array
- Preserve paragraph labels (A, B, C, D, E, F, G) as bold text in the passage HTML`;

// ---------- User Prompt ----------
const USER_PROMPT = `Convert this IELTS test HTML to the JavaScript format. Use:
- export name: ${exportName}
- id: ${testId}

HTML content:
${htmlContent}`;

// ---------- Call OpenAI ----------
async function callOpenAI() {
  console.log(`\n📄  Reading: ${htmlFilePath}`);
  console.log(`🔑  Export name: ${exportName}, ID: ${testId}`);
  console.log(`🤖  Calling OpenAI (gpt-4o)... this may take 30-90 seconds\n`);

  const { OpenAI } = require('openai');
  const client = new OpenAI({ apiKey: OPENAI_API_KEY });

  let result = '';
  const stream = await client.chat.completions.create({
    model: 'gpt-4o',
    max_tokens: 16000,
    temperature: 0.1,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: USER_PROMPT }
    ],
    stream: true,
  });

  process.stdout.write('Streaming output: ');
  let charCount = 0;
  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content || '';
    result += delta;
    charCount += delta.length;
    if (charCount % 500 < delta.length) process.stdout.write('.');
  }
  console.log(` done (${charCount} chars)\n`);

  return result;
}

// ---------- Post-process & save ----------
function cleanOutput(raw) {
  // Strip markdown fences if model accidentally adds them
  let cleaned = raw.trim();
  if (cleaned.startsWith('```javascript') || cleaned.startsWith('```js')) {
    cleaned = cleaned.replace(/^```(?:javascript|js)\n?/, '').replace(/\n?```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\n?/, '').replace(/\n?```$/, '');
  }
  return cleaned.trim();
}

async function main() {
  try {
    const raw = await callOpenAI();
    const jsCode = cleanOutput(raw);

    // Basic sanity check
    if (!jsCode.startsWith('export const')) {
      console.warn('⚠️  Output does not start with "export const" — check the file carefully');
    }

    const outputPath = path.join(process.cwd(), `${exportName}.js`);
    fs.writeFileSync(outputPath, jsCode, 'utf8');

    console.log(`✅  Saved: ${outputPath}`);
    console.log('');
    console.log('Next steps:');
    console.log(`  1. Copy ${exportName}.js → src/components/dataGeneral/ (or newData/)`);
    console.log(`  2. Add import in the index.js of that folder`);
    console.log(`  3. Add to the tests array`);
  } catch (err) {
    if (err.status === 401) {
      console.error('❌  Invalid OpenAI API key. Check tools/.env');
    } else if (err.status === 429) {
      console.error('❌  Rate limit / quota exceeded on your OpenAI account');
    } else {
      console.error('❌  Error:', err.message || err);
    }
    process.exit(1);
  }
}

main();
