import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';


function Home({ tests }) {
    const isListening = Boolean(tests[0]?.audioSource);

    return (
        <div className="tests-grid">
            {tests.map(test => (
                <div key={test.id} className="test-item">
                    <h2>{test.title}</h2>
                    <div className="system-links">
                        <Link
                            className="system-link old-system-link"
                            to={!isListening ? `/reading/${test.id}/${test.title}` : `/listening/${test.id}/${test.title}`}
                        >
                            Old System
                        </Link>
                        <Link
                            className="system-link new-system-link"
                            to={!isListening ? `/new-reading/${test.id}/${test.title}` : `/new-listening/${test.id}/${test.title}`}
                        >
                            New System
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
