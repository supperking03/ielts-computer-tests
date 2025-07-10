import React from 'react';
import { createAnswerChecker } from '../../utils/answerMatching';

const YesNoNotGiven = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, options, items } = question;

    // Default options for YES/NO/NOT GIVEN if not provided
    const defaultOptions = [
        { value: 'YES', description: 'if the statement agrees with the claims of the writer' },
        { value: 'NO', description: 'if the statement contradicts the claims of the writer' },
        { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
    ];

    // Use provided options or default options
    const questionOptions = options || defaultOptions;
    
    // Safety check for items
    const questionItems = items || [];

    const handleAnswerChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    const isAnswerCorrect = createAnswerChecker(answers, correctAnswers, hasViewedResults);

    return (
        <div className="question-section yes-no-not-given">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <p>In boxes {startQuestionNumber}-{startQuestionNumber + questionItems.length - 1} on your answer sheet, write</p>
                <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {questionOptions.map((option) => (
                        <p key={option.value} style={{ marginBottom: '5px' }}>
                            <strong>{option.value}</strong> {option.description}
                        </p>
                    ))}
                </div>
            </div>
            
            <div className="questions-list">
                {questionItems.map((item, index) => {
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
                                {questionOptions.map((option) => (
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