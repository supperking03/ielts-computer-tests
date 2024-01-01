import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { readAndCompressImage } from 'browser-image-resizer';
import './WritingPassage.css';

const WritingPassage = () => {
    const [userQuestion, setUserQuestion] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [recipientIELTS, setRecipientIELTS] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [submissionCount, setSubmissionCount] = useState(0);
    const navigate = useNavigate();

    const navigateBackToHome = () => {
        navigate('/');
    };

    // ... handleImageChange, resizeImage, convertToBase64 functions ...

    const sendEmail = (e) => {
        e.preventDefault();

        if (submissionCount >= 4) {
            setStatusMessage('Submission limit reached. You cannot submit more than 5 times.');
            setIsSuccess(false);
            return;
        }

        setIsLoading(true);
        setStatusMessage('');
        setIsSuccess(false);

        emailjs.sendForm('service_gkpcv5e', 'template_zn4h9xv', e.target, 'qBkhrnEimnFmOHZ9R')
            .then((result) => {
                setIsLoading(false);
                setStatusMessage('Email successfully sent. We will send result and detail feedback to your email soon.');
                setIsSuccess(true);
                setSubmissionCount(count => count + 1);
            }, (error) => {
                setIsLoading(false);
                setStatusMessage('Failed to send email.');
                setIsSuccess(false);
            });
    };

    return (
        <div className="writing-passage-container">
            {/* <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a> */}
            <form className="input-container" onSubmit={sendEmail}>
                <textarea
                    name="userQuestion"
                    className="input-field"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="Enter Writing Task 2 question"
                />
                <textarea
                    name="userAnswer"
                    className="input-field"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                />
                <textarea
                    name="recipientIELTS"
                    className="input-field"
                    value={recipientIELTS}
                    onChange={(e) => setRecipientIELTS(e.target.value)}
                    placeholder="Enter your Email to get result"
                />
                <button 
                    className="submit-button"
                    type="submit"
                    disabled={isLoading || submissionCount >= 5}
                >
                    {isLoading ? 'Sending...' : 'Submit'}
                </button>
            </form>
            {isLoading && <div className="loader"></div>}
            <div className={`response-container ${isSuccess ? 'status-success' : 'status-error'}`}>
                {statusMessage}
            </div>
        </div>
    );
};

export default WritingPassage;
