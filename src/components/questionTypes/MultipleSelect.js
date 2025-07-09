import React from 'react';

const MultipleSelect = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, items, selectCount } = question;
    const questionItems = items || [];
    // Tính toán các chỉ số câu hỏi thuộc nhóm này
    const questionNumbers = Array.from({ length: selectCount }, (_, i) => startQuestionNumber + i);

    // Lấy đáp án cho từng câu trong nhóm
    const groupAnswers = questionNumbers.map(qNum => answers[qNum - 1] || '');

    // Khi chọn đáp án, sẽ gán vào câu đầu tiên chưa có đáp án, hoặc bỏ chọn thì xóa ở tất cả các câu trong nhóm
    const handleGroupAnswerChange = (value, isChecked) => {
        if (isChecked) {
            // Kiểm tra số lượng đã chọn
            const currentlySelected = groupAnswers.filter(ans => ans.trim() !== '').length;
            const maxSelections = selectCount || 2;
            
            if (currentlySelected >= maxSelections) {
                // Đã đạt giới hạn, không thể chọn thêm
                return;
            }
            
            // Gán vào câu đầu tiên chưa có đáp án
            const emptyIndex = groupAnswers.findIndex(ans => ans === '');
            if (emptyIndex !== -1) {
                onAnswerChange(questionNumbers[emptyIndex], value);
            }
        } else {
            // Bỏ chọn thì xóa ở tất cả các câu trong nhóm
            questionNumbers.forEach(qNum => {
                const current = answers[qNum - 1] || '';
                if (current.trim() === value) {
                    // Xóa đáp án bằng cách set thành empty string
                    onAnswerChange(qNum, '');
                }
            });
        }
    };

    // Check nếu đáp án đúng cho từng câu hỏi
    const isSpecificQuestionCorrect = (questionNumber) => {
        if (!hasViewedResults || !correctAnswers) return null;
        const answerIndex = questionNumber - 1;
        const userAnswer = answers && answers[answerIndex] ? answers[answerIndex].trim().toUpperCase() : '';
        const correctAnswerRaw = correctAnswers && correctAnswers[answerIndex] ? correctAnswers[answerIndex].toUpperCase() : '';
        const correctOptions = correctAnswerRaw.split(/[\/]/).map(a => a.trim()).filter(a => a);
        const userOptions = userAnswer.split(',').map(a => a.trim().toUpperCase()).filter(a => a);
        if (userOptions.length !== 1) return false;
        return correctOptions.includes(userOptions[0]);
    };

    // Hiển thị số thứ tự nhóm
    const getQuestionRange = () => {
        const endQuestionNumber = startQuestionNumber + selectCount - 1;
        return `${startQuestionNumber}-${endQuestionNumber}`;
    };

    return (
        <div className="question-section multiple-select">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                <p>Choose {selectCount || 2} letters, A-E.</p>
            </div>
            <div className="questions-list">
                {questionItems.map((item, index) => {
                    const questionRange = getQuestionRange();
                    return (
                        <div 
                            key={index} 
                            id={`question-${startQuestionNumber}`}
                            className="question-item" 
                            style={{
                                backgroundColor: '#fafafa',
                                border: '1px solid #e9ecef',
                                borderRadius: '6px',
                                padding: '15px',
                                marginBottom: '20px'
                            }}
                        >
                            <div className="question-header">
                                <span className="question-number"><strong>{questionRange}</strong></span>
                                <span className="question-text" style={{ marginLeft: '8px' }}>{item.question}</span>
                            </div>
                            <div className="answer-options" style={{ marginTop: '12px', paddingLeft: '20px' }}>
                                {item.options.map((option) => {
                                    // Check nếu đáp án này đã được chọn ở bất kỳ câu nào trong nhóm
                                    const isChecked = groupAnswers.some(ans => ans.trim() === option.value);
                                    
                                    // Kiểm tra xem có đạt giới hạn chọn chưa
                                    const currentlySelected = groupAnswers.filter(ans => ans.trim() !== '').length;
                                    const maxSelections = selectCount || 2;
                                    const isAtLimit = currentlySelected >= maxSelections && !isChecked;
                                    
                                    return (
                                        <label key={option.value} className="option-label" style={{
                                            display: 'block',
                                            marginBottom: '8px',
                                            cursor: isAtLimit ? 'not-allowed' : 'pointer',
                                            color: isAtLimit ? '#ccc' : '#555',
                                            opacity: isAtLimit ? 0.6 : 1
                                        }}>
                                            <input
                                                type="checkbox"
                                                name={`question-${questionRange}-${option.value}`}
                                                value={option.value}
                                                checked={isChecked}
                                                disabled={isAtLimit}
                                                onChange={(e) => handleGroupAnswerChange(option.value, e.target.checked)}
                                                style={{ marginRight: '8px' }}
                                            />
                                            <strong>{option.value}</strong> {option.text}
                                        </label>
                                    );
                                })}
                            </div>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#666', 
                                marginTop: '8px',
                                fontStyle: 'italic',
                                paddingLeft: '20px'
                            }}>
                                Choose {selectCount || 2} letters
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MultipleSelect; 