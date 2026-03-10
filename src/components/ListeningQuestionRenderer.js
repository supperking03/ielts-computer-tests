import React from 'react';
import { isAnswerMatch } from '../utils/answerMatching';

// ── Fill-in-blanks ──────────────────────────────────────────────────────────
// Parses `text` for [N] placeholders and renders inline inputs.
function FillInBlanks({ group, answers, onAnswerChange, hasViewedResults, correctAnswers }) {
    const { title, instruction, text, startQuestion } = group;

    // Split the text on [N] tokens and render inline inputs
    const parts = text.split(/(\[\d+\])/);

    const renderPart = (part, i) => {
        const match = part.match(/^\[(\d+)\]$/);
        if (!match) return <span key={i} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;

        const qNum = parseInt(match[1]);
        const value = answers[qNum - 1] || '';
        const correct = correctAnswers ? correctAnswers[qNum - 1] : null;
        const isCorrect = hasViewedResults && correct !== undefined
            ? isAnswerMatch(value.trim().toLowerCase(), correct.toLowerCase())
            : null;

        if (hasViewedResults) {
            return (
                <span key={i} id={`question-${qNum}`} style={{
                    display: 'inline-block', minWidth: '80px', borderBottom: '2px solid',
                    borderColor: isCorrect ? '#28a745' : '#dc3545',
                    backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
                    padding: '0 4px', margin: '0 2px', textAlign: 'center',
                    fontSize: '13px', fontWeight: 'bold',
                    color: isCorrect ? '#155724' : '#721c24'
                }}>
                    <sup style={{ fontSize: '13px', fontWeight: 'bold', marginRight: '2px' }}>{qNum}</sup>
                    {value || '___'}
                </span>
            );
        }

        return (
            <span key={i} id={`question-${qNum}`} style={{ display: 'inline-block', margin: '0 2px' }}>
                <sup style={{ fontSize: '13px', fontWeight: 'bold', verticalAlign: 'super', color: '#444' }}>{qNum}</sup>
                <input
                    type="text"
                    value={value}
                    onChange={e => onAnswerChange(qNum, e.target.value)}
                    style={{
                        width: '100px', borderBottom: '2px solid #333', borderTop: 'none',
                        borderLeft: 'none', borderRight: 'none', outline: 'none',
                        background: 'transparent', fontSize: '14px', padding: '0 4px'
                    }}
                />
            </span>
        );
    };

    return (
        <div className="question-section fill-in-blanks">
            {title && <h3>{title}</h3>}
            <div className="instruction" style={{ fontStyle: 'italic', marginBottom: '12px', color: '#555' }}>
                <p>{instruction}</p>
            </div>
            <div style={{ lineHeight: '2.2', fontSize: '15px' }}>
                {parts.map(renderPart)}
            </div>
        </div>
    );
}

