import React from 'react';

const TrueFalseNotGiven = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, options, items } = question;

    const handleAnswerSelect = (questionNumber, value) => {
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
        <div className="question-section true-false-not-given">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <div className="options-explanation">
                    {options.map((option, index) => (
                        <p key={index} style={{ paddingLeft: '40px' }}>
                            <strong>{option.value}</strong> - {option.description}
                        </p>
                    ))}
                </div>
            </div>
            
            <div className="questions-list">
                {items.map((item, index) => {
                    const questionNumber = startQuestionNumber + index;
                    const answerIndex = questionNumber - 1;
                    const currentAnswer = answers[answerIndex] || '';
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
                            <div className="question-header">
                                <span className="question-number"><strong>{questionNumber}</strong></span>
                                <span className="question-text">{item.statement}</span>
                                {hasViewedResults && isCorrect === false && (
                                    <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                                        ✗
                                    </span>
                                )}
                            </div>
                            <div className="answer-options">
                                {options.map(option => (
                                    <label key={option.value} className="option-label">
                                        <input
                                            type="radio"
                                            name={`question-${questionNumber}`}
                                            value={option.value}
                                            checked={currentAnswer.toLowerCase() === option.value.toLowerCase()}
                                            onChange={(e) => handleAnswerSelect(questionNumber, e.target.value)}
                                            style={{ marginRight: '8px' }}
                                        />
                                        {option.value}
                                    </label>
                                ))}
                            </div>
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

export default TrueFalseNotGiven; 