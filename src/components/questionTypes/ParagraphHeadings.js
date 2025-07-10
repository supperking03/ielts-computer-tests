import React from 'react';
import { createAnswerChecker } from '../../utils/answerMatching';

const ParagraphHeadings = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, options, items } = question;

    // Safety checks for items and options
    const questionItems = items || [];
    const questionOptions = options || [];

    const handleAnswerChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    const isAnswerCorrect = createAnswerChecker(answers, correctAnswers, hasViewedResults);

    return (
        <div className="question-section paragraph-headings">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <p>Write the correct number, i-viii, in boxes {startQuestionNumber}-{startQuestionNumber + questionItems.length - 1} on your answer sheet.</p>
            </div>
            
            <div className="headings-list" style={{ 
                marginBottom: '20px',
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '6px',
                border: '1px solid #e9ecef'
            }}>
                <h4>List of Headings</h4>
                <div style={{ paddingLeft: '20px' }}>
                    {questionOptions.map((option) => (
                        <p key={option.value} style={{ marginBottom: '8px' }}>
                            <strong>{option.value}</strong> {option.text}
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
                                marginBottom: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div className="question-header" style={{ display: 'flex', alignItems: 'center' }}>
                                <span className="question-number" style={{ marginRight: '10px' }}>
                                    <strong>{questionNumber}</strong>
                                </span>
                                <span className="paragraph-label" style={{ fontSize: '16px' }}>
                                    Paragraph <strong>{item.paragraph}</strong>
                                </span>
                                {hasViewedResults && isCorrect === false && (
                                    <span style={{ marginLeft: '10px', fontSize: '16px', color: '#dc3545' }}>
                                        ✗
                                    </span>
                                )}
                            </div>
                            
                            <div className="answer-input" style={{ display: 'flex', alignItems: 'center' }}>
                                <select
                                    value={answers[answerIndex] || ''}
                                    onChange={(e) => handleAnswerChange(questionNumber, e.target.value)}
                                    style={{
                                        padding: '5px 10px',
                                        borderRadius: '4px',
                                        border: hasViewedResults && isCorrect === false ? 
                                            '2px solid #dc3545' : '1px solid #ccc',
                                        backgroundColor: 'white',
                                        minWidth: '80px'
                                    }}
                                >
                                    <option value="">Select</option>
                                    {questionOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            {hasViewedResults && isCorrect === false && correctAnswers && (
                                <div style={{ 
                                    fontSize: '12px', 
                                    color: '#721c24', 
                                    marginLeft: '15px',
                                    fontStyle: 'italic'
                                }}>
                                    Correct: {correctAnswers[answerIndex]}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ParagraphHeadings; 