import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';


function Home({ tests }) {
    return (
        <div className="tests-grid">
            {tests.map(test => (
                <div key={test.id} className="test-item">
                    <Link to={!tests[0].audioSource ? `/reading/${test.id}/${test.title}` : `/listening/${test.id}/${test.title}`}>
                        <h2>{test.title}</h2>
                    </Link>
                    {!tests[0].audioSource && (
                        <Link 
                            to={`/new-reading/${test.id}/${test.title}`}
                            className="new-system-link"
                            style={{
                                display: 'block',
                                marginTop: '10px',
                                padding: '8px 16px',
                                backgroundColor: '#007BFF',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                fontSize: '14px',
                                textAlign: 'center'
                            }}
                        >
                            🆕 Try New System
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Home;
