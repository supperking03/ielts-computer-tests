import React from 'react';

const TableCompletion = ({ question, startQuestionNumber, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const { title, instruction, wordLimit, table } = question;

    const handleInputChange = (questionNumber, value) => {
        onAnswerChange(questionNumber, value);
    };

    const renderCell = (cell, rowIndex, colIndex) => {
        if (cell.type === 'input') {
            const questionNumber = startQuestionNumber + cell.questionIndex;
            const answerIndex = questionNumber - 1;
            
            return (
                <td 
                    key={`${rowIndex}-${colIndex}`} 
                    id={`question-${questionNumber}`}
                    style={{ 
                        border: '1px solid #ddd', 
                        padding: '8px',
                        textAlign: cell.align || 'left'
                    }}
                >
                    {cell.prefix && <span>{cell.prefix}</span>}
                    <input
                        type="text"
                        className="table-input"
                        value={answers[answerIndex] || ''}
                        onChange={(e) => handleInputChange(questionNumber, e.target.value)}
                        placeholder={`Q${questionNumber}`}
                        style={{
                            display: 'inline-block',
                            width: '100px',
                            padding: '2px 6px',
                            margin: '0 2px',
                            border: '1px solid #333',
                            borderRadius: '3px',
                            fontSize: '13px',
                            backgroundColor: '#f8f9fa',
                        }}
                    />
                    {cell.suffix && <span>{cell.suffix}</span>}
                </td>
            );
        } else {
            return (
                <td key={`${rowIndex}-${colIndex}`} style={{ 
                    border: '1px solid #ddd', 
                    padding: '8px',
                    textAlign: cell.align || 'left',
                    fontWeight: cell.bold ? 'bold' : 'normal',
                    backgroundColor: cell.header ? '#f5f5f5' : 'white'
                }}>
                    {cell.content}
                </td>
            );
        }
    };

    return (
        <div className="question-section table-completion">
            <h3>{title}</h3>
            <div className="instruction">
                <p>{instruction}</p>
                {wordLimit && <p><strong>{wordLimit}</strong></p>}
                <p>Write your answers in boxes {startQuestionNumber}-{startQuestionNumber + question.totalQuestions - 1} on your answer sheet.</p>
            </div>
            
            <div className="table-container" style={{ overflowX: 'auto', marginTop: '20px' }}>
                <table style={{ 
                    borderCollapse: 'collapse', 
                    width: '100%',
                    border: '1px solid #ddd'
                }}>
                    <tbody>
                        {table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.cells.map((cell, colIndex) => 
                                    renderCell(cell, rowIndex, colIndex)
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableCompletion; 