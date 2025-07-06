import React from 'react';

const TrueFalseNotGiven = ({ question, startQuestionNumber, answers, onAnswerChange }) => {
    const { title, instruction, options, items } = question;

    const handleAnswerSelect = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
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
                    
                    return (
                        <div key={questionNumber} className="question-item">
                            <div className="question-header">
                                <span className="question-number"><strong>{questionNumber}</strong></span>
                                <span className="question-text">{item.statement}</span>
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrueFalseNotGiven; 