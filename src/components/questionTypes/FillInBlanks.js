import React from 'react';

const FillInBlanks = ({ question, startQuestionNumber, answers, onAnswerChange }) => {
    const { title, instruction, wordLimit, items } = question;

    const handleInputChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
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
                    
                    return (
                        <div key={questionNumber} className="question-item">
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
                                    border: '1px solid #007BFF',
                                    borderRadius: '3px',
                                    fontSize: '14px',
                                    backgroundColor: '#f8f9fa',
                                    verticalAlign: 'baseline',
                                }}
                            />
                            <span className="question-text">{item.suffix}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FillInBlanks; 