import React from 'react';
import { createAnswerChecker } from '../../utils/answerMatching';

const Matching = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, options, items, note } = question;

    // Safety checks for items and options
    const questionItems = items || [];
    const questionOptions = options || [];

    const handleAnswerSelect = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    const isAnswerCorrect = createAnswerChecker(answers, correctAnswers, hasViewedResults);

    return (
        <div className="question-section matching">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                {note && <p><strong>{note}</strong></p>}
            </div>
            
            <div className="questions-list">
                {questionItems.map((item, index) => {
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
                                <span className="question-text">{item.description}</span>
                                {hasViewedResults && isCorrect === false && (
                                    <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                                        ✗
                                    </span>
                                )}
                            </div>
                            <div className="answer-options">
                                <select
                                    value={currentAnswer}
                                    onChange={(e) => handleAnswerSelect(questionNumber, e.target.value)}
                                    style={{
                                        padding: '4px 8px',
                                        margin: '4px',
                                        border: hasViewedResults && isCorrect === false ? 
                                            '2px solid #dc3545' : '1px solid #333',
                                        borderRadius: '3px',
                                        fontSize: '14px',
                                        backgroundColor: hasViewedResults && isCorrect === false ? 
                                            '#ffe6e6' : '#f8f9fa',
                                        minWidth: '100px'
                                    }}
                                >
                                    <option value="">Select...</option>
                                    {questionOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.value} - {option.label}
                                        </option>
                                    ))}
                                </select>
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

export default Matching; 