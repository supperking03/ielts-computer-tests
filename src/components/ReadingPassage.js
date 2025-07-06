import React, { useState, useEffect, useCallback, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import './ReadingPassage.css';
import { tests } from './data';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


function ReadingPassage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Use the 'id' to fetch or display the data for this specific test.
    // For example, you can find the test using the id from your `tests` array.

    // Set the initial passage from the URL query parameter
    const initialPassage = parseInt(new URLSearchParams(location.search).get('passage')) || 0;
    const [currentPassage, setCurrentPassage] = useState(initialPassage);

    // Update the URL when `currentPassage` changes
    useEffect(() => {
        navigate(`?passage=${currentPassage}`, { replace: true });
    }, [currentPassage, navigate]);

    const selectedTest = tests.find(test => test.id === parseInt(id));

    // For right-click highlighting
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState(Array(40).fill(""));
    const results = selectedTest.results;

    const [renderedContent, setRenderedContent] = useState({ passages: {}, questions: {} });

    // Handle input changes from inline inputs
    const handleInlineInputChange = useCallback((questionNumber, value) => {
        const answerIndex = questionNumber - 1;
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[answerIndex] = value;
            return newAnswers;
        });
    }, []);

    // Questions container component - mounted once per passage
    const QuestionsContainer = ({ questionHTML, currentPassage, onAnswerChange }) => {
        const containerRef = useRef(null);
        
        useEffect(() => {
            if (!containerRef.current || !questionHTML) return;
            
            // Set HTML content
            containerRef.current.innerHTML = questionHTML;
            
            // Find and replace all dots with input fields
            const walker = document.createTreeWalker(
                containerRef.current,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );
            
            const textNodes = [];
            let node;
            while (node = walker.nextNode()) {
                if (node.textContent.includes('…')) {
                    textNodes.push(node);
                }
            }
            
            // Process each text node
            let inputCounter = 0;
            textNodes.forEach(textNode => {
                const text = textNode.textContent;
                if (text.includes('…')) {
                    const parts = text.split(/…+/);
                    if (parts.length > 1) {
                        const parent = textNode.parentNode;
                        const fragment = document.createDocumentFragment();
                        
                        for (let i = 0; i < parts.length; i++) {
                            if (parts[i]) {
                                fragment.appendChild(document.createTextNode(parts[i]));
                            }
                            
                            if (i < parts.length - 1) {
                                const startIndex = currentPassage === 0 ? 1 : currentPassage === 1 ? 14 : 27;
                                const questionNumber = startIndex + inputCounter;
                                
                                const input = document.createElement('input');
                                input.type = 'text';
                                input.className = 'inline-answer-input';
                                input.placeholder = `Q${questionNumber}`;
                                input.style.cssText = `
                                    display: inline-block;
                                    width: 120px;
                                    padding: 2px 8px;
                                    margin: 0 2px;
                                    border: 1px solid #007BFF;
                                    border-radius: 3px;
                                    font-size: 14px;
                                    background-color: #f8f9fa;
                                    vertical-align: baseline;
                                `;
                                
                                // Event listener
                                input.addEventListener('input', (e) => {
                                    onAnswerChange(questionNumber, e.target.value);
                                });
                                
                                fragment.appendChild(input);
                                inputCounter++;
                            }
                        }
                        
                        parent.replaceChild(fragment, textNode);
                    }
                }
            });
        }, []); // Empty dependencies - only run once on mount
        
        return <div ref={containerRef}></div>;
    };

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

    const normalizeAnswer = (answer) => {
        const normalized = answer.trim().toLowerCase();
        switch (normalized) {
            case 't': return 'true';
            case 'f': return 'false';
            case 'ng': return 'not given';
            case 'y': return 'yes';
            case 'n': return 'no';
            default: return normalized;
        }
    };

    const cleanResult = (result) => result.split(". ")[1]?.toLowerCase() || result.toLowerCase();

    // Expand answers with optional plural forms like "string(s)"
    const expandOptionalPlural = (text) => {
        const match = text.match(/(.+)\(s\)$/);
        if (match) {
            return [match[1], `${match[1]}s`];
        }
        return [text];
    };

    // Check if user answer matches any acceptable answer
    const isAnswerCorrect = (userAnswer, result) => {
        // Split by '/' or ',' and normalize each answer
        const acceptableAnswers = cleanResult(result)
            .split(/[/,]/)
            .flatMap(ans => expandOptionalPlural(normalizeAnswer(ans.trim()))); // Expand optional plurals

        return acceptableAnswers.includes(normalizeAnswer(userAnswer));
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
                            <QuestionsContainer 
                                key={`questions-${currentPassage}`} // Force remount when passage changes
                                questionHTML={passages[currentPassage].question}
                                currentPassage={currentPassage}
                                onAnswerChange={handleInlineInputChange}
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
                    <h4>
                        {showResults ? `${answers.filter((answer, idx) => isAnswerCorrect(answer, results[idx])).length}/40 correct answers` : "Fill Answers"}
                    </h4>
                    {answers.map((answer, idx) => {
                        const isCorrect = isAnswerCorrect(answer, results[idx]);

                        // Debugging logs
                        //console.log(`Answer ${idx + 1}: User Answer - ${normalizedUserAnswer}, Expected - ${normalizedResult}, Match - ${isCorrect}`);
                        return (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'row', justifyContent: showResults ? '' : 'center' }} >
                                <a style={{ color: 'grey', fontSize: '15px', marginTop: '5px', marginRight: '5px' }} >{`${idx + 1}`}</a>
                                <input
                                    key={idx}
                                    type="text"
                                    value={answer}
                                    onChange={e => handleAnswerChange(idx, e.target.value)}
                                // placeholder={`${idx + 1}`}
                                />
                                {showResults && <a style={{ color: isCorrect ? 'grey' : 'red', fontSize: '15px', marginTop: '5px', marginRight: '5px', marginLeft: '10px' }} >{`${results[idx]}`}</a>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ReadingPassage;
