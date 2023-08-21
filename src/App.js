// App.js
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingPassage from './components/ReadingPassage';
import { tests } from './components/data';
import { tests as tests2 } from './components/dataLis';
import logo from './logo.svg'; // Import your logo
import ListeningPassage from './components/ListeningPassage';
import './Menu.css';
import { Helmet } from 'react-helmet';



function Header() {
  return (
    <div>
      <Helmet>
        <title>The Best IELTS Practice Test On Computer</title>
        <meta name="description" content="Real practise, Real score" />
      </Helmet>
      <header className="app-header">
        <img src={`https://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png`} alt="Website Logo" className="logo" />
        <h1>The Best IELTS Practice Test On Computer</h1>
        <p>Real practise, Real score</p>
      </header>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(0);  

  return (
    <div className="App">
      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && <Header />}
      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && <div className="menu">
          <Link onClick={()=>{setCurrentPage(0)}}>Reading</Link>
          <Link onClick={()=>{setCurrentPage(1)}}>Listening</Link>
      </div>}
      <Routes>
          <Route path="/" element={<Home tests={currentPage==0 ? tests : tests2} />} />
          <Route path="/reading/:id/:title" element={<ReadingPassage/>} />
          <Route path="/listening/:id/:title" element={<ListeningPassage />} />
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
