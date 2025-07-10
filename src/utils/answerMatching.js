// Utility function for smart answer matching in IELTS tests
// Handles optional answers, alternatives, and variations

export const isAnswerMatch = (userAnswer, correctAnswer) => {
    // Convert to lowercase for comparison
    const user = userAnswer.trim().toLowerCase();
    const correct = correctAnswer.toLowerCase();
    
    // Direct match
    if (user === correct) {
        return true;
    }
    
    // Handle optional parts in parentheses: (word) text → accept "text" or "word text"
    if (correct.includes('(') && correct.includes(')')) {
        const optionalPart = correct.match(/\(([^)]+)\)/);
        if (optionalPart) {
            const optional = optionalPart[1].toLowerCase();
            const mainPart = correct.replace(/\([^)]+\)\s?/g, '').trim();
            
            // Accept main part only
            if (user === mainPart) {
                return true;
            }
            // Accept optional + main part
            if (user === `${optional} ${mainPart}`.trim()) {
                return true;
            }
        }
    }
    
    // Handle alternatives with slash: word1 / word2 → accept either
    if (correct.includes(' / ')) {
        const alternatives = correct.split(' / ').map(alt => alt.trim());
        if (alternatives.includes(user)) {
            return true;
        }
    }
    
    // Handle hyphen variations: car (-) sharing → accept "car sharing" or "car-sharing"
    if (correct.includes('(-)')) {
        const withHyphen = correct.replace(/\s?\(-\)\s?/g, '-');
        const withoutHyphen = correct.replace(/\s?\(-\)\s?/g, ' ');
        
        if (user === withHyphen || user === withoutHyphen) {
            return true;
        }
    }
    
    return false;
};

// Helper function for question type components
export const createAnswerChecker = (answers, correctAnswers, hasViewedResults) => {
    return (questionNumber) => {
        if (!hasViewedResults || !correctAnswers) return null;
        const answerIndex = questionNumber - 1;
        const userAnswer = answers[answerIndex]?.trim() || '';
        const correctAnswer = correctAnswers[answerIndex] || '';
        return isAnswerMatch(userAnswer, correctAnswer);
    };
}; 