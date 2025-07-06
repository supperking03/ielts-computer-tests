import React from 'react';

const ParagraphMatching = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, paragraphRange, items, note } = question;

    const handleAnswerChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value.toUpperCase());
    };

    const isAnswerCorrect = (questionNumber) => {
        if (!hasViewedResults || !correctAnswers) return null;
        const answerIndex = questionNumber - 1;
        const userAnswer = answers[answerIndex]?.trim().toLowerCase() || '';
        const correctAnswer = correctAnswers[answerIndex]?.toLowerCase() || '';
        return userAnswer === correctAnswer;
    };

    // Generate paragraph options (A, B, C, etc.)
    const generateParagraphOptions = (range) => {
        const start = range.charCodeAt(0);
        const end = range.charCodeAt(2); // Assuming format like "A-G"
        const options = [];
        
        for (let i = start; i <= end; i++) {
            options.push(String.fromCharCode(i));
        }
        
        return options;
    };

    const paragraphOptions = generateParagraphOptions(paragraphRange);

    return (
        <div className="question-section paragraph-matching">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <p>Write the correct letter, <strong>{paragraphRange}</strong>, in boxes {startQuestionNumber}-{startQuestionNumber + items.length - 1} on your answer sheet.</p>
                {note && <p><strong>{note}</strong></p>}
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
                                <span className="question-text">{item.description}</span>
                                {hasViewedResults && isCorrect === false && (
                                    <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                                        ✗
                                    </span>
                                )}
                            </div>
                            <div className="answer-options">
                                <input
                                    type="text"
                                    value={currentAnswer}
                                    onChange={(e) => handleAnswerChange(questionNumber, e.target.value)}
                                    placeholder="A-G"
                                    maxLength="1"
                                    style={{
                                        display: 'inline-block',
                                        width: '50px',
                                        padding: '4px 8px',
                                        margin: '4px',
                                        border: hasViewedResults && isCorrect === false ? 
                                            '2px solid #dc3545' : '1px solid #333',
                                        borderRadius: '3px',
                                        fontSize: '14px',
                                        backgroundColor: hasViewedResults && isCorrect === false ? 
                                            '#ffe6e6' : '#f8f9fa',
                                        textAlign: 'center',
                                        textTransform: 'uppercase'
                                    }}
                                />
                                <div className="paragraph-options" style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
                                    Options: {paragraphOptions.join(', ')}
                                </div>
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

export default ParagraphMatching; 