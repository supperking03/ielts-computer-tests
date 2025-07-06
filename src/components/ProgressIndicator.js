import React from 'react';

const ProgressIndicator = ({ answers, currentPassage, passages }) => {
    const getQuestionRange = (passageIndex) => {
        if (passageIndex === 0) return { start: 1, end: 13 };
        if (passageIndex === 1) return { start: 14, end: 26 };
        if (passageIndex === 2) return { start: 27, end: 40 };
        return { start: 1, end: 40 };
    };

    const getCompletionStats = (passageIndex) => {
        const { start, end } = getQuestionRange(passageIndex);
        const passageAnswers = answers.slice(start - 1, end);
        const completed = passageAnswers.filter(answer => answer.trim() !== '').length;
        const total = end - start + 1;
        return { completed, total, percentage: Math.round((completed / total) * 100) };
    };

    const overallStats = {
        completed: answers.filter(answer => answer.trim() !== '').length,
        total: 40,
        percentage: Math.round((answers.filter(answer => answer.trim() !== '').length / 40) * 100)
    };

    const currentPassageStats = getCompletionStats(currentPassage);

    return (
        <div className="progress-indicator">
            <div className="progress-section">
                <h4>Current Passage ({currentPassage + 1}/3)</h4>
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${currentPassageStats.percentage}%` }}
                    ></div>
                </div>
                <span className="progress-text">
                    {currentPassageStats.completed}/{currentPassageStats.total} completed ({currentPassageStats.percentage}%)
                </span>
            </div>

            <div className="progress-section">
                <h4>Overall Progress</h4>
                <div className="progress-bar">
                    <div 
                        className="progress-fill overall"
                        style={{ width: `${overallStats.percentage}%` }}
                    ></div>
                </div>
                <span className="progress-text">
                    {overallStats.completed}/40 completed ({overallStats.percentage}%)
                </span>
            </div>

            <div className="passage-indicators">
                {passages.map((_, index) => {
                    const stats = getCompletionStats(index);
                    const isActive = index === currentPassage;
                    return (
                        <div 
                            key={index} 
                            className={`passage-indicator ${isActive ? 'active' : ''}`}
                        >
                            <div className="passage-number">P{index + 1}</div>
                            <div className="mini-progress">
                                <div 
                                    className="mini-progress-fill"
                                    style={{ width: `${stats.percentage}%` }}
                                ></div>
                            </div>
                            <span className="mini-text">{stats.completed}/{stats.total}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressIndicator; 