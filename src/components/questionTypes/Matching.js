import React from 'react';

const Matching = ({ question, startQuestionNumber, answers, onAnswerChange }) => {
    const { title, instruction, options, items, note } = question;

    const handleAnswerSelect = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    return (
        <div className="question-section matching">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                {note && <p><strong>{note}</strong></p>}
            </div>
            
            <div className="questions-list">
                {items.map((item, index) => {
                    const questionNumber = startQuestionNumber + index;
                    const answerIndex = questionNumber - 1;
                    const currentAnswer = answers[answerIndex] || '';
                    
                    return (
                        <div key={questionNumber} className="question-item">
                            <div className="question-header">
                                <span className="question-number"><strong>{questionNumber}</strong></span>
                                <span className="question-text">{item.description}</span>
                            </div>
                            <div className="answer-options">
                                <select
                                    value={currentAnswer}
                                    onChange={(e) => handleAnswerSelect(questionNumber, e.target.value)}
                                    style={{
                                        padding: '4px 8px',
                                        margin: '4px',
                                        border: '1px solid #007BFF',
                                        borderRadius: '3px',
                                        fontSize: '14px',
                                        backgroundColor: '#f8f9fa',
                                        minWidth: '100px'
                                    }}
                                >
                                    <option value="">Select...</option>
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.value} - {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    );
                })}
            </div>

            {options && (
                <div className="options-list" style={{ marginTop: '20px', paddingLeft: '40px' }}>
                    <h4>Options:</h4>
                    {options.map(option => (
                        <p key={option.value}>
                            <strong>{option.value}</strong> - {option.label}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Matching; 