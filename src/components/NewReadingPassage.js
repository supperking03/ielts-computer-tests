import React, { useState, useEffect, useMemo } from 'react';
import CountdownTimer from './CountdownTimer';
import './ReadingPassage.css';
import { newTests } from './newData';
import { tests as generalTests } from './dataGeneral';
import { practiceTests } from './practiceAcademicTests';
import { practiceGeneralTests } from './practiceGeneralTests';
import QuestionRenderer from './QuestionRenderer';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { isAnswerMatch } from '../utils/answerMatching';
import { createReadingExplanationContext } from '../utils/readingExplanation';
import { getReadingAnswerExplanation } from '../services/openai';

function NewReadingPassage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Set the initial passage from the URL query parameter
    const initialPassage = parseInt(new URLSearchParams(location.search).get('passage')) || 0;
    const [currentPassage, setCurrentPassage] = useState(initialPassage);

    // Update the URL when `currentPassage` changes
    useEffect(() => {
        navigate(`?passage=${currentPassage}`, { replace: true });
    }, [currentPassage, navigate]);

    const selectedTest = [...newTests, ...generalTests, ...practiceTests, ...practiceGeneralTests].find(test => test.id === parseInt(id));

    // For right-click highlighting
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
    const [answers, setAnswers] = useState(Array(40).fill(""));
    const [hasViewedResults, setHasViewedResults] = useState(false);
    const [explanations, setExplanations] = useState({});
    const [loadingExplanations, setLoadingExplanations] = useState({});
    const [explanationErrors, setExplanationErrors] = useState({});
    const [openExplanation, setOpenExplanation] = useState({});
    const [pendingEvidenceFocus, setPendingEvidenceFocus] = useState(null);

    const getExplanationContext = useMemo(
        () => createReadingExplanationContext(selectedTest),
        [selectedTest]
    );

    // `focusEvidenceSnippet` is intentionally used here to run after passage content updates.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!pendingEvidenceFocus || currentPassage !== pendingEvidenceFocus.passageIndex) {
            return;
        }

        const timer = setTimeout(() => {
            focusEvidenceSnippet(pendingEvidenceFocus.evidenceSnippet);
            setPendingEvidenceFocus(null);
        }, 120);

        return () => clearTimeout(timer);
    }, [currentPassage, pendingEvidenceFocus]);

    const navigateBackToHome = () => {
        navigate('/');
    };

    if (!selectedTest) {
        return <div>Test not found!</div>;
    }

    const passages = selectedTest.passages;

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    const handleRightClick = (e) => {
        e.preventDefault();

        const selectedText = window.getSelection().toString();
        if (selectedText) {
            setContextMenu({
                visible: true,
                x: e.clientX,
                y: e.clientY
            });
        }
    };

    const highlightText = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;

        const range = selection.getRangeAt(0);
        const span = document.createElement('span');
        span.style.backgroundColor = 'yellow';

        range.surroundContents(span);
        selection.removeAllRanges();
        setContextMenu({ visible: false });
    };

    const removeHighlight = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return false;

        const range = selection.getRangeAt(0);
        const parentElement = range.commonAncestorContainer.parentElement;

        // Check if parent element is our highlight span
        if (parentElement && parentElement.style.backgroundColor === 'yellow') {
            const spanContent = parentElement.innerHTML;
            parentElement.outerHTML = spanContent;
        }

        selection.removeAllRanges();
        setContextMenu({ visible: false });
    };

    const changePassage = (direction) => {
        if (direction === 'next' && currentPassage < passages.length - 1) {
            setCurrentPassage(currentPassage + 1);
        } else if (direction === 'previous' && currentPassage > 0) {
            setCurrentPassage(currentPassage - 1);
        }
    };

    const handleNextAction = () => {
        if (currentPassage < passages.length - 1) {
            changePassage('next');
        } else {
            setHasViewedResults(true);
        }
    };

    const handleAnswerChange = (questionNumber, value) => {
        const answerIndex = questionNumber - 1;
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[answerIndex] = value;
            return newAnswers;
        });
    };

    const handleExplainAnswer = async (questionNumber) => {
        clearEvidenceHighlight();

        const existingExplanation = explanations[questionNumber];
        if (existingExplanation) {
            setOpenExplanation((prev) => ({
                [questionNumber]: !prev[questionNumber]
            }));
            const context = getExplanationContext(questionNumber);
            if (!openExplanation[questionNumber] && existingExplanation.evidenceSnippet) {
                jumpToEvidence(context?.passageIndex, existingExplanation.evidenceSnippet);
            }
            return;
        }

        const context = getExplanationContext(questionNumber);
        if (!context) {
            setExplanationErrors((prev) => ({
                ...prev,
                [questionNumber]: 'Không lấy được dữ liệu câu hỏi để giải thích.'
            }));
            setOpenExplanation((prev) => ({ ...prev, [questionNumber]: true }));
            return;
        }

        setLoadingExplanations({ [questionNumber]: true });
        setExplanationErrors((prev) => ({ ...prev, [questionNumber]: '' }));
        setOpenExplanation({ [questionNumber]: true });

        try {
            const explanationResult = await getReadingAnswerExplanation({
                ...context,
                questionNumber,
                userAnswer: answers[questionNumber - 1] || '',
                correctAnswer: selectedTest.correctAnswers[questionNumber - 1] || ''
            });

            setExplanations((prev) => ({
                ...prev,
                [questionNumber]: explanationResult
            }));
            jumpToEvidence(context.passageIndex, explanationResult.evidenceSnippet);
        } catch (error) {
            setExplanationErrors((prev) => ({
                ...prev,
                [questionNumber]: error.message || 'Không thể tạo giải thích.'
            }));
        } finally {
            setLoadingExplanations({});
        }
    };

    const isAnswerCorrect = (questionIndex) => {
        if (!hasViewedResults || !selectedTest.correctAnswers) return null;
        const userAnswer = answers[questionIndex] ? answers[questionIndex].trim().toLowerCase() : '';
        const correctAnswer = selectedTest.correctAnswers[questionIndex] ? selectedTest.correctAnswers[questionIndex].toLowerCase() : '';
        return isAnswerMatch(userAnswer, correctAnswer);
    };

    const getPassageForQuestion = (questionNumber) => {
        let currentQuestionNumber = 1;
        
        for (let passageIndex = 0; passageIndex < passages.length; passageIndex++) {
            const passage = passages[passageIndex];
            
            // Calculate total questions in this passage
            let totalQuestionsInPassage = 0;
            passage.questions.forEach(questionGroup => {
                if (typeof questionGroup.totalQuestions === 'number') {
                    totalQuestionsInPassage += questionGroup.totalQuestions;
                    return;
                }

                if (Array.isArray(questionGroup.items)) {
                    totalQuestionsInPassage += questionGroup.items.length;
                }
            });
            
            // Check if the question number falls within this passage's range
            if (questionNumber >= currentQuestionNumber && 
                questionNumber < currentQuestionNumber + totalQuestionsInPassage) {
                return passageIndex;
            }
            
            currentQuestionNumber += totalQuestionsInPassage;
        }
        
        return 0; // Default to passage 1 if not found
    };

    const scrollToQuestion = (questionNumber) => {
        const targetPassage = getPassageForQuestion(questionNumber);
        
        // Navigate to the correct passage first if needed
        if (currentPassage !== targetPassage) {
            setCurrentPassage(targetPassage);
            // Wait for the passage to load before scrolling
            setTimeout(() => {
                scrollToQuestionElement(questionNumber);
            }, 100);
        } else {
            scrollToQuestionElement(questionNumber);
        }
    };

    const scrollToQuestionElement = (questionNumber) => {
        const questionElement = document.getElementById(`question-${questionNumber}`);
        if (questionElement) {
            questionElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            // Highlight the question temporarily
            questionElement.style.backgroundColor = '#fff3cd';
            setTimeout(() => {
                questionElement.style.backgroundColor = '';
            }, 2000);
        }
    };

    const clearEvidenceHighlight = () => {
        document.querySelectorAll('.ai-evidence-highlight').forEach((node) => {
            const parent = node.parentNode;
            if (!parent) {
                return;
            }

            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }
            parent.removeChild(node);
            parent.normalize();
        });
    };

    const findTextRange = (container, targetText) => {
        if (!container || !targetText) {
            return null;
        }

        const normalizeWithMap = (text) => {
            let normalized = '';
            const normalizedToRaw = [];
            let previousWasSpace = true;

            for (let i = 0; i < text.length; i++) {
                const character = text[i];
                const isSpace = /\s/.test(character);

                if (isSpace) {
                    if (!previousWasSpace) {
                        normalized += ' ';
                        normalizedToRaw.push(i);
                    }
                    previousWasSpace = true;
                    continue;
                }

                normalized += character.toLowerCase();
                normalizedToRaw.push(i);
                previousWasSpace = false;
            }

            if (normalized.endsWith(' ')) {
                normalized = normalized.slice(0, -1);
                normalizedToRaw.pop();
            }

            return { normalized, normalizedToRaw };
        };

        const normalizedTarget = normalizeWithMap(targetText).normalized.trim();
        if (!normalizedTarget) {
            return null;
        }

        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
        const textNodes = [];
        let fullText = '';
        let currentNode;

        while ((currentNode = walker.nextNode())) {
            const text = currentNode.textContent || '';
            textNodes.push({
                node: currentNode,
                start: fullText.length,
                end: fullText.length + text.length
            });
            fullText += text;
        }

        const { normalized: normalizedFullText, normalizedToRaw } = normalizeWithMap(fullText);
        const startIndex = normalizedFullText.indexOf(normalizedTarget);
        if (startIndex === -1) {
            return null;
        }

        const normalizedEndIndex = startIndex + normalizedTarget.length - 1;
        const rawStart = normalizedToRaw[startIndex];
        const rawEnd = normalizedToRaw[normalizedEndIndex] + 1;

        const startInfo = textNodes.find(({ start, end }) => rawStart >= start && rawStart < end);
        const endInfo = textNodes.find(({ start, end }) => rawEnd > start && rawEnd <= end);

        if (!startInfo || !endInfo) {
            return null;
        }

        const range = document.createRange();
        range.setStart(startInfo.node, Math.max(0, rawStart - startInfo.start));
        range.setEnd(endInfo.node, Math.max(0, Math.min(endInfo.node.textContent.length, rawEnd - endInfo.start)));
        return range;
    };

    const highlightEvidenceSnippet = (snippet) => {
        const passageContainer = document.querySelector('.passage-section > div');
        if (!passageContainer || !snippet) {
            return false;
        }

        clearEvidenceHighlight();

        const cleanedSnippet = snippet
            .replace(/^```(?:json)?/i, '')
            .replace(/```$/, '')
            .replace(/^["'“”]/, '')
            .replace(/["'“”]$/, '')
            .trim();

        const words = cleanedSnippet
            .replace(/[()[\]{}]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .filter(Boolean);

        const slidingWindows = [];
        for (let windowSize = Math.min(words.length, 12); windowSize >= 5; windowSize--) {
            for (let start = 0; start <= words.length - windowSize; start++) {
                slidingWindows.push(words.slice(start, start + windowSize).join(' '));
            }
        }

        const candidateSnippets = [
            cleanedSnippet,
            cleanedSnippet.replace(/[.,;:!?]+$/g, '').trim(),
            cleanedSnippet.split(/[,.;:!?]/).map((part) => part.trim()).filter(Boolean),
            slidingWindows
        ].flat().filter(Boolean);

        for (const candidate of candidateSnippets) {
            const range = findTextRange(passageContainer, candidate);
            if (!range) {
                continue;
            }

            const mark = document.createElement('mark');
            mark.className = 'ai-evidence-highlight';
            try {
                range.surroundContents(mark);
                mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return true;
            } catch {
                return false;
            }
        }

        return false;
    };

    const focusEvidenceSnippet = (snippet) => {
        if (!snippet) {
            return;
        }

        highlightEvidenceSnippet(snippet);
    };

    const jumpToEvidence = (passageIndex, snippet) => {
        if (!snippet) {
            return;
        }

        if (typeof passageIndex === 'number' && passageIndex !== currentPassage) {
            setPendingEvidenceFocus({
                passageIndex,
                evidenceSnippet: snippet
            });
            setCurrentPassage(passageIndex);
            return;
        }

        focusEvidenceSnippet(snippet);
    };



    const calculateScore = () => {
        const correctAnswers = selectedTest.correctAnswers;
        let score = 0;
        
        for (let i = 0; i < correctAnswers.length; i++) {
            const userAnswer = answers[i] ? answers[i].trim().toLowerCase() : '';
            const correctAnswer = correctAnswers[i] ? correctAnswers[i].toLowerCase() : '';
            
            if (isAnswerMatch(userAnswer, correctAnswer)) {
                score++;
            }
        }
        
        return score;
    };

    const getBandScore = (score) => {
        if (score >= 39) return 9.0;
        if (score >= 37) return 8.5;
        if (score >= 35) return 8.0;
        if (score >= 33) return 7.5;
        if (score >= 30) return 7.0;
        if (score >= 27) return 6.5;
        if (score >= 23) return 6.0;
        if (score >= 19) return 5.5;
        if (score >= 15) return 5.0;
        if (score >= 13) return 4.5;
        if (score >= 10) return 4.0;
        if (score >= 8) return 3.5;
        if (score >= 6) return 3.0;
        if (score >= 4) return 2.5;
        if (score >= 3) return 2.0;
        if (score >= 2) return 1.5;
        if (score >= 1) return 1.0;
        return 0.0;
    };



    return (
        <div>
            <Helmet>
                <title>IELTS Reading Practice + {selectedTest.title}</title>
                <meta name="description" content="Engage with our reading practice tests to get a real feel of the IELTS exam." />
            </Helmet>
            <a className="fullscreen-button" onClick={toggleFullScreen}>Full screen</a>
            
            <div className="reading-passage" onContextMenu={handleRightClick}>
                <div className="main-section">
                    <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a>
                    <div className="timer-container">
                        <CountdownTimer />
                    </div>
                    <div className="content-section">
                        <div className="passage-section">
                            <h2>{passages[currentPassage].title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: passages[currentPassage].content }}></div>
                        </div>

                        <div className="questions-section">
                            <QuestionRenderer 
                                questionsData={passages[currentPassage].questions}
                                answers={answers}
                                onAnswerChange={handleAnswerChange}
                                hasViewedResults={hasViewedResults}
                                correctAnswers={selectedTest.correctAnswers}
                                explanations={explanations}
                                loadingExplanations={loadingExplanations}
                                explanationErrors={explanationErrors}
                                openExplanation={openExplanation}
                                onExplainAnswer={handleExplainAnswer}
                            />
                        </div>
                    </div>
                    
                    {contextMenu.visible && (
                        <div
                            style={{
                                position: 'absolute',
                                top: `${contextMenu.y}px`,
                                left: `${contextMenu.x}px`,
                                backgroundColor: 'white',
                                border: '1px solid black',
                                zIndex: 1000
                            }}
                        >
                            <button style={{ color: 'black', padding: '10px', margin: '0px', textDecoration: 'none' }} onClick={highlightText}>Highlight</button>
                            <button style={{ color: 'black', padding: '10px', margin: '0px', textDecoration: 'none' }} onClick={removeHighlight}>Remove Highlight</button>
                        </div>
                    )}
                    
                    <div className="passage-navigation">
                        <button style={{ color: "black" }} disabled={currentPassage === 0} onClick={() => changePassage('previous')}>
                            Previous Passage
                        </button>
                        <span>Passage {currentPassage + 1} of 3</span>
                        <button style={{ color: "black" }} onClick={handleNextAction}>
                            {currentPassage < passages.length - 1 ? "Next Passage" : "Check Answers"}
                        </button>
                    </div>
                </div>

                <div className="answer-section">
                    {hasViewedResults && (
                        <div style={{ 
                            marginBottom: '20px', 
                            padding: '15px', 
                            backgroundColor: '#f8f9fa', 
                            borderRadius: '8px',
                            textAlign: 'center',
                            border: '2px solid #333'
                        }}>
                            <div style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>
                                <strong>Your Score</strong>
                            </div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                                {calculateScore()}/40 ({((calculateScore()/40)*100).toFixed(1)}%)
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginTop: '5px' }}>
                                Band Score: {getBandScore(calculateScore())}
                            </div>
                        </div>
                    )}
                    
                    <h4>Fill Answers</h4>
                    {answers.map((answer, index) => {
                        const isCorrect = isAnswerCorrect(index);
                        const questionNumber = index + 1;
                        return (
                            <div 
                                key={index} 
                                className="answer-row" 
                                style={{
                                    backgroundColor: hasViewedResults ? (isCorrect ? '#d4edda' : '#f8d7da') : 'transparent',
                                    border: hasViewedResults ? `1px solid ${isCorrect ? '#c3e6cb' : '#f5c6cb'}` : 'none',
                                    borderRadius: hasViewedResults ? '4px' : '0',
                                    padding: hasViewedResults ? '8px' : '0',
                                    margin: hasViewedResults ? '2px 0' : '0',
                                    cursor: hasViewedResults ? 'pointer' : 'default',
                                    transition: 'all 0.2s ease'
                                }}
                                onClick={() => hasViewedResults && scrollToQuestion(questionNumber)}
                            >
                                {!hasViewedResults ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className="answer-number">{questionNumber}</span>
                                        <input
                                            type="text"
                                            value={answer}
                                            onChange={(e) => handleAnswerChange(questionNumber, e.target.value)}
                                            className="answer-input-classic"
                                        />
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className="answer-number" style={{ 
                                            minWidth: '30px',
                                            fontSize: '15px',
                                            color: '#666',
                                            fontWeight: '500'
                                        }}>
                                            {questionNumber}
                                        </span>
                                        <span style={{ 
                                            marginLeft: '12px',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            color: isCorrect ? '#2d5a41' : '#8b1e3f',
                                            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
                                            letterSpacing: '0.2px',
                                            wordBreak: 'break-word'
                                        }}>
                                            {selectedTest.correctAnswers[index]}
                                        </span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default NewReadingPassage; 
