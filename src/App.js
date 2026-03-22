// App.js
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingPassage from './components/ReadingPassage';
import NewReadingPassage from './components/NewReadingPassage';
import { tests } from './components/data';
import { tests as tests2 } from './components/dataLis';
import { tests as testsGeneral } from './components/dataGeneral';
import { practiceTests } from './components/practiceAcademicTests';
import { practiceGeneralTests } from './components/practiceGeneralTests';
import ListeningPassage from './components/ListeningPassage';
import NewListeningPassage from './components/NewListeningPassage';
import './Menu.css';
import './App.css';
import { Helmet } from 'react-helmet';
import { clearTestProgress, loadTestProgress, TEST_PROGRESS_UPDATED_EVENT } from './utils/testProgress';

const FEATURES = [
    {
        icon: '🖥️',
        title: 'Real Computer-Based Experience',
        desc: 'Our interface mirrors the official IELTS computer exam layout — same look, same feel. Practice in the exact environment you\'ll face on test day with no surprises.',
    },
    {
        icon: '🤖',
        title: 'Instant AI Explanation',
        desc: 'Do not stop at right or wrong. Get AI-powered explanations instantly so you can understand the evidence, fix weak logic, and learn faster after every test.',
    },
    {
        icon: '📚',
        title: 'Many Tests',
        desc: 'Train with a large bank of Cambridge-style tests and extra practice sets in one place, so you always have enough material to build stamina and track improvement.',
    },
];

const TEST_COLLECTIONS = [
    { scope: 'reading-academic', label: 'CAM Reading (Academic)', type: 'Reading', tests },
    { scope: 'listening-academic', label: 'CAM Listening', type: 'Listening', tests: tests2 },
    { scope: 'reading-general', label: 'Reading (General)', type: 'Reading', tests: testsGeneral },
    { scope: 'practice-reading-academic', label: 'Practice Reading (Academic)', type: 'Reading', tests: practiceTests },
    { scope: 'practice-reading-general', label: 'Practice Reading (General)', type: 'Reading', tests: practiceGeneralTests }
];

