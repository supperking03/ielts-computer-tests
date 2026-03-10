import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';


function Home({ tests }) {
    return (
        <div className="tests-grid">
            {tests.map(test => (
                <div key={test.id} className="test-item">
                    <Link to={!tests[0].audioSource ? `/new-reading/${test.id}/${test.title}` : `/listening/${test.id}/${test.title}`}>
                        <h2>{test.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
