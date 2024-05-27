import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import './ReadingPassage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { tests } from './data';
import { Helmet } from 'react-helmet';


function ReadingPassage() {
    const { id } = useParams();
    // For navigating passages with titles
    const [currentPassage, setCurrentPassage] = useState(0);

    // Use the 'id' to fetch or display the data for this specific test.
    // For example, you can find the test using the id from your `tests` array.

    const selectedTest = tests.find(test => test.id === parseInt(id));

    // For right-click highlighting
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState(Array(40).fill(""));
    const results = selectedTest.results;

    const navigate = useNavigate();  // <-- Use the useNavigate hook


    const [renderedContent, setRenderedContent] = useState({ passages: {}, questions: {} });



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

        const passageContent = document.querySelector(".passage-section > div").innerHTML; // Updated selector
        const questionContent = document.querySelector(".questions-section > div").innerHTML; // Updated selector

        setRenderedContent(prev => ({
            passages: { ...prev.passages, [currentPassage]: passageContent },
            questions: { ...prev.questions, [currentPassage]: questionContent }
        }));

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

        const passageContent = document.querySelector(".passage-section > div").innerHTML; // Updated selector
        const questionContent = document.querySelector(".questions-section > div").innerHTML; // Updated selector

        setRenderedContent(prev => ({
            passages: { ...prev.passages, [currentPassage]: passageContent },
            questions: { ...prev.questions, [currentPassage]: questionContent }
        }));

        setContextMenu({ visible: false });
    };

    const changePassage = (direction) => {
        if (direction === "prev" && currentPassage > 0) {
            setCurrentPassage(currentPassage - 1);
        } else if (direction === "next" && currentPassage < 2) {
            setCurrentPassage(currentPassage + 1);
        }
    };

    const handleNextAction = () => {
        if (currentPassage < 2) {
            changePassage("next");
        } else {
            setShowResults(true);
        }
    };

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    return (
        <div>
            <Helmet>
                <title>IELTS Reading Practice + {selectedTest.title}</title>
                <meta name="description" content="Engage with our reading practice tests to get a real feel of the IELTS exam." />
            </Helmet>
            {!showResults && <a className="fullscreen-button" onClick={toggleFullScreen} aria-hidden="true">Full screen</a>}
            <div className="reading-passage" onContextMenu={handleRightClick}>
                <div className="main-section">
                    <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a>
                    <div className="timer-container">
                        <CountdownTimer />
                    </div>
                    <div className="content-section">
                        <div className="passage-section">
                            <h2>{passages[currentPassage].title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: renderedContent.passages[currentPassage] || passages[currentPassage].content }}></div>
                        </div>

                        <div className="questions-section">
                            <div dangerouslySetInnerHTML={{ __html: renderedContent.questions[currentPassage] || passages[currentPassage].question }}></div>
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
                        <button style={{ color: "black" }} disabled={currentPassage === 0} onClick={() => changePassage("prev")}>Previous Passage</button>
                        <span>Passage {currentPassage + 1} of 3</span>
                        <button style={{ color: "black" }} onClick={handleNextAction}>
                            {currentPassage < 2 ? "Next Passage" : "View Result"}
                        </button>
                    </div>
                </div>

                {/* New Answer Section */}
                <div style={{ flexBasis: showResults ? '20%' : '10%' }} className="answer-section">
                    {showResults && <button style={{ color: "black", marginTop: '0px', marginBottom: '0px' }} onClick={() => {
                        setShowResults(false)
                    }}>
                        Close
                    </button>}
                    {
                        showResults && <button style={{ color: 'black' }}
                            onClick={() => {
                                window.open(
                                    selectedTest.explanation,
                                    '_blank' // <- This is what makes it open in a new window.
                                );
                            }}>View Explaination</button>
                    }
                    <h4>Fill Answers</h4>
                    {answers.map((answer, idx) => (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: showResults ? '' : 'center' }} >
                            <a style={{ color: 'grey', fontSize: '15px', marginTop: '5px', marginRight: '5px' }} >{`${idx + 1}`}</a>
                            <input
                                key={idx}
                                type="text"
                                value={answer}
                                onChange={e => handleAnswerChange(idx, e.target.value)}
                            // placeholder={`${idx + 1}`}
                            />
                            {showResults && <a style={{ color: 'grey', fontSize: '15px', marginTop: '5px', marginRight: '5px', marginLeft: '10px' }} >{`${results[idx]}`}</a>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReadingPassage;
