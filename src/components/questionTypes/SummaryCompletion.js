import React from 'react';

const SummaryCompletion = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, sectionTitle, options, items } = question;

    // Safety checks for items and options
    const questionItems = items || [];
    const questionOptions = options || [];

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
        <div className="question-section summary-completion">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <p>Write the correct letter, A-F, in boxes {startQuestionNumber}-{startQuestionNumber + questionItems.length - 1} on your answer sheet.</p>
            </div>
            
            {sectionTitle && (
                <h4 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    {sectionTitle}
                </h4>
            )}
            
            <div className="summary-text" style={{ 
                marginBottom: '20px',
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '6px',
                border: '1px solid #e9ecef',
                lineHeight: '1.8',
                fontSize: '16px'
            }}>
                {questionItems.map((item, index) => {
                    const questionNumber = startQuestionNumber + index;
                    const answerIndex = questionNumber - 1;
                    const isCorrect = isAnswerCorrect(questionNumber);
                    
                    return (
                        <span key={questionNumber}>
                            {item.prefix}
                            <strong style={{ 
                                fontSize: '16px', 
                                color: '#000', 
                                marginLeft: '8px', 
                                marginRight: '8px',
                                padding: '2px 4px'
                            }}>{questionNumber}</strong>
                            <select
                                value={answers[answerIndex] || ''}
                                onChange={(e) => handleAnswerChange(questionNumber, e.target.value)}
                                style={{
                                    marginLeft: '8px',
                                    marginRight: '8px',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    border: hasViewedResults && isCorrect === false ? 
                                        '2px solid #dc3545' : '1px solid #ccc',
                                    backgroundColor: 'white',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="">Select</option>
                                {questionOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                            </select>
                            {hasViewedResults && isCorrect === false && (
                                <span style={{ color: '#dc3545', fontSize: '14px' }}>
                                    ✗
                                </span>
                            )}
                            {item.suffix}
                            {index < questionItems.length - 1 && <span style={{ marginRight: '10px' }}> </span>}
                        </span>
                    );
                })}
            </div>
            
            <div className="options-list" style={{ marginTop: '20px' }}>
                <h4>Options:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                    {questionOptions.map((option) => (
                        <div key={option.value} style={{
                            padding: '8px',
                            border: '1px solid #e9ecef',
                            borderRadius: '4px',
                            backgroundColor: '#fafafa'
                        }}>
                            <strong>{option.value}</strong> {option.text}
                        </div>
                    ))}
                </div>
            </div>
            
            {hasViewedResults && (
                <div style={{ marginTop: '20px' }}>
                    <h4>Correct Answers:</h4>
                    {questionItems.map((item, index) => {
                        const questionNumber = startQuestionNumber + index;
                        const answerIndex = questionNumber - 1;
                        const isCorrect = isAnswerCorrect(questionNumber);
                        
                        return (
                            <div key={questionNumber} style={{
                                color: isCorrect === false ? '#dc3545' : '#28a745',
                                fontSize: '14px',
                                marginBottom: '5px'
                            }}>
                                <strong>{questionNumber}</strong>: {correctAnswers[answerIndex]}
                                {isCorrect === false && (
                                    <span style={{ marginLeft: '10px', color: '#6c757d' }}>
                                        (You answered: {answers[answerIndex] || 'No answer'})
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SummaryCompletion; 