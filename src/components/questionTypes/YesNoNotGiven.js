import React from 'react';

const YesNoNotGiven = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, options, items } = question;

    const handleAnswerChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    const isAnswerCorrect = (questionNumber) => {
        if (!hasViewedResults || !correctAnswers) return null;
        const answerIndex = questionNumber - 1;
        const userAnswer = answers[answerIndex]?.trim().toUpperCase() || '';
        const correctAnswer = correctAnswers[answerIndex]?.toUpperCase() || '';
        return userAnswer === correctAnswer;
    };

    return (
        <div className="question-section yes-no-not-given">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <p>In boxes {startQuestionNumber}-{startQuestionNumber + items.length - 1} on your answer sheet, write</p>
                <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {options.map((option) => (
                        <p key={option.value} style={{ marginBottom: '5px' }}>
                            <strong>{option.value}</strong> {option.description}
                        </p>
                    ))}
                </div>
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
                                padding: '15px',
                                marginBottom: '20px'
                            }}
                        >
                            <div className="question-header">
                                <span className="question-number"><strong>{questionNumber}</strong></span>
                                <span className="question-statement" style={{ marginLeft: '8px' }}>{item.statement}</span>
                                {hasViewedResults && isCorrect === false && (
                                    <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                                        ✗
                                    </span>
                                )}
                            </div>
                            
                            <div className="answer-options" style={{ marginTop: '12px', paddingLeft: '20px' }}>
                                {options.map((option) => (
                                    <label key={option.value} className="option-label" style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        cursor: 'pointer',
                                        color: '#555'
                                    }}>
                                        <input
                                            type="radio"
                                            name={`question-${questionNumber}`}
                                            value={option.value}
                                            checked={answers[answerIndex] === option.value}
                                            onChange={(e) => handleAnswerChange(questionNumber, e.target.value)}
                                            style={{ marginRight: '8px' }}
                                        />
                                        <strong>{option.value}</strong>
                                    </label>
                                ))}
                            </div>
                            
                            {hasViewedResults && isCorrect === false && correctAnswers && (
                                <div style={{ 
                                    fontSize: '12px', 
                                    color: '#721c24', 
                                    marginTop: '8px',
                                    fontStyle: 'italic',
                                    paddingLeft: '20px'
                                }}>
                                    Correct answer: {correctAnswers[answerIndex]}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default YesNoNotGiven; 