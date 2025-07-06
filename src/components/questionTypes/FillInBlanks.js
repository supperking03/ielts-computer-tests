import React from 'react';

const FillInBlanks = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, wordLimit, items } = question;

    const handleInputChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    const isAnswerCorrect = (questionNumber) => {
        if (!hasViewedResults || !correctAnswers) return null;
        const answerIndex = questionNumber - 1;
        const userAnswer = answers[answerIndex]?.trim().toLowerCase() || '';
        const correctAnswer = correctAnswers[answerIndex]?.toLowerCase() || '';
        return userAnswer === correctAnswer;
    };

    return (
        <div className="question-section fill-in-blanks">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                {wordLimit && <p><strong>{wordLimit}</strong></p>}
            </div>
            
            <div className="questions-list">
                {items.map((item, index) => {
                    const questionNumber = startQuestionNumber + index;
                    const answerIndex = questionNumber - 1;
                    const isCorrect = isAnswerCorrect(questionNumber);
                    
                    return (
                        <div 
                            key={questionNumber} 
                            id={`question-${questionNumber}`}
                            className="question-item" 
                            style={{
                                backgroundColor: '#fafafa',
                                border: hasViewedResults && isCorrect === false ? 
                                    '2px solid #dc3545' : '1px solid #e9ecef',
                                borderRadius: '6px',
                                padding: '12px',
                                margin: hasViewedResults ? '8px 0' : '0'
                            }}
                        >
                            <span className="question-number"><strong>{questionNumber}</strong></span>
                            <span className="question-text">{item.prefix}</span>
                            <input
                                type="text"
                                className="inline-answer-input"
                                value={answers[answerIndex] || ''}
                                onChange={(e) => handleInputChange(questionNumber, e.target.value)}
                                placeholder={`Q${questionNumber}`}
                                style={{
                                    display: 'inline-block',
                                    width: '120px',
                                    padding: '2px 8px',
                                    margin: '0 4px',
                                    border: hasViewedResults && isCorrect === false ? 
                                        '2px solid #dc3545' : '1px solid #333',
                                    borderRadius: '3px',
                                    fontSize: '14px',
                                    backgroundColor: hasViewedResults && isCorrect === false ? 
                                        '#ffe6e6' : '#f8f9fa',
                                    verticalAlign: 'baseline',
                                }}
                            />
                            <span className="question-text">{item.suffix}</span>
                            {hasViewedResults && isCorrect === false && (
                                <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                                    ✗
                                </span>
                            )}
                            {hasViewedResults && isCorrect === false && correctAnswers && (
                                <div style={{ 
                                    fontSize: '12px', 
                                    color: '#721c24', 
                                    marginTop: '4px',
                                    fontStyle: 'italic'
                                }}>
                                    {correctAnswers[answerIndex]}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FillInBlanks; 