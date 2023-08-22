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
            <a className="fullscreen-button" onClick={toggleFullScreen} aria-hidden="true">Full screen</a>
            <div className="reading-passage" onContextMenu={handleRightClick}>
            <div className="main-section">
                <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a>
                {/* Audio Section */}
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
                        <div dangerouslySetInnerHTML={{ __html: passages[currentPassage].content }}></div>
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
                        <button onClick={highlightText}>Highlight</button>
                        <button onClick={removeHighlight}>Remove Highlight</button>
                    </div>
                )}
                <div className="passage-navigation">
                    <button disabled={currentPassage === 0} onClick={() => changePassage("prev")}>Previous Section</button>
                    <span>Section {currentPassage + 1} of 4</span>
                    <button onClick={handleNextAction}>
                        {currentPassage < 3 ? "Next Section" : "View Result"}
                    </button>
                </div>
                {showResults && (
                    <div className="results-popup">
                        <h3>Results</h3>
                        <div className="results-grid">
                            {results.map((_, idx) => (
                                <div key={idx} className="result-item">Q{idx + 1}: {results[idx]}</div>
                            ))}
                        </div>
                        <button onClick={() => setShowResults(false)}>Close</button>
                    </div>
                )}
            </div>        

            {/* New Answer Section */}
            <div className="answer-section">
                <h4>Fill Answers</h4>
                {answers.map((answer, idx) => (
                    <input 
                        key={idx} 
                        type="text" 
                        value={answer}
                        onChange={e => handleAnswerChange(idx, e.target.value)}
                        placeholder={`${idx + 1}`}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}

export default ListeningPassage;
