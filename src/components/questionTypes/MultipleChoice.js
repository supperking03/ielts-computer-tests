import React from 'react';

const MultipleChoice = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, items, multipleSelect, selectCount, question: questionText } = question;

    // Safety check for items
    const questionItems = items || [];

    const handleAnswerChange = (questionNumber, value, isChecked) => {
        if (multipleSelect) {
            // For multiple select, handle array of answers
            const currentAnswers = answers[questionNumber - 1] ? answers[questionNumber - 1].split(',').filter(a => a.trim()) : [];
            let newAnswers;
            
            if (isChecked) {
                // Add the value if not already present
                if (!currentAnswers.includes(value)) {
                    newAnswers = [...currentAnswers, value];
                } else {
                    newAnswers = currentAnswers;
                }
            } else {
                // Remove the value
                newAnswers = currentAnswers.filter(a => a !== value);
            }
            
            onAnswerChange(questionNumber, newAnswers.join(','));
        } else {
            // For single select, handle single value
            onAnswerChange(questionNumber, value);
        }
    };

    const isAnswerCorrect = (questionNumber) => {
        if (!hasViewedResults || !correctAnswers) return null;
        const answerIndex = questionNumber - 1;
        const userAnswer = answers[answerIndex]?.trim().toUpperCase() || '';
        const correctAnswer = correctAnswers[answerIndex]?.toUpperCase() || '';
        
        if (multipleSelect) {
            // For multiple select, compare arrays
            const userAnswers = userAnswer.split(',').map(a => a.trim().toUpperCase()).sort();
            const correctAnswers = correctAnswer.split(',').map(a => a.trim().toUpperCase()).sort();
            return JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);
        } else {
            // For single select, compare strings
            return userAnswer === correctAnswer;
        }
    };

    const renderQuestionItem = (item, index) => {
        const questionNumber = startQuestionNumber + index;
        const answerIndex = questionNumber - 1;
        const isCorrect = isAnswerCorrect(questionNumber);
        const currentAnswer = answers[answerIndex] || '';
        
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
                    <span className="question-text" style={{ marginLeft: '8px' }}>
                        {item.question || questionText}
                    </span>
                    {hasViewedResults && isCorrect === false && (
                        <span style={{ marginLeft: '8px', fontSize: '16px', color: '#dc3545' }}>
                            ✗
                        </span>
                    )}
                </div>
                
                <div className="answer-options" style={{ marginTop: '12px', paddingLeft: '20px' }}>
                    {item.options.map((option) => {
                        const isChecked = multipleSelect 
                            ? currentAnswer.split(',').map(a => a.trim()).includes(option.value)
                            : currentAnswer === option.value;
                            
                        return (
                            <label key={option.value} className="option-label" style={{
                                display: 'block',
                                marginBottom: '8px',
                                cursor: 'pointer',
                                color: '#555'
                            }}>
                                <input
                                    type={multipleSelect ? "checkbox" : "radio"}
                                    name={multipleSelect ? `question-${questionNumber}-${option.value}` : `question-${questionNumber}`}
                                    value={option.value}
                                    checked={isChecked}
                                    onChange={(e) => handleAnswerChange(questionNumber, option.value, e.target.checked)}
                                    style={{ marginRight: '8px' }}
                                />
                                <strong>{option.value}</strong> {option.text}
                            </label>
                        );
                    })}
                </div>
                
                {multipleSelect && (
                    <div style={{ 
                        fontSize: '12px', 
                        color: '#666', 
                        marginTop: '8px',
                        fontStyle: 'italic',
                        paddingLeft: '20px'
                    }}>
                        Choose {selectCount || 2} letters
                    </div>
                )}
                
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
    };

    return (
        <div className="question-section multiple-choice">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                {multipleSelect ? (
                    <p>Choose {selectCount || 2} letters, A-E.</p>
                ) : (
                    <p>Write the correct letter in boxes {startQuestionNumber}-{startQuestionNumber + questionItems.length - 1} on your answer sheet.</p>
                )}
            </div>
            
            <div className="questions-list">
                {questionItems.map((item, index) => renderQuestionItem(item, index))}
            </div>
        </div>
    );
};

export default MultipleChoice; 