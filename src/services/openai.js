const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const EXPLANATION_SYSTEM_PROMPT = `You are an IELTS Reading tutor.
Explain why the correct answer is correct using only the provided passage and question context.
Keep the explanation concise and practical.
If the user's answer is wrong, briefly explain why it is wrong.
Do not mention that you are an AI.
Do not invent evidence that is not present in the provided passage excerpt.
Return strict JSON only.`;

export async function getReadingAnswerExplanation({
    testTitle,
    passageTitle,
    passageText,
    questionNumber,
    questionTitle,
    instruction,
    note,
    questionText,
    options,
    userAnswer,
    correctAnswer
}) {
    if (!OPENAI_API_KEY) {
        throw new Error('Thiếu REACT_APP_OPENAI_API_KEY để gọi OpenAI API.');
    }

    const prompt = [
        `Test: ${testTitle}`,
        `Passage: ${passageTitle}`,
        `Question number: ${questionNumber}`,
        questionTitle ? `Question group: ${questionTitle}` : '',
        instruction ? `Instruction: ${instruction}` : '',
        note ? `Note: ${note}` : '',
        `Question: ${questionText || 'N/A'}`,
        options ? `Options:\n${options}` : '',
        `User answer: ${userAnswer || 'No answer'}`,
        `Correct answer: ${correctAnswer}`,
        `Passage excerpt/text:\n${passageText}`,
        'Return JSON with this shape:',
        '{"explanation":"2-4 short sentences in Vietnamese","evidenceSnippet":"exact short quote from the passage, 8-20 words if possible"}'
    ].filter(Boolean).join('\n\n');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            temperature: 0.2,
            max_tokens: 300,
            messages: [
                { role: 'system', content: EXPLANATION_SYSTEM_PROMPT },
                { role: 'user', content: prompt },
            ],
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || `OpenAI error ${response.status}`);
    }

    const data = await response.json();
    let content = data.choices?.[0]?.message?.content?.trim() || '';

    if (content.startsWith('```')) {
        content = content
            .replace(/^```(?:json)?\s*/i, '')
            .replace(/\s*```$/, '')
            .trim();
    }

    try {
        const parsed = JSON.parse(content);
        return {
            explanation: parsed.explanation || 'Không nhận được nội dung giải thích.',
            evidenceSnippet: parsed.evidenceSnippet || ''
        };
    } catch {
        return {
            explanation: content || 'Không nhận được nội dung giải thích.',
            evidenceSnippet: ''
        };
    }
}
