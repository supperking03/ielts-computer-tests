import React from 'react';

const FillInBlanks = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, wordLimit, items, tableView, sectionTitle } = question;

    // Safety check for items
    const questionItems = items || [];

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

    // If this is a table view, render as a table
    if (tableView) {
        return (
            <div className="question-section fill-in-blanks">
                <h3>{title}</h3>
                <div className="instruction">
                    <p>{instruction}</p>
                    {wordLimit && <p><strong>{wordLimit}</strong></p>}
                    <p>Write your answers in boxes {startQuestionNumber}-{startQuestionNumber + questionItems.length - 1} on your answer sheet.</p>
                </div>
                
                {sectionTitle && (
                    <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
                        {sectionTitle}
                    </h3>
                )}
                
                <div className="table-container" style={{ overflowX: 'auto', marginTop: '20px' }}>
                    <table style={{ 
                        borderCollapse: 'collapse', 
                        width: '100%',
                        border: '1px solid #ddd'
                    }}>
                        <thead>
                            <tr>
                                <th style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'left'
                                }}></th>
                                <th style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'center'
                                }}>Growth</th>
                                <th style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'center'
                                }}>Selection</th>
                                <th style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px',
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'center'
                                }}>Sale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px',
                                    fontWeight: 'bold'
                                }}>Intensive farming</td>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px'
                                }}>
                                    <div>• wide range of 
                                        <input
                                            type="text"
                                            className="inline-answer-input"
                                            value={answers[3] || ''}
                                            onChange={(e) => handleInputChange(4, e.target.value)}
                                            placeholder="Q4"
                                            style={{
                                                display: 'inline-block',
                                                width: '80px',
                                                padding: '2px 6px',
                                                margin: '0 2px',
                                                border: '1px solid #333',
                                                borderRadius: '3px',
                                                fontSize: '13px',
                                                backgroundColor: '#f8f9fa',
                                            }}
                                        />
                                        used
                                    </div>
                                    <div>• techniques pollute air</div>
                                </td>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px'
                                }}>
                                    <div>• quality not good</div>
                                    <div>• varieties of fruit and vegetables chosen that can survive long 
                                        <input
                                            type="text"
                                            className="inline-answer-input"
                                            value={answers[4] || ''}
                                            onChange={(e) => handleInputChange(5, e.target.value)}
                                            placeholder="Q5"
                                            style={{
                                                display: 'inline-block',
                                                width: '80px',
                                                padding: '2px 6px',
                                                margin: '0 2px',
                                                border: '1px solid #333',
                                                borderRadius: '3px',
                                                fontSize: '13px',
                                                backgroundColor: '#f8f9fa',
                                            }}
                                        />
                                    </div>
                                </td>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px'
                                }}>
                                    <div>• 
                                        <input
                                            type="text"
                                            className="inline-answer-input"
                                            value={answers[5] || ''}
                                            onChange={(e) => handleInputChange(6, e.target.value)}
                                            placeholder="Q6"
                                            style={{
                                                display: 'inline-block',
                                                width: '80px',
                                                padding: '2px 6px',
                                                margin: '0 2px',
                                                border: '1px solid #333',
                                                borderRadius: '3px',
                                                fontSize: '13px',
                                                backgroundColor: '#f8f9fa',
                                            }}
                                        />
                                        receive very little of overall income
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px',
                                    fontWeight: 'bold'
                                }}>Aeroponic urban farming</td>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px'
                                }}>
                                    <div>• no soil used</div>
                                    <div>• nutrients added to water, which is recycled</div>
                                </td>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px'
                                }}>
                                    <div>• produce chosen because of its 
                                        <input
                                            type="text"
                                            className="inline-answer-input"
                                            value={answers[6] || ''}
                                            onChange={(e) => handleInputChange(7, e.target.value)}
                                            placeholder="Q7"
                                            style={{
                                                display: 'inline-block',
                                                width: '80px',
                                                padding: '2px 6px',
                                                margin: '0 2px',
                                                border: '1px solid #333',
                                                borderRadius: '3px',
                                                fontSize: '13px',
                                                backgroundColor: '#f8f9fa',
                                            }}
                                        />
                                    </div>
                                </td>
                                <td style={{ 
                                    border: '1px solid #ddd', 
                                    padding: '8px'
                                }}>
                                    &nbsp;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    // Regular fill-in-blanks view
    return (
        <div className="question-section fill-in-blanks">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                {wordLimit && <p><strong>{wordLimit}</strong></p>}
                <p>Write your answers in boxes {startQuestionNumber}-{startQuestionNumber + questionItems.length - 1} on your answer sheet.</p>
            </div>
            
            {sectionTitle && (
                <h4 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    {sectionTitle}
                </h4>
            )}
            
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
                                padding: '12px',
                                margin: hasViewedResults ? '8px 0' : '0'
                            }}
                        >
                            <div className="question-header">
                                <span className="question-number"><strong>{questionNumber}</strong></span>
                                <span className="question-text">
                                    {item.prefix}
                                    <input
                                        type="text"
                                        className="inline-answer-input"
                                        value={answers[answerIndex] || ''}
                                        onChange={(e) => handleInputChange(questionNumber, e.target.value)}
                                        placeholder={`Q${questionNumber}`}
                                        style={{
                                            display: 'inline-block',
                                            width: '100px',
                                            padding: '2px 6px',
                                            margin: '0 2px',
                                            border: hasViewedResults && isCorrect === false ? 
                                                '2px solid #dc3545' : '1px solid #333',
                                            borderRadius: '3px',
                                            fontSize: '13px',
                                            backgroundColor: hasViewedResults && isCorrect === false ? 
                                                '#ffe6e6' : '#f8f9fa',
                                        }}
                                    />
                                    {item.suffix}
                                </span>
                                {hasViewedResults && isCorrect === false && (
                                    <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                                        ✗
                                    </span>
                                )}
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

export default FillInBlanks; 