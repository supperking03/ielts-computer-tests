// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ReadingPassage from './components/ReadingPassage';
import NewReadingPassage from './components/NewReadingPassage';
import { tests } from './components/data';
import { tests as tests2 } from './components/dataLis';
import { tests as testsGeneral } from './components/dataGeneral';
import { practiceTests } from './components/practiceTests';
import ListeningPassage from './components/ListeningPassage';
import NewListeningPassage from './components/NewListeningPassage';
import './Menu.css';
import './App.css';
import { Helmet } from 'react-helmet';

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

function Header() {
    const [showModal, setShowModal] = useState(false);

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
                    <button className="why-best-btn" onClick={() => setShowModal(true)}>
                        ★ Why We Are The Best?
                    </button>
                </div>
            </header>
            {showModal && <WhyModal onClose={() => setShowModal(false)} />}
        </>
    );
}

function AppContent() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(0);
    const currentTests =
        currentPage === 0 ? tests :
        currentPage === 1 ? tests2 :
        currentPage === 2 ? testsGeneral :
        practiceTests;

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
                        <span>Reading (Practice)</span>
                        <span className="tab-badge">newbie</span>
                    </button>
                </nav>
            )}
            <Routes>
                <Route path="/" element={
                    <Home tests={currentTests} />
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
