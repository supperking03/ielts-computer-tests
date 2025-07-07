import React from 'react';
import FillInBlanks from './questionTypes/FillInBlanks';
import TrueFalseNotGiven from './questionTypes/TrueFalseNotGiven';
import Matching from './questionTypes/Matching';
import ParagraphMatching from './questionTypes/ParagraphMatching';
import TableCompletion from './questionTypes/TableCompletion';
import MultipleChoice from './questionTypes/MultipleChoice';
import YesNoNotGiven from './questionTypes/YesNoNotGiven';
import SummaryCompletion from './questionTypes/SummaryCompletion';
import ParagraphHeadings from './questionTypes/ParagraphHeadings';

const QuestionRenderer = ({ questionsData, answers, onAnswerChange, hasViewedResults, correctAnswers }) => {
    const renderQuestion = (questionGroup, index) => {
        const { type, startQuestionNumber, ...questionProps } = questionGroup;
        
        const commonProps = {
            question: questionProps,
            startQuestionNumber,
            answers,
            onAnswerChange,
            hasViewedResults,
            correctAnswers
        };

        switch (type) {
            case 'fill-in-blanks':
                return <FillInBlanks key={index} {...commonProps} />;
            
            case 'true-false-not-given':
                return <TrueFalseNotGiven key={index} {...commonProps} />;
            
            case 'matching':
                return <Matching key={index} {...commonProps} />;
            
            case 'paragraph-matching':
                return <ParagraphMatching key={index} {...commonProps} />;
            
            case 'table-completion':
                return <TableCompletion key={index} {...commonProps} />;
            
            case 'sentence-completion':
                return <FillInBlanks key={index} {...commonProps} />; // Same as fill-in-blanks
            
            case 'multiple-choice':
                return <MultipleChoice key={index} {...commonProps} />;
            
            case 'yes-no-not-given':
                return <YesNoNotGiven key={index} {...commonProps} />;
            
            case 'summary-completion':
                return <SummaryCompletion key={index} {...commonProps} />;
            
            case 'paragraph-headings':
                return <ParagraphHeadings key={index} {...commonProps} />;
            
            default:
                console.warn(`Unknown question type: ${type}`);
                return (
                    <div key={index} className="question-section unknown-type">
                        <h3>Unknown Question Type: {type}</h3>
                        <p>This question type is not yet supported.</p>
                    </div>
                );
        }
    };

    return (
        <div className="questions-container">
            {questionsData.map((questionGroup, index) => (
                <div key={index} className="question-group">
                    {renderQuestion(questionGroup, index)}
                    {index < questionsData.length - 1 && (
                        <hr style={{ 
                            margin: '30px 0', 
                            border: 'none', 
                            borderTop: '1px solid #ddd' 
                        }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default QuestionRenderer; 