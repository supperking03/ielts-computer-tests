// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingPassage from './components/ReadingPassage';
import { tests } from './components/data';
import logo from './logo.svg'; // Import your logo
import ListeningPassage from './components/ListeningPassage';
import './Menu.css';

function Header() {
  return (
    <header className="app-header">
        <img src={`https://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png`} alt="Website Logo" className="logo" />
        <h1>The Best IELTS Practice Test On Computer</h1>
        <p>Real practise, Real score</p>
    </header>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {!location.pathname.startsWith('/reading/') && <Header />}
      {!location.pathname.startsWith('/reading/') && <div className="menu">
          <Link to="/">Reading</Link>
          <Link to="/listening">Listening</Link>
      </div>}
      <Routes>
          <Route path="/" element={<Home tests={tests} />} />
          <Route path="/reading/:id" element={<ReadingPassage />} />
          <Route path="/listening" element={<ListeningPassage />} />
          {/* ... other routes */}
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
