import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PLACEHOLDER_COLORS = [
    ['#1a3a6b', '#2563eb'],
    ['#065f46', '#059669'],
    ['#7c2d12', '#ea580c'],
    ['#4c1d95', '#7c3aed'],
    ['#1e3a5f', '#0ea5e9'],
    ['#713f12', '#ca8a04'],
];

function Home({ tests }) {
    const isListening = Boolean(tests[0]?.audioSource);

    if (!tests.length) {
        return (
            <div className="tests-empty-state">
                <h2>No practice tests yet</h2>
                <p>
                    Add generated reading tests to <code>src/components/practiceTests/</code> and
                    export them from <code>src/components/practiceTests/index.js</code>.
                </p>
            </div>
        );
    }

    return (
        <div className="tests-grid">
            {tests.map(test => {
                const to = isListening
                    ? `/new-listening/${test.id}/${test.title}`
                    : `/new-reading/${test.id}/${test.title}`;
                return (
                    <Link key={test.id} className="test-card" to={to}>
                        <div className="test-card-img">
                            {test.image ? (
                                <img src={test.image} alt={test.title} />
                            ) : (
                                <div
                                    className="test-card-placeholder"
                                    style={{
                                        background: `linear-gradient(135deg, ${PLACEHOLDER_COLORS[test.id % PLACEHOLDER_COLORS.length][0]}, ${PLACEHOLDER_COLORS[test.id % PLACEHOLDER_COLORS.length][1]})`
                                    }}
                                >
                                    <span className="test-card-placeholder-icon">
                                        {isListening ? '🎧' : '📖'}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="test-card-body">
                            <span className="test-card-tag">{isListening ? 'Listening' : 'Reading'}</span>
                            <h2 className="test-card-title">{test.title}</h2>
                            <span className="test-card-cta">Practice Now →</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Home;