// ── Multiple-choice (single A/B/C) ──────────────────────────────────────────
function MultipleChoice({ group, answers, onAnswerChange, hasViewedResults, correctAnswers }) {
    const { title, instruction, questions, startQuestion } = group;

    return (
        <div className="question-section multiple-choice">
            {title && <h3>{title}</h3>}
            <div className="instruction" style={{ fontStyle: 'italic', marginBottom: '12px', color: '#555' }}>
                <p>{instruction}</p>
            </div>
            {(questions || []).map(({ number, text, options }) => {
                const value = answers[number - 1] || '';
                const correct = correctAnswers ? correctAnswers[number - 1] : null;
                const isCorrect = hasViewedResults && correct
                    ? isAnswerMatch(value.trim().toLowerCase(), correct.toLowerCase())
                    : null;
                const letters = ['A', 'B', 'C', 'D', 'E'];

                return (
                    <div key={number} id={`question-${number}`} style={{
                        backgroundColor: '#fafafa', border: hasViewedResults && isCorrect === false
                            ? '2px solid #dc3545' : '1px solid #e9ecef',
                        borderRadius: '6px', padding: '15px', marginBottom: '16px'
                    }}>
                        <div style={{ marginBottom: '10px' }}>
                            <strong>{number}</strong>&nbsp;&nbsp;{text}
                        </div>
                        {options.map((opt, i) => {
                            const letter = letters[i];
                            const isSelected = value === letter;
                            return (
                                <label key={letter} style={{ display: 'block', marginBottom: '6px', cursor: hasViewedResults ? 'default' : 'pointer' }}>
                                    <input
                                        type="radio"
                                        name={`q-${number}`}
                                        value={letter}
                                        checked={isSelected}
                                        disabled={hasViewedResults}
                                        onChange={() => onAnswerChange(number, letter)}
                                        style={{ marginRight: '8px' }}
                                    />
                                    <strong>{letter}</strong>&nbsp;&nbsp;{opt}
                                </label>
                            );
                        })}
                        {hasViewedResults && isCorrect === false && correct && (
                            <div style={{ fontSize: '12px', color: '#721c24', marginTop: '6px', fontStyle: 'italic' }}>
                                Correct: {correct}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ── Multiple-select (choose TWO/THREE) ──────────────────────────────────────
function MultipleSelect({ group, answers, onAnswerChange, hasViewedResults, correctAnswers }) {
    const { title, instruction, questionText, options, startQuestion, count = 2 } = group;

    // question numbers occupied by this group
    const qNums = Array.from({ length: count }, (_, i) => startQuestion + i);
    const selected = qNums.map(n => answers[n - 1] || '').filter(v => v);
    const letters = ['A', 'B', 'C', 'D', 'E'];

    const handleChange = (letter, checked) => {
        if (checked) {
            if (selected.length >= count) return;
            const emptyIdx = qNums.findIndex(n => !answers[n - 1]);
            if (emptyIdx !== -1) onAnswerChange(qNums[emptyIdx], letter);
        } else {
            qNums.forEach(n => { if (answers[n - 1] === letter) onAnswerChange(n, ''); });
        }
    };

    return (
        <div className="question-section multiple-select" id={`question-${startQuestion}`}>
            {title && <h3>{title}</h3>}
            <div className="instruction" style={{ fontStyle: 'italic', marginBottom: '8px', color: '#555' }}>
                <p>{instruction}</p>
            </div>
            <div style={{
                backgroundColor: '#fafafa', border: '1px solid #e9ecef',
                borderRadius: '6px', padding: '15px', marginBottom: '16px'
            }}>
                <div style={{ marginBottom: '10px' }}>
                    <strong>{qNums.join(' and ')}</strong>&nbsp;&nbsp;{questionText}
                </div>
                {options.map((opt, i) => {
                    const letter = letters[i];
                    const isChecked = selected.includes(letter);
                    const atLimit = selected.length >= count && !isChecked;
                    return (
                        <label key={letter} style={{
                            display: 'block', marginBottom: '6px',
                            cursor: atLimit ? 'not-allowed' : 'pointer',
                            opacity: atLimit ? 0.5 : 1
                        }}>
                            <input
                                type="checkbox"
                                value={letter}
                                checked={isChecked}
                                disabled={hasViewedResults || atLimit}
                                onChange={e => handleChange(letter, e.target.checked)}
                                style={{ marginRight: '8px' }}
                            />
                            <strong>{letter}</strong>&nbsp;&nbsp;{opt}
                        </label>
                    );
                })}
                {hasViewedResults && (
                    <div style={{ fontSize: '12px', color: '#555', marginTop: '6px', fontStyle: 'italic' }}>
                        Correct: {qNums.map(n => correctAnswers?.[n - 1]).join(', ')}
                    </div>
                )}
            </div>
        </div>
    );
}

// ── Matching (map / plan labeling / choose from list) ───────────────────────
function Matching({ group, answers, onAnswerChange, hasViewedResults, correctAnswers }) {
    const { title, instruction, optionsTitle, options, questions, startQuestion, mapImage } = group;
    const defaultLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rangeMatch = instruction?.match(/\b([A-Z])\s*-\s*([A-Z])\b/);
    const choiceLetters = rangeMatch
        ? Array.from(
            { length: rangeMatch[2].charCodeAt(0) - rangeMatch[1].charCodeAt(0) + 1 },
            (_, i) => String.fromCharCode(rangeMatch[1].charCodeAt(0) + i)
        )
        : (options?.length ? defaultLetters.slice(0, options.length) : defaultLetters);

    return (
        <div className="question-section matching">
            {title && <h3>{title}</h3>}
            <div className="instruction" style={{ fontStyle: 'italic', marginBottom: '12px', color: '#555' }}>
                <p>{instruction}</p>
            </div>

            {/* Options box */}
            {options?.length > 0 && (
                <div style={{ backgroundColor: '#f0f4f8', border: '1px solid #ccd', borderRadius: '6px', padding: '12px', marginBottom: '16px' }}>
                    {optionsTitle && <strong style={{ display: 'block', marginBottom: '6px' }}>{optionsTitle}</strong>}
                    {options.map((opt, i) => (
                        <div key={i} style={{ marginBottom: '4px' }}>
                            <strong>{choiceLetters[i]}</strong>&nbsp;&nbsp;{opt}
                        </div>
                    ))}
                </div>
            )}

            {mapImage && (
                <img src={mapImage} alt="Map" style={{ maxWidth: '100%', marginBottom: '16px', border: '1px solid #ddd' }} />
            )}

            {/* Questions */}
            {(questions || []).map(({ number, text }) => {
                const value = answers[number - 1] || '';
                const correct = correctAnswers ? correctAnswers[number - 1] : null;
                const isCorrect = hasViewedResults && correct
                    ? isAnswerMatch(value.trim().toLowerCase(), correct.toLowerCase())
                    : null;

                return (
                    <div key={number} id={`question-${number}`} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        backgroundColor: '#fafafa',
                        border: hasViewedResults && isCorrect === false ? '2px solid #dc3545' : '1px solid #e9ecef',
                        borderRadius: '6px', padding: '10px', marginBottom: '8px'
                    }}>
                        <strong style={{ minWidth: '24px' }}>{number}</strong>
                        <span style={{ flex: 1 }}>{text}</span>
                        <select
                            value={value}
                            disabled={hasViewedResults}
                            onChange={e => onAnswerChange(number, e.target.value)}
                            style={{
                                padding: '4px 8px', border: '1px solid #333', borderRadius: '4px',
                                fontSize: '14px', minWidth: '80px'
                            }}
                        >
                            <option value="">--</option>
                            {choiceLetters.map((letter) => (
                                <option key={letter} value={letter}>{letter}</option>
                            ))}
                        </select>
                        {hasViewedResults && isCorrect === false && correct && (
                            <span style={{ fontSize: '12px', color: '#721c24' }}>✗ {correct}</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ── Main dispatcher ─────────────────────────────────────────────────────────
const ListeningQuestionRenderer = ({ questionsData, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const renderGroup = (group, index) => {
        const props = { group, answers, onAnswerChange, hasViewedResults, correctAnswers };
        switch (group.type) {
            case 'fill-in-blanks':     return <FillInBlanks key={index} {...props} />;
            case 'multiple-choice':    return <MultipleChoice key={index} {...props} />;
            case 'multiple-select':    return <MultipleSelect key={index} {...props} />;
            case 'matching':           return <Matching key={index} {...props} />;
            default:
                return <div key={index} style={{ color: 'red' }}>Unknown type: {group.type}</div>;
        }
    };

    return (
        <div className="questions-container">
            {(questionsData || []).map((group, index) => (
                <div key={index} className="question-group">
                    {renderGroup(group, index)}
                    {index < questionsData.length - 1 && (
                        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #ddd' }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ListeningQuestionRenderer;
