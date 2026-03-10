import React, { useState, useRef } from 'react';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are an expert IELTS test data converter. Convert the provided HTML of an IELTS Reading test into a JavaScript export object.

CRITICAL OUTPUT RULES:
1. Return ONLY raw JavaScript code — NO markdown fences, NO backticks around the whole output, NO explanation
2. Start your response with exactly: export const
   IMPORTANT: use EXACTLY the export name provided in the user message — do NOT derive it from the HTML title or filename
3. Every question must have exactly ONE entry in correctAnswers[] in question order Q1 through the last question
4. Keep passage HTML clean: preserve <p>, <strong>, <em>, <h2>, <h3>, <ul>, <ol>, <li>, <hr>, <table>, <tr>, <td> tags; strip scripts/nav/footer
5. Passage content includes passage text + "Read the passage and answer Questions X–Y" lines, but NOT the question items

OUTPUT STRUCTURE:
export const EXPORT_NAME = {
    id: TEST_ID,
    title: 'Test Title Here',
    correctAnswers: [
        // Q1-X: type description
        "answer1", "answer2"
    ],
    passages: [
        {
            title: "Reading Passage 1",
            content: \`<html>\`,
            questions: []
        }
    ]
};

QUESTION TYPE SCHEMAS:

1. fill-in-blanks (free text from passage — notes/table/diagram/sentence completion with passage words):
{ type: 'fill-in-blanks', startQuestionNumber: 1, title: 'Questions 1-5',
  instruction: 'Complete the notes below.',
  wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
  sectionTitle: 'Optional section title',
  tableView: false,
  items: [{ prefix: 'Text before gap', suffix: 'text after gap.' }] }
correctAnswers: exact word(s) from passage

2. sentence-completion (same renderer as fill-in-blanks):
{ type: 'sentence-completion', startQuestionNumber: 6, title: 'Questions 6-10',
  instruction: 'Complete the sentences below.',
  wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
  items: [{ prefix: 'Sentence start', suffix: '.' }] }

3. true-false-not-given:
{ type: 'true-false-not-given', startQuestionNumber: 1, title: 'Questions 1-6',
  instruction: 'Do the following statements agree with the information given in the text?',
  options: [
    { value: 'TRUE', description: 'if the statement agrees with the information' },
    { value: 'FALSE', description: 'if the statement contradicts the information' },
    { value: 'NOT GIVEN', description: 'if there is no information on this' }
  ],
  items: [{ statement: 'Exact statement text.' }] }
correctAnswers: "TRUE", "FALSE", or "NOT GIVEN" (always ALL CAPS)

4. yes-no-not-given:
{ type: 'yes-no-not-given', startQuestionNumber: 1, title: 'Questions 1-6',
  instruction: "Do the following statements agree with the views/claims of the writer?",
  options: [
    { value: 'YES', description: 'if the statement agrees with the views of the writer' },
    { value: 'NO', description: 'if the statement contradicts the views of the writer' },
    { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
  ],
  items: [{ statement: 'Exact statement text.' }] }
correctAnswers: "YES", "NO", or "NOT GIVEN"

5. paragraph-matching (match statements to labeled paragraphs A-G, or labeled items like reviews A-E):
{ type: 'paragraph-matching', startQuestionNumber: 7, title: 'Questions 7-13',
  instruction: 'Which section contains the following information?',
  paragraphRange: 'A-G',
  options: ['A','B','C','D','E','F','G'],
  note: 'NB  You may use any letter more than once.',
  items: [{ description: 'a reference to a specific finding' }] }
correctAnswers: single uppercase letter "A", "B", etc.

6. multiple-choice (single answer A/B/C/D):
{ type: 'multiple-choice', startQuestionNumber: 14, title: 'Questions 14-18',
  instruction: 'Choose the correct letter, A, B, C or D.',
  items: [{
    question: 'Full question text?',
    options: [{ value: 'A', text: 'option A' },{ value: 'B', text: 'option B' },{ value: 'C', text: 'option C' },{ value: 'D', text: 'option D' }]
  }] }
correctAnswers: "A", "B", "C", or "D"

7. multiple-choice multiple answers (choose TWO/THREE):
{ type: 'multiple-choice', startQuestionNumber: 19, title: 'Questions 19-20',
  instruction: 'Choose TWO letters, A-E.',
  multipleSelect: true, selectCount: 2,
  items: [{
    question: 'Which TWO statements are true?',
    options: [{ value: 'A', text: 'option' },{ value: 'B', text: 'option' },{ value: 'C', text: 'option' },{ value: 'D', text: 'option' },{ value: 'E', text: 'option' }]
  }] }
correctAnswers: For Q19-20 add TWO separate entries e.g. "A" then "C" — one per question number, alphabetical order.

8. matching (match descriptions to named list, dropdown):
{ type: 'matching', startQuestionNumber: 21, title: 'Questions 21-25',
  instruction: 'Match each statement with the correct researcher.',
  note: 'NB  You may use any letter more than once.',
  options: [{ value: 'A', text: 'Name A' },{ value: 'B', text: 'Name B' },{ value: 'C', text: 'Name C' }],
  items: [{ description: 'Description matching one option' }] }
correctAnswers: "A", "B", "C" etc.

9. summary-completion (fill blanks choosing from a word box A-F):
{ type: 'summary-completion', startQuestionNumber: 26, title: 'Questions 26-31',
  instruction: 'Complete the summary. Choose the correct letter, A-F, from the box.',
  sectionTitle: 'Optional title',
  options: [{ value: 'A', text: 'word A' },{ value: 'B', text: 'word B' },{ value: 'C', text: 'word C' },{ value: 'D', text: 'word D' },{ value: 'E', text: 'word E' },{ value: 'F', text: 'word F' }],
  items: [{ prefix: 'Text before blank', suffix: 'text after blank.' }] }
correctAnswers: letter "A", "B" etc.

10. paragraph-headings:
{ type: 'paragraph-headings', startQuestionNumber: 1, title: 'Questions 1-7',
  instruction: 'Choose the correct heading for each paragraph.',
  options: [{ value: 'i', text: 'Heading one' },{ value: 'ii', text: 'Heading two' },{ value: 'iii', text: 'Heading three' }],
  items: [{ description: 'Paragraph A' },{ description: 'Paragraph B' }] }
correctAnswers: "i", "ii", "iii" etc.

IDENTIFICATION GUIDE:
- "agree with the information" → true-false-not-given
- "agree with the views/claims of the writer" → yes-no-not-given
- "Which paragraph/section contains" → paragraph-matching
- "Look at [reviews/ads] A-E, for which..." → paragraph-matching
- "Choose correct letter A, B, C or D" (each item has own question) → multiple-choice
- "Choose TWO/THREE letters" → multiple-choice multipleSelect:true
- "Complete [sentences/notes/table/diagram]" with words from passage → fill-in-blanks
- "Complete summary" + word box with letters → summary-completion
- "Complete summary" with passage words (no box) → fill-in-blanks
- "Choose correct heading" → paragraph-headings
- "Match each statement with correct [researcher/country]" → matching

ANSWER EXTRACTION:
- Find answer key in the HTML (bottom, labeled "Answers", "Answer Key", or hidden)
- Strict question order Q1 through final question
- Preserve case from key for fill-in-blanks
- TRUE/FALSE/NOT GIVEN and YES/NO/NOT GIVEN always ALL CAPS
- "Choose TWO" spanning Q19-20: one entry per question number`;

// Strip HTML with regex — reliable, no DOM manipulation issues
function extractContent(rawHtml) {
  let s = rawHtml;

  // 1. Remove entire block elements that are never test content
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  s = s.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
  s = s.replace(/<svg[\s\S]*?<\/svg>/gi, '');

  // 2. Strip ALL tag attributes — <p class="x" style="y"> → <p>
  //    This is the biggest token saver (removes class/style/data-* from every tag)
  s = s.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g, '<$1>');

  // 3. Remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, '');

  // 4. Remove self-closing tags that carry no text (img, input, br excess, etc.)
  s = s.replace(/<(img|input|link|meta|source|track|wbr)\s*\/?>/gi, '');

  // 5. Collapse whitespace
  s = s.replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');

  return s.trim();
}

export default function ImportTool() {
  const [open, setOpen] = useState(false);
  const [htmlFile, setHtmlFile] = useState(null);
  const [exportName, setExportName] = useState('');
  const [testId, setTestId] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error
  const [result, setResult] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [tokenEstimate, setTokenEstimate] = useState(null);
  const fileRef = useRef();

  const reset = () => {
    setHtmlFile(null);
    setExportName('');
    setTestId('');
    setStatus('idle');
    setResult('');
    setErrorMsg('');
    setCopied(false);
    setTokenEstimate(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setHtmlFile(file);
    setTokenEstimate(null);
    if (!exportName) {
      const name = file.name.replace(/\.html?$/i, '').replace(/[^a-zA-Z0-9]/g, '_');
      setExportName(name);
    }
    // Show estimated tokens immediately after file pick
    const raw = await file.text();
    const stripped = extractContent(raw);
    const est = Math.round((SYSTEM_PROMPT.length + stripped.length + 200) / 4);
    setTokenEstimate({ stripped: stripped.length, original: raw.length, tokens: est });
  };

  const handleConvert = async () => {
    if (!htmlFile) { setErrorMsg('Chọn file HTML trước.'); return; }
    if (!exportName.trim()) { setErrorMsg('Nhập tên export (vd: generalTest02).'); return; }

    setStatus('loading');
    setErrorMsg('');
    setResult('');

    try {
      const rawHtml = await htmlFile.text();
      const html = extractContent(rawHtml);
      const id = testId ? parseInt(testId) : (200 + Math.floor(Math.random() * 800));

      const userPrompt = `Convert this IELTS test HTML to the JavaScript format.

REQUIRED — use these values exactly, do not change them:
- export name (MUST match exactly): ${exportName.trim()}
- id: ${id}

The first line of your output MUST be: export const ${exportName.trim()} = {

HTML content:
${html}`;

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          max_tokens: 16000,
          temperature: 0.1,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userPrompt },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || `OpenAI error ${res.status}`);
      }

      const data = await res.json();
      let jsCode = data.choices[0]?.message?.content?.trim() || '';

      // Strip markdown fences if model adds them
      if (jsCode.startsWith('```')) {
        jsCode = jsCode.replace(/^```(?:javascript|js)?\n?/, '').replace(/\n?```$/, '').trim();
      }

      setResult(jsCode);
      setStatus('done');
    } catch (err) {
      setErrorMsg(err.message || 'Lỗi không xác định');
      setStatus('error');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exportName.trim()}.js`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        title="Import IELTS test from HTML"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9000,
          background: '#333', color: '#fff', border: 'none',
          borderRadius: '50px', padding: '10px 18px',
          fontSize: '13px', fontWeight: 600, cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}
      >
        ⬆ Import Test
      </button>

      {/* Modal */}
      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) { setOpen(false); reset(); } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div style={{
            background: '#fff', borderRadius: '14px',
            width: '100%', maxWidth: '720px',
            maxHeight: '92vh', overflowY: 'auto',
            padding: '30px', boxShadow: '0 10px 50px rgba(0,0,0,0.3)',
            fontFamily: 'system-ui, sans-serif',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
              <h2 style={{ margin: 0, fontSize: '20px' }}>⬆ Import Test từ HTML</h2>
              <button onClick={() => { setOpen(false); reset(); }} style={{
                border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer', color: '#888', lineHeight: 1,
              }}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* File input */}
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '14px' }}>
                  File HTML đề thi
                </label>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".html,.htm"
                  onChange={handleFileChange}
                  style={{
                    display: 'block', width: '100%', padding: '10px',
                    border: '2px dashed #ccc', borderRadius: '8px',
                    cursor: 'pointer', fontSize: '14px', boxSizing: 'border-box',
                  }}
                />
                {htmlFile && (
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#28a745' }}>
                    ✓ {htmlFile.name} ({(htmlFile.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>

              {/* Export name + ID */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 2 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '14px' }}>
                    Tên export <span style={{ color: '#dc3545' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={exportName}
                    onChange={e => setExportName(e.target.value)}
                    placeholder="vd: generalTest02, cam19test1"
                    style={{
                      width: '100%', padding: '9px 12px', fontSize: '14px',
                      border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '6px', fontSize: '14px' }}>
                    Test ID
                  </label>
                  <input
                    type="number"
                    value={testId}
                    onChange={e => setTestId(e.target.value)}
                    placeholder="vd: 102"
                    style={{
                      width: '100%', padding: '9px 12px', fontSize: '14px',
                      border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
                ID gợi ý: General Reading 101, 102, 103... &nbsp;|&nbsp; Academic 25, 26, 27...
              </p>

              {tokenEstimate && (
                <div style={{
                  background: tokenEstimate.tokens > 25000 ? '#f8d7da' : '#d4edda',
                  border: `1px solid ${tokenEstimate.tokens > 25000 ? '#f5c6cb' : '#c3e6cb'}`,
                  borderRadius: '6px', padding: '10px 14px', fontSize: '13px',
                  color: tokenEstimate.tokens > 25000 ? '#721c24' : '#155724',
                }}>
                  {tokenEstimate.tokens > 25000
                    ? `❌ ~${tokenEstimate.tokens.toLocaleString()} tokens — vẫn quá lớn. Thử save trang dưới dạng "Text Only" thay vì HTML đầy đủ.`
                    : `✅ ~${tokenEstimate.tokens.toLocaleString()} tokens — OK (${(tokenEstimate.original/1024).toFixed(0)}KB → ${(tokenEstimate.stripped/1024).toFixed(0)}KB sau khi strip)`}
                </div>
              )}

              {/* Error */}
              {errorMsg && (
                <div style={{
                  background: '#f8d7da', border: '1px solid #f5c6cb',
                  borderRadius: '8px', padding: '12px 16px', color: '#721c24', fontSize: '14px',
                }}>
                  ❌ {errorMsg}
                </div>
              )}

              {/* Convert button */}
              <button
                onClick={handleConvert}
                disabled={status === 'loading'}
                style={{
                  padding: '13px', fontSize: '15px', fontWeight: 700,
                  background: status === 'loading' ? '#6c757d' : '#007bff',
                  color: '#fff', border: 'none', borderRadius: '8px',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? '⏳ OpenAI đang xử lý (30–90 giây)...' : '🚀 Convert với OpenAI gpt-4o'}
              </button>

              {/* Result */}
              {status === 'done' && result && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: '#28a745' }}>
                      ✅ Xong — {result.length.toLocaleString()} ký tự
                    </span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={handleCopy} style={{
                        padding: '7px 16px', fontSize: '13px', fontWeight: 600,
                        background: copied ? '#28a745' : '#6c757d',
                        color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer',
                      }}>
                        {copied ? '✓ Đã copy' : '📋 Copy'}
                      </button>
                      <button onClick={handleDownload} style={{
                        padding: '7px 16px', fontSize: '13px', fontWeight: 600,
                        background: '#007bff', color: '#fff',
                        border: 'none', borderRadius: '6px', cursor: 'pointer',
                      }}>
                        ⬇ Download {exportName}.js
                      </button>
                    </div>
                  </div>
                  <textarea
                    readOnly value={result} rows={18}
                    style={{
                      width: '100%', fontFamily: 'monospace', fontSize: '12px',
                      border: '1px solid #ddd', borderRadius: '8px',
                      padding: '14px', resize: 'vertical', boxSizing: 'border-box',
                      background: '#f8f9fa', color: '#212529', lineHeight: 1.5,
                    }}
                  />
                  <p style={{ fontSize: '13px', color: '#666', marginTop: '8px', marginBottom: 0 }}>
                    Copy file vào <code>src/components/dataGeneral/</code> rồi thêm import vào <code>index.js</code>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
