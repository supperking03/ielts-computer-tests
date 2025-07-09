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
            const maxSelections = selectCount || 2; // Giới hạn số lượng có thể chọn
            
            if (isChecked) {
                // Add the value if not already present and under limit
                if (!currentAnswers.includes(value)) {
                    if (currentAnswers.length < maxSelections) {
                        newAnswers = [...currentAnswers, value];
                    } else {
                        // Đã đạt giới hạn, không thể chọn thêm
                        return; // Không thực hiện thay đổi
                    }
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
                        
                        // Kiểm tra xem có đạt giới hạn chọn chưa
                        const currentSelections = multipleSelect 
                            ? currentAnswer.split(',').filter(a => a.trim()).length 
                            : 0;
                        const maxSelections = selectCount || 2;
                        const isAtLimit = multipleSelect && currentSelections >= maxSelections && !isChecked;
                            
                        return (
                            <label key={option.value} className="option-label" style={{
                                display: 'block',
                                marginBottom: '8px',
                                cursor: isAtLimit ? 'not-allowed' : 'pointer',
                                color: isAtLimit ? '#ccc' : '#555',
                                opacity: isAtLimit ? 0.6 : 1
                            }}>
                                <input
                                    type={multipleSelect ? "checkbox" : "radio"}
                                    name={multipleSelect ? `question-${questionNumber}-${option.value}` : `question-${questionNumber}`}
                                    value={option.value}
                                    checked={isChecked}
                                    disabled={isAtLimit}
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