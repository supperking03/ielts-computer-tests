import React, { useState } from 'react';

const QuickTips = () => {
    const [isVisible, setIsVisible] = useState(true);

    const tips = [
        "🎯 You can type directly into the blue input fields in the questions",
        "📝 Your answers sync automatically with the answer column on the right",
        "🖱️ Right-click on passage text to highlight important information",
        "📊 Track your progress with the progress indicator above",
        "⏱️ Use the timer to manage your time effectively"
    ];

    if (!isVisible) {
        return (
            <button 
                className="show-tips-btn"
                onClick={() => setIsVisible(true)}
                title="Show Quick Tips"
            >
                💡 Tips
            </button>
        );
    }

    return (
        <div className="quick-tips">
            <div className="tips-header">
                <h4>💡 Quick Tips</h4>
                <button 
                    className="close-tips-btn"
                    onClick={() => setIsVisible(false)}
                    title="Hide Tips"
                >
                    ×
                </button>
            </div>
            <ul className="tips-list">
                {tips.map((tip, index) => (
                    <li key={index} className="tip-item">
                        {tip}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuickTips; 