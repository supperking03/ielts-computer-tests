// ListeningPassage.js
import React, { useState, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import './ListeningPassage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { tests } from './dataLis';
import { Helmet } from 'react-helmet';


function ListeningPassage() {
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

    // audio
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const navigate = useNavigate();  // <-- Use the useNavigate hook

    const [renderedContent, setRenderedContent] = useState({ passages: {} });

    const navigateBackToHome = () => {
        navigate('/');
    };

    if (!selectedTest) {
        return <div>Test not found!</div>;
    }

    const passages = selectedTest.passages;


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

    const forward10s = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 5; // move forward by 10 seconds
            if (!isPlaying) {
                audioRef.current.play(); // if it was paused, play the audio
            }
        }
    };

    const backward10s = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 5; // move back by 10 seconds
            if (audioRef.current.currentTime < 0) audioRef.current.currentTime = 0; // prevent negative values
            if (!isPlaying) {
                audioRef.current.play(); // if it was paused, play the audio
            }
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

        setRenderedContent(prev => ({
            passages: { ...prev.passages, [currentPassage]: passageContent }
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

        setRenderedContent(prev => ({
            passages: { ...prev.passages, [currentPassage]: passageContent }
        }));

        setContextMenu({ visible: false });
    };

    const changePassage = (direction) => {
        if (direction === "prev" && currentPassage > 0) {
            setCurrentPassage(currentPassage - 1);
        } else if (direction === "next" && currentPassage < 3) {
            setCurrentPassage(currentPassage + 1);
        }
    };

    const handleNextAction = () => {
        if (currentPassage < 3) {
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

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }


    return (
        <div>
            <Helmet>
                <title>IELTS Listening Practice</title>
                <meta name="description" content="Tune in to our listening practice tests and improve your IELTS listening skills." />
            </Helmet>
            {!showResults && <a className="fullscreen-button" onClick={toggleFullScreen} aria-hidden="true">Full screen</a>}
            <div className="reading-passage" onContextMenu={handleRightClick}>
                <div className="main-section">
                    <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a>
                    {/* Audio Section */}
                    <button className="audio-control-btn backward" onClick={backward10s}>-5s</button>
                    <button className="audio-control-btn forward" onClick={forward10s}>+5s</button>


                    <audio
                        className="audio-section"
                        type="audio/mp3"
                        ref={audioRef}
                        src={selectedTest.audioSource} // Ensure your data has an audioSource property
                        controls
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    >
                        Your browser does not support the audio element.
                    </audio>
                    <div className="content-section">
                        <div className="passage-section">
                            {/* <h2>{passages[currentPassage].title}</h2> */}
                            <div dangerouslySetInnerHTML={{ __html: renderedContent.passages[currentPassage] || passages[currentPassage].content }}></div>
                        </div>
                    </div>
                    {contextMenu.visible && (
                        <div
                            style={{
                                position: 'absolute',
                                top: `${contextMenu.y}px`,
                                left: `${contextMenu.x}px`,
                                backgroundColor: "white",
                                border: '1px solid black',
                                zIndex: 1000
                            }}
                        >
                            <button style={{ color: 'black', padding: '10px', margin: '0px', textDecoration: 'none' }} onClick={highlightText}>Highlight</button>
                            <button style={{ color: 'black', padding: '10px', margin: '0px', textDecoration: 'none' }} onClick={removeHighlight}>Remove Highlight</button>
                        </div>
                    )}
                    <div className="passage-navigation">
                        <button style={{ color: "black" }} disabled={currentPassage === 0} onClick={() => changePassage("prev")}>Previous Section</button>
                        <span>Section {currentPassage + 1} of 4</span>
                        <button style={{ color: "black" }} onClick={handleNextAction}>
                            {currentPassage < 3 ? "Next Section" : "View Result"}
                        </button>
                    </div>
                    {/* {showResults && (
                        <div className="results-popup">
                            <h3>Results</h3>
                            <div className="results-grid">
                                {results.map((_, idx) => (
                                    <div key={idx} className="result-item">Q{idx + 1}: {results[idx]}</div>
                                ))}
                            </div>
                            <div>
                                <button style={{ color: 'white', padding: '10px', margin: '0px', textDecoration: 'none', backgroundColor: "grey" }} onClick={() => setShowResults(false)}>Close</button>
                                <button style={{ color: 'white', padding: '10px', margin: '0px', textDecoration: 'none', backgroundColor: "blue", marginLeft: "10px" }}
                                    onClick={() => {
                                        window.open(
                                            selectedTest.explanation,
                                            '_blank' // <- This is what makes it open in a new window.
                                        );
                                    }}>View Explaination</button>
                            </div>
                        </div>
                    )} */}
                </div>

                {/* New Answer Section */}
                <div className="answer-section">
                    <h4>Fill Answers</h4>
                    {answers.map((answer, idx) => (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }} >
                            <a style={{ color: 'grey', fontSize: '15px', marginTop: '5px', marginRight: '5px' }} >{`${idx + 1}`}</a>
                            <input
                                key={idx}
                                type="text"
                                value={answer}
                                onChange={e => handleAnswerChange(idx, e.target.value)}
                            // placeholder={`${idx + 1}`}
                            />
                        </div>
                    ))}
                </div>
                {showResults && <div className="answer-section">
                    <button style={{ color: "black", marginTop:'0px', marginBottom:'0px' }} onClick={()=>{
                        setShowResults(false)
                    }}>
                       Close
                    </button>
                    <button style={{ color: 'black'}}
                                    onClick={() => {
                                        window.open(
                                            selectedTest.explanation,
                                            '_blank' // <- This is what makes it open in a new window.
                                        );
                                    }}>View Explaination</button>
                    {results.map((result, idx) => (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }} >
                            <a style={{ color: 'grey', fontSize: '15px', marginTop: '5px', marginRight: '5px' }} >{`${idx + 1}.`} {result}</a>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default ListeningPassage;
