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
    const [userQuestionError, setUserQuestionError] = useState('');
    const [userAnswerError, setUserAnswerError] = useState('');
    const [recipientIELTSError, setRecipientIELTSError] = useState('');
    const navigate = useNavigate();

    const navigateBackToHome = () => {
        navigate('/');
    };

    const validateFields = () => {
        let isValid = true;
        if (!userQuestion.trim()) {
            setUserQuestionError('Writing Task 2 question is required.');
            isValid = false;
        } else {
            setUserQuestionError('');
        }
        if (!userAnswer.trim()) {
            setUserAnswerError('Answer is required.');
            isValid = false;
        } else {
            setUserAnswerError('');
        }
        if (!recipientIELTS.trim()) {
            setRecipientIELTSError('Email is required.');
            isValid = false;
        } else {
            setRecipientIELTSError('');
        }
        return isValid;
    };

    // ... handleImageChange, resizeImage, convertToBase64 functions ...

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateFields()) {
            return;
        }        

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
            <h3>Submit your Writing Task 2 and receive a score along with detailed feedback within 1-2 working days.</h3> {/* Description */}

            <form className="input-container" onSubmit={sendEmail}>
                <textarea
                    name="userQuestion"
                    className="input-field"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="Enter Writing Task 2 question"
                />
                 {userQuestionError && <div className="error-message">{userQuestionError}</div>}
                <textarea
                    name="userAnswer"
                    className="input-field"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                />
                 {userAnswerError && <div className="error-message">{userAnswerError}</div>}
                <textarea
                    name="recipientIELTS"
                    className="input-field"
                    value={recipientIELTS}
                    onChange={(e) => setRecipientIELTS(e.target.value)}
                    placeholder="Enter your Email to get result"
                />
                {recipientIELTSError && <div className="error-message">{recipientIELTSError}</div>}
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
