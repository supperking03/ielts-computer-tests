import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import './ReadingPassage.css';
import { newTests } from './newData';
import QuestionRenderer from './QuestionRenderer';
import ProgressIndicator from './ProgressIndicator';
import QuickTips from './QuickTips';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

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

    const selectedTest = newTests.find(test => test.id === parseInt(id));

    // For right-click highlighting
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState(Array(40).fill(""));

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
            setShowResults(true);
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
                            {currentPassage < passages.length - 1 ? "Next Passage" : "View Result"}
                        </button>
                    </div>
                </div>

                <div className="answer-section">
                    <QuickTips />
                    
                    <ProgressIndicator 
                        answers={answers}
                        currentPassage={currentPassage}
                        passages={passages}
                    />
                    
                    <h4>Fill Answers</h4>
                    {answers.map((answer, index) => (
                        <div key={index} className="answer-row">
                            <span className="answer-number">{index + 1}</span>
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => handleAnswerChange(index + 1, e.target.value)}
                                className="answer-input-classic"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewReadingPassage; 