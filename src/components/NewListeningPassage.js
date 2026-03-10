import React, { useState, useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import './ReadingPassage.css';
import { tests } from './dataLis';
import ListeningQuestionRenderer from './ListeningQuestionRenderer';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { isAnswerMatch } from '../utils/answerMatching';

// Extract only images from HTML content (tables handled via structured questions data)
function extractImagesHtml(html) {
    if (!html) return null;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const imgs = Array.from(doc.querySelectorAll('img'));
    if (imgs.length === 0) return null;
    return imgs.map(img => img.outerHTML).join('');
}

function NewListeningPassage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const initialSection = parseInt(new URLSearchParams(location.search).get('section')) || 0;
    const [currentSection, setCurrentSection] = useState(initialSection);

    useEffect(() => {
        navigate(`?section=${currentSection}`, { replace: true });
    }, [currentSection, navigate]);

    const selectedTest = tests.find(test => test.id === parseInt(id));

    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
    const [answers, setAnswers] = useState(Array(40).fill(""));
    const [hasViewedResults, setHasViewedResults] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const navigateBackToHome = () => navigate('/');

    if (!selectedTest) return <div>Test not found!</div>;

    const passages = selectedTest.passages;

    const forward5s = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 5;
            if (!isPlaying) audioRef.current.play();
        }
    };

    const backward5s = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
            if (!isPlaying) audioRef.current.play();
        }
    };

    function toggleFullScreen() {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else if (document.exitFullscreen) document.exitFullscreen();
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        const selectedText = window.getSelection().toString();
        if (selectedText) setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
    };

    const highlightText = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        const range = selection.getRangeAt(0);
        const span = document.createElement('span');
        span.style.backgroundColor = 'yellow';
        range.surroundContents(span);
        selection.removeAllRanges();
        setContextMenu({ visible: false });
    };

    const removeHighlight = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        const range = selection.getRangeAt(0);
        const parentElement = range.commonAncestorContainer.parentElement;
        if (parentElement && parentElement.style.backgroundColor === 'yellow') {
            parentElement.outerHTML = parentElement.innerHTML;
        }
        selection.removeAllRanges();
        setContextMenu({ visible: false });
    };

    const changeSection = (direction) => {
        if (direction === 'next' && currentSection < passages.length - 1) setCurrentSection(currentSection + 1);
        else if (direction === 'previous' && currentSection > 0) setCurrentSection(currentSection - 1);
    };

    const handleNextAction = () => {
        if (currentSection < passages.length - 1) changeSection('next');
        else setHasViewedResults(true);
    };

    const handleAnswerChange = (questionNumber, value) => {
        setAnswers(prev => {
            const next = [...prev];
            next[questionNumber - 1] = value;
            return next;
        });
    };

    const isAnswerCorrect = (questionIndex) => {
        if (!hasViewedResults || !selectedTest.correctAnswers) return null;
        const userAnswer = answers[questionIndex]?.trim().toLowerCase() || '';
        const correctAnswer = selectedTest.correctAnswers[questionIndex]?.toLowerCase() || '';
        return isAnswerMatch(userAnswer, correctAnswer);
    };

    const getSectionForQuestion = (questionNumber) => {
        let currentQ = 1;
        for (let i = 0; i < passages.length; i++) {
            let total = 0;
            passages[i].questions?.forEach(qg => { total += qg.items?.length || 0; });
            if (questionNumber >= currentQ && questionNumber < currentQ + total) return i;
            currentQ += total;
        }
        return 0;
    };

    const scrollToQuestion = (questionNumber) => {
        const targetSection = getSectionForQuestion(questionNumber);
        if (currentSection !== targetSection) {
            setCurrentSection(targetSection);
            setTimeout(() => scrollToQuestionElement(questionNumber), 100);
        } else {
            scrollToQuestionElement(questionNumber);
        }
    };

    const scrollToQuestionElement = (questionNumber) => {
        const el = document.getElementById(`question-${questionNumber}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.backgroundColor = '#fff3cd';
            setTimeout(() => { el.style.backgroundColor = ''; }, 2000);
        }
    };

    const calculateScore = () => {
        if (!selectedTest.correctAnswers) return 0;
        return answers.reduce((score, answer, i) => {
            const ua = answer?.trim().toLowerCase() || '';
            const ca = selectedTest.correctAnswers[i]?.toLowerCase() || '';
            return score + (isAnswerMatch(ua, ca) ? 1 : 0);
        }, 0);
    };

    const getBandScore = (score) => {
        if (score >= 39) return 9.0; if (score >= 37) return 8.5; if (score >= 35) return 8.0;
        if (score >= 33) return 7.5; if (score >= 30) return 7.0; if (score >= 27) return 6.5;
        if (score >= 23) return 6.0; if (score >= 19) return 5.5; if (score >= 15) return 5.0;
        if (score >= 13) return 4.5; if (score >= 10) return 4.0; if (score >= 8) return 3.5;
        if (score >= 6) return 3.0; if (score >= 4) return 2.5; if (score >= 3) return 2.0;
        if (score >= 2) return 1.5; if (score >= 1) return 1.0; return 0.0;
    };

    return (
        <div>
            <Helmet>
                <title>IELTS Listening Practice + {selectedTest.title}</title>
                <meta name="description" content="IELTS Listening Practice Test" />
            </Helmet>
            <a className="fullscreen-button" onClick={toggleFullScreen}>Full screen</a>

            <div className="reading-passage" onContextMenu={handleRightClick}>
                <div className="main-section">
                    <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                        <button className="audio-control-btn backward" onClick={backward5s}>-5s</button>
                        <audio
                            className="audio-section"
                            ref={audioRef}
                            src={selectedTest.audioSource}
                            controls
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        >
                            Your browser does not support the audio element.
                        </audio>
                        <button className="audio-control-btn forward" onClick={forward5s}>+5s</button>
                    </div>

                    <div className="content-section">
                        <div className="questions-section" style={{ flex: 1 }}>
                            {(() => {
                                const imgsHtml = extractImagesHtml(passages[currentSection].content);
                                return imgsHtml ? (
                                    <div
                                        className="passage-content"
                                        style={{ marginBottom: '24px' }}
                                        dangerouslySetInnerHTML={{ __html: imgsHtml }}
                                    />
                                ) : null;
                            })()}
                            <ListeningQuestionRenderer
                                questionsData={passages[currentSection].questions}
                                answers={answers}
                                onAnswerChange={handleAnswerChange}
                                hasViewedResults={hasViewedResults}
                                correctAnswers={selectedTest.correctAnswers}
                            />
                        </div>
                    </div>

                    {contextMenu.visible && (
                        <div style={{ position: 'absolute', top: `${contextMenu.y}px`, left: `${contextMenu.x}px`, backgroundColor: 'white', border: '1px solid black', zIndex: 1000 }}>
                            <button style={{ color: 'black', padding: '10px', margin: '0px' }} onClick={highlightText}>Highlight</button>
                            <button style={{ color: 'black', padding: '10px', margin: '0px' }} onClick={removeHighlight}>Remove Highlight</button>
                        </div>
                    )}

                    <div className="passage-navigation">
                        <button style={{ color: "black" }} disabled={currentSection === 0} onClick={() => changeSection('previous')}>Previous Section</button>
                        <span>Section {currentSection + 1} of {passages.length}</span>
                        <button style={{ color: "black" }} onClick={handleNextAction}>
                            {currentSection < passages.length - 1 ? "Next Section" : "Check Answers"}
                        </button>
                    </div>
                </div>

                <div className="answer-section">
                    {hasViewedResults && (
                        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center', border: '2px solid #333' }}>
                            <div style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}><strong>Your Score</strong></div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                                {calculateScore()}/40 ({((calculateScore() / 40) * 100).toFixed(1)}%)
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginTop: '5px' }}>
                                Band Score: {getBandScore(calculateScore())}
                            </div>
                            {selectedTest.explanation && (
                                <button style={{ color: 'black', marginTop: '10px' }} onClick={() => window.open(selectedTest.explanation, '_blank')}>
                                    View Explanation
                                </button>
                            )}
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
                                        <span className="answer-number" style={{ minWidth: '30px', fontSize: '15px', color: '#666', fontWeight: '500' }}>
                                            {questionNumber}
                                        </span>
                                        <span style={{ marginLeft: '12px', fontSize: '14px', color: isCorrect ? '#2d5a41' : '#8b1e3f' }}>
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

export default NewListeningPassage;
