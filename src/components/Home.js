import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Helmet } from 'react-helmet';


function Home({ tests }) {
    return (
        <div className="tests-grid">
            {tests.map(test => (
                <Link key={test.id} to={!tests[0].audioSource ? `/reading/${test.id}/${test.title}` : `/listening/${test.id}/${test.title}`}>
                    <h2>{test.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Home;
