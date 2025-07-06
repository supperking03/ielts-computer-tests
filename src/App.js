// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingPassage from './components/ReadingPassage';
import NewReadingPassage from './components/NewReadingPassage';
import { tests } from './components/data';
import { tests as tests2 } from './components/dataLis';
import ListeningPassage from './components/ListeningPassage';
import './Menu.css';
import './App.css';
import { Helmet } from 'react-helmet';
import WritingPassage from './components/WritingPassage'
import { FacebookProvider, Comments } from 'react-facebook';



function Header() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div>
      <Helmet>
        <title>The Best IELTS Practice Test On Computer</title>
        <meta name="description" content="Real practise, Real score" />
      </Helmet>
      <header className="App-header">
        <img src={`https://genk.mediacdn.vn/k:thumb_w/640/2015/screen-shot-2015-07-30-at-2-31-57-pm-1438334096188/cau-chuyen-ve-nguoi-tao-ra-chu-ech-xanh-than-thanh.png`} alt="Website Logo" className="App-logo" />
        <h1>The Best IELTS Practice Test On Computer</h1>
        <a>Real practise, Real score</a>
        <button onClick={() => setPopupVisible(true)}>Why We Are The Best?</button>
      </header>

      {isPopupVisible && (
        <div className="popup-container">
          {currentSlide === 4 &&
            <button style={{ fontSize: "20px" }} onClick={() => {
              setPopupVisible(false)
              setCurrentSlide(1)
            }}>Close</button>}
          {currentSlide === 1 && <img style={{ width: "80vh", height: "80vh", marginBottom: "50px" }} src={"https://lh3.googleusercontent.com/pw/AIL4fc_cFU0zPVJFPuZ3j1r1des9XTFivxskR-6JjP1XIE1ji_seac3xJ86g3tAP8HVH3s8MochswwivS9-7R6zlKy_DtDmzdUFvZnmUc2xD300sxn_HHZzEKbdL6DGE_yTJa2fTH0KTd_zvZpN1qXGCBCyM=w1080-h1080-s-no"} alt="Highlight pen sample" />}
          {currentSlide === 2 && <img style={{ width: "80vh", height: "80vh", marginBottom: "50px" }} src={"https://lh3.googleusercontent.com/pw/AIL4fc8HY0RRGI6EiXsMkXQiHUnD5zrFSnb9Y72czkxhPJOy6S4kndPyu2wV93bWj5hbCaz9taLq3jg1iU7yNim51ML4dhRWXSjFrvWnXFAK3efXnzu-VDAZfYnEGcq3WCGfDRlcOdyyP36T7uR6FFwo49HI=w1080-h1080-s-no"} alt="Highlight pen sample" />}
          {currentSlide === 3 && <img style={{ width: "80vh", height: "80vh", marginBottom: "50px" }} src={"https://lh3.googleusercontent.com/pw/AIL4fc80-rjAWnpw8e2FYkO-ffdTAoCEL-nhh1sb4Qm2owC3gJjbUEyqjkxrAWKljVJfLx5p5u0CKSqHfrNsUy_2ZWq_hFlNmmd3l5FYulk2b9A6QKsJjua2xDCH300Vx4JEPexKgIQhwBbYZD9geGVFJElh=w1080-h1080-s-no"} alt="Highlight pen sample" />}
          {currentSlide === 4 && <img style={{ width: "80vh", height: "80vh", marginBottom: "50px" }} src={"https://lh3.googleusercontent.com/pw/AIL4fc91eiz0X0DM22k0ZFik3ul3bpWtzCmc5vAhm91ofg_Z6o0BXLnd-RRb3ITw1hbHZUaM7lfUpXdkHaSrdw_PCStt4MJsfDH03NESIURzdp_2D4xn_7pf_PHEbEuB2xou-5L3Jt1IYqBR1MRuackweiaL=w1080-h1080-s-no"} alt="Highlight pen sample" />}
          {currentSlide != 4 && <button style={{ fontSize: "20px" }} onClick={() => setCurrentSlide(currentSlide + 1)}>Next slide {' >'} </button>}
        </div>
      )}
    </div>
  );
}


function AppContent() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App">
      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && (!location.pathname.startsWith('/writing/')) && <Header />}
      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && (!location.pathname.startsWith('/writing/')) && <div className="menu">
        <Link className="Navigator" onClick={() => { setCurrentPage(0) }}>Reading</Link>
        <Link className="Navigator" onClick={() => { setCurrentPage(1) }}>Listening</Link>
        <Link className="Navigator" onClick={() => { setCurrentPage(2) }} style={{  }}>Writing Task 2 👑 (beta)</Link>
      </div>}
      {(currentPage == 0 || currentPage == 1) &&
        <Routes>
          <Route path="/" element={<Home tests={currentPage == 0 ? tests : tests2} />} />
          <Route path="/reading/:id/:title" element={<ReadingPassage />} />
          <Route path="/new-reading/:id/:title" element={<NewReadingPassage />} />
          <Route path="/listening/:id/:title" element={<ListeningPassage />} />
          {/* <Route path="/writing/" element={<WritingPassage />} /> */}
          {/* ... other routes */}
        </Routes>
      }
      {currentPage == 2 && <WritingPassage />}


      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && (!location.pathname.startsWith('/writing/')) && <div>
        <h3 style={{ color: 'InfoText' }}>
          If you find this website useful, leave a good comment. Thanks !!!!
        </h3>
        <FacebookProvider appId="729594355859080">
          <Comments href="https://ieltscomputertests.com/" />
        </FacebookProvider>
      </div>}
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
