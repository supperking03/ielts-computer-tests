const stripHtml = (html = '') => {
    if (typeof window !== 'undefined' && window.DOMParser) {
        const parser = new window.DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    return html.replace(/<[^>]*>/g, ' ');
};

const normalizeWhitespace = (text = '') => text.replace(/\s+/g, ' ').trim();

const formatOptions = (options = []) => (
    options
        .map((option) => {
            const label = option.text || option.label || option.description || '';
            return `${option.value}${label ? `: ${label}` : ''}`;
        })
        .join('\n')
);

const getQuestionText = (group, item) => {
    switch (group.type) {
        case 'fill-in-blanks':
        case 'sentence-completion':
        case 'summary-completion':
            return `${item.prefix || ''} _____ ${item.suffix || ''}`.trim();
        case 'true-false-not-given':
        case 'yes-no-not-given':
            return item.statement || '';
        case 'matching':
        case 'paragraph-matching':
        case 'paragraph-headings':
            return item.description || '';
        case 'multiple-choice':
            return item.question || group.question || '';
        case 'table-completion':
            return `Table completion question ${group.startQuestionNumber + item.questionIndex}`;
        default:
            return item.question || item.description || item.statement || '';
    }
};

const getQuestionOptions = (group, item) => {
    if (group.type === 'multiple-choice') {
        return formatOptions(item.options || []);
    }

    if (group.type === 'summary-completion' || group.type === 'matching') {
        return formatOptions(group.options || []);
    }

    if (group.type === 'true-false-not-given' || group.type === 'yes-no-not-given') {
        return formatOptions(group.options || []);
    }

    if (group.type === 'paragraph-matching' || group.type === 'paragraph-headings') {
        const options = group.options || [];
        if (Array.isArray(options) && typeof options[0] === 'string') {
            return options.join(', ');
        }

        return formatOptions(options);
    }

    return '';
};

const buildQuestionMap = (passages = []) => {
    const questionMap = new Map();

    passages.forEach((passage, passageIndex) => {
        (passage.questions || []).forEach((group) => {
            const items = group.items || [];

            if (group.type === 'table-completion' && group.table?.rows) {
                group.table.rows.forEach((row) => {
                    row.cells.forEach((cell) => {
                        if (cell.type !== 'input') {
                            return;
                        }

                        const questionNumber = group.startQuestionNumber + cell.questionIndex;
                        questionMap.set(questionNumber, {
                            passageIndex,
                            passageTitle: passage.title,
                            passageText: normalizeWhitespace(stripHtml(passage.content)),
                            questionTitle: group.title,
                            instruction: group.instruction,
                            note: group.wordLimit || group.note || '',
                            questionText: `Table completion for question ${questionNumber}`,
                            options: '',
                        });
                    });
                });

                return;
            }

            items.forEach((item, index) => {
                const questionNumber = group.startQuestionNumber + index;
                questionMap.set(questionNumber, {
                    passageIndex,
                    passageTitle: passage.title,
                    passageText: normalizeWhitespace(stripHtml(passage.content)),
                    questionTitle: group.title,
                    instruction: group.instruction,
                    note: group.wordLimit || group.note || '',
                    questionText: getQuestionText(group, item),
                    options: getQuestionOptions(group, item),
                });
            });
        });
    });

    return questionMap;
};

export const createReadingExplanationContext = (selectedTest) => {
    const questionMap = buildQuestionMap(selectedTest?.passages || []);

    return (questionNumber) => {
        const context = questionMap.get(questionNumber);

        if (!context) {
            return null;
        }

        return {
            testTitle: selectedTest?.title || 'IELTS Reading Test',
            ...context,
        };
    };
};
