import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { loadTestProgress, TEST_PROGRESS_UPDATED_EVENT } from '../utils/testProgress';

const PLACEHOLDER_COLORS = [
    ['#1a3a6b', '#2563eb'],
    ['#065f46', '#059669'],
    ['#7c2d12', '#ea580c'],
    ['#4c1d95', '#7c3aed'],
    ['#1e3a5f', '#0ea5e9'],
    ['#713f12', '#ca8a04'],
];

function Home({ tests, storageScope, requiresLogin, onRequireLogin }) {
    const isListening = Boolean(tests[0]?.audioSource);
    const [progressMap, setProgressMap] = useState({});

    useEffect(() => {
        const loadProgressMap = () => {
            const nextProgressMap = {};
            tests.forEach((test) => {
                nextProgressMap[test.id] = loadTestProgress(storageScope, test.id);
            });
            setProgressMap(nextProgressMap);
        };

        loadProgressMap();
        window.addEventListener('focus', loadProgressMap);
        window.addEventListener('storage', loadProgressMap);
        window.addEventListener(TEST_PROGRESS_UPDATED_EVENT, loadProgressMap);

        return () => {
            window.removeEventListener('focus', loadProgressMap);
            window.removeEventListener('storage', loadProgressMap);
            window.removeEventListener(TEST_PROGRESS_UPDATED_EVENT, loadProgressMap);
        };
    }, [storageScope, tests]);

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
                const progress = progressMap[test.id];
                const hasStarted = Boolean(progress?.answeredCount);
                const isCompleted = Boolean(progress?.hasViewedResults);
                return (
                    <Link
                        key={test.id}
                        className="test-card"
                        to={requiresLogin ? '/' : to}
                        onClick={(event) => {
                            if (requiresLogin) {
                                event.preventDefault();
                                onRequireLogin?.();
                            }
                        }}
                    >
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
                            <div className="test-card-meta">
                                <span className="test-card-tag">{isListening ? 'Listening' : 'Reading'}</span>
                                {hasStarted && (
                                    <span className={`test-progress-pill${isCompleted ? ' completed' : ''}`}>
                                        {isCompleted ? `Band ${progress.lastBandScore}` : 'In Progress'}
                                    </span>
                                )}
                            </div>
                            <h2 className="test-card-title">{test.title}</h2>
                            {hasStarted && (
                                <div className="test-card-progress">
                                    {isCompleted
                                        ? `Last score: ${progress.lastScore}/40`
                                        : `Answered: ${progress.answeredCount}/40`}
                                </div>
                            )}
                            <span className="test-card-cta">Practice Now →</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Home;