function WhyModal({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Why We Are The Best</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                <div className="modal-features">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{f.icon}</div>
                            <div>
                                <div className="feature-title">{f.title}</div>
                                <div className="feature-desc">{f.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function HistoryModal({ onClose }) {
    const [sortBy, setSortBy] = useState('recent');
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const loadEntries = () => {
            const nextEntries = TEST_COLLECTIONS.flatMap((collection) =>
                collection.tests.map((test) => {
                    const progress = loadTestProgress(collection.scope, test.id);
                    if (!progress || !progress.answeredCount) {
                        return null;
                    }

                    return {
                        key: `${collection.scope}:${test.id}`,
                        scope: collection.scope,
                        testId: test.id,
                        title: test.title,
                        route: collection.type === 'Listening'
                            ? `/new-listening/${test.id}/${test.title}`
                            : `/new-reading/${test.id}/${test.title}`,
                        collectionLabel: collection.label,
                        type: collection.type,
                        answeredCount: progress.answeredCount || 0,
                        hasViewedResults: Boolean(progress.hasViewedResults),
                        lastScore: progress.lastScore,
                        lastBandScore: progress.lastBandScore,
                        updatedAt: progress.updatedAt,
                        completedAt: progress.completedAt
                    };
                }).filter(Boolean)
            );

            setEntries(nextEntries);
        };

        loadEntries();
        window.addEventListener(TEST_PROGRESS_UPDATED_EVENT, loadEntries);
        window.addEventListener('storage', loadEntries);
        window.addEventListener('focus', loadEntries);

        return () => {
            window.removeEventListener(TEST_PROGRESS_UPDATED_EVENT, loadEntries);
            window.removeEventListener('storage', loadEntries);
            window.removeEventListener('focus', loadEntries);
        };
    }, []);

    const sortedEntries = useMemo(() => {
        const nextEntries = [...entries];

        if (sortBy === 'band') {
            nextEntries.sort((a, b) => {
                const bandDelta = (b.lastBandScore ?? -1) - (a.lastBandScore ?? -1);
                if (bandDelta !== 0) {
                    return bandDelta;
                }
                return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
            });
            return nextEntries;
        }

        nextEntries.sort((a, b) =>
            new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime()
        );
        return nextEntries;
    }, [entries, sortBy]);

    const handleClearHistory = (scope, testId) => {
        clearTestProgress(scope, testId);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box history-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>History</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                <div className="history-toolbar">
                    <span className="history-count">{entries.length} saved tests</span>
                    <label className="history-sort">
                        <span>Sort</span>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="recent">Most recent</option>
                            <option value="band">Highest band</option>
                        </select>
                    </label>
                </div>
                <div className="history-list">
                    {sortedEntries.length === 0 ? (
                        <div className="history-empty">No saved history yet.</div>
                    ) : (
                        sortedEntries.map((entry) => (
                            <div key={entry.key} className="history-card">
                                <div className="history-card-main">
                                    <div className="history-card-meta">
                                        <span className="history-type">{entry.type}</span>
                                        <span className="history-source">{entry.collectionLabel}</span>
                                    </div>
                                    <div className="history-title">{entry.title}</div>
                                    <div className="history-stats">
                                        {entry.hasViewedResults
                                            ? `Score ${entry.lastScore}/40 · Band ${entry.lastBandScore}`
                                            : `In progress · ${entry.answeredCount}/40 answered`}
                                    </div>
                                    <div className="history-time">
                                        {entry.updatedAt
                                            ? new Date(entry.updatedAt).toLocaleString('vi-VN')
                                            : ''}
                                    </div>
                                </div>
                                <div className="history-actions">
                                    <Link className="history-open-btn" to={entry.route} onClick={onClose}>
                                        Open
                                    </Link>
                                    <button
                                        className="history-clear-btn"
                                        onClick={() => handleClearHistory(entry.scope, entry.testId)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

function Header() {
    const [showModal, setShowModal] = useState(false);
    const [showHistoryModal, setShowHistoryModal] = useState(false);

    return (
        <>
            <Helmet>
                <title>The Best IELTS Practice Test On Computer</title>
                <meta name="description" content="Real practice, real score — IELTS computer-based tests" />
            </Helmet>
            <header className="site-header">
                <div className="site-header-inner">
                    <div className="site-brand">
                        <img
                            src="https://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png"
                            alt="Logo"
                            className="site-logo"
                        />
                        <div>
                            <div className="site-brand-title">The Best IELTS Practice Test On Computer</div>
                            <div className="site-brand-sub">Real practice &nbsp;·&nbsp; Real score</div>
                        </div>
                    </div>
                    <div className="site-header-actions">
                        <button className="why-best-btn" onClick={() => setShowHistoryModal(true)}>
                            History
                        </button>
                        <button className="why-best-btn" onClick={() => setShowModal(true)}>
                            ★ Why We Are The Best?
                        </button>
                    </div>
                </div>
            </header>
            {showModal && <WhyModal onClose={() => setShowModal(false)} />}
            {showHistoryModal && <HistoryModal onClose={() => setShowHistoryModal(false)} />}
        </>
    );
}

function AppContent() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(0);
    const currentScope =
        currentPage === 0 ? 'reading-academic' :
        currentPage === 1 ? 'listening-academic' :
        currentPage === 2 ? 'reading-general' :
        currentPage === 3 ? 'practice-reading-academic' :
        'practice-reading-general';
    const currentTests =
        currentPage === 0 ? tests :
        currentPage === 1 ? tests2 :
        currentPage === 2 ? testsGeneral :
        currentPage === 3 ? practiceTests :
        practiceGeneralTests;

    const isTestPage = (
        location.pathname.startsWith('/reading/') ||
        location.pathname.startsWith('/new-reading/') ||
        location.pathname.startsWith('/listening/') ||
        location.pathname.startsWith('/new-listening/')
    );

    return (
        <div className="App">
            {!isTestPage && <Header />}
            {!isTestPage && (
                <nav className="tab-nav">
                    <button
                        className={`tab-btn${currentPage === 0 ? ' active' : ''}`}
                        onClick={() => setCurrentPage(0)}
                    >
                        CAM Reading (Academic)
                    </button>
                    <button
                        className={`tab-btn${currentPage === 1 ? ' active' : ''}`}
                        onClick={() => setCurrentPage(1)}
                    >
                        CAM Listening
                    </button>
                    <button
                        className={`tab-btn${currentPage === 2 ? ' active' : ''}`}
                        onClick={() => setCurrentPage(2)}
                    >
                        Reading (General)
                    </button>
                    <button
                        className={`tab-btn${currentPage === 3 ? ' active' : ''}`}
                        onClick={() => setCurrentPage(3)}
                    >
                        <span>Practice Reading (Academic)</span>
                        <span className="tab-badge">AI</span>
                    </button>
                    <button
                        className={`tab-btn${currentPage === 4 ? ' active' : ''}`}
                        onClick={() => setCurrentPage(4)}
                    >
                        <span>Practice Reading (General)</span>
                        <span className="tab-badge">AI</span>
                    </button>
                </nav>
            )}
            <Routes>
                <Route path="/" element={
                    <Home tests={currentTests} storageScope={currentScope} />
                } />
                <Route path="/reading/:id/:title" element={<ReadingPassage />} />
                <Route path="/new-reading/:id/:title" element={<NewReadingPassage />} />
                <Route path="/listening/:id/:title" element={<ListeningPassage />} />
                <Route path="/new-listening/:id/:title" element={<NewListeningPassage />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
