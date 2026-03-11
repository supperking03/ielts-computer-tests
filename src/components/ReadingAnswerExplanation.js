import React from 'react';

const ReadingAnswerExplanation = ({
    questionNumber,
    hasViewedResults,
    isLoading,
    isOpen,
    explanation,
    error,
    onToggle
}) => {
    if (!hasViewedResults) {
        return null;
    }

    const explanationText = typeof explanation === 'string'
        ? explanation
        : explanation?.explanation || '';

    return (
        <div className="reading-explanation-block">
            <button type="button" className="explain-answer-button" onClick={onToggle}>
                {isLoading ? 'Đang giải thích...' : isOpen && explanationText ? `Ẩn giải thích câu ${questionNumber}` : `Giải thích câu ${questionNumber}`}
            </button>
            {isOpen && (
                <div className="answer-explanation-panel">
                    {isLoading && <div className="answer-explanation-loading">Đang gọi OpenAI để giải thích...</div>}
                    {!isLoading && error && <div className="answer-explanation-error">{error}</div>}
                    {!isLoading && !error && explanationText && <div className="answer-explanation-text">{explanationText}</div>}
                </div>
            )}
        </div>
    );
};

export default ReadingAnswerExplanation;
