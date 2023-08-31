import React, { useState } from 'react';
import axios from 'axios';
import './WritingPassage.css';
import { useParams, useNavigate } from 'react-router-dom';

const WritingPassage = () => {
    const [userInput, setUserInput] = useState('');
    const [gptResponse, setGptResponse] = useState('');
    const navigate = useNavigate();  // <-- Use the useNavigate hook

    const navigateBackToHome = () => {
        navigate('/');
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                '',
                {
                    model: 'gpt-3.5-turbo-0301',
                    messages: [
                        {
                            role: 'user',
                            content: 'Say this is a test!'
                        }
                    ],
                    temperature: 0
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer`
                    },
                }
            );

            const message = response.data.choices[0]?.text?.trim();
            setGptResponse(message);
        } catch (error) {
            console.error('Error:', error);
            setGptResponse('An error occurred.');
        }
    };

    return (
        <div>
            <a className="back-button" onClick={navigateBackToHome}>{`< Back to Home`}</a>
            <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write your essay or question here."
            />
            <button style={{ color: 'black', padding: '10px', margin: '0px', textDecoration: 'none' }} onClick={handleSubmit}>Submit</button>
            {gptResponse && <div>Answers: {gptResponse}</div>}
        </div>
    );
};

export default WritingPassage;
