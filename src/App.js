// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingPassage from './components/ReadingPassage';
import { tests } from './components/data';
import { tests as tests2 } from './components/dataLis';
import ListeningPassage from './components/ListeningPassage';
import './Menu.css';
import './App.css';
import { Helmet } from 'react-helmet';



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
            <button style={{fontSize: "20px"}} onClick={() => {
                setPopupVisible(false)
                setCurrentSlide(1)
              }}>Close</button>}
            {currentSlide === 1 && <img style={{width: "80vh", height: "80vh", marginBottom: "50px"}} src={"https://lh3.googleusercontent.com/pw/AIL4fc9Kl2oFVgJlN85dUA3F_azte0Qs00-VayxHMiYqhyS3nxA3jXCx4JKdUhTOWy8fW80_TW6ToWyDdbKPr6qnmIU_AWz_FP0wHmQDvtDdbCgpYuC_mI8vTiaOeQpYCCCw1BlOQtI6ReQcYBuw3QWuqoJIodqBnmrnsLPflDW-0i_NAw8o2gySnusjBwoQm3xRXn03u4JAZIW-qdy_SDngJkMBXBlFd7058QXaanJSf8zlEDDrzAlpXaTb7s68jzzzTFeLn8IV9ApOziaaIyIKLtMOq70r_Rzqk7l8_R9rH9kqwMSFUKfmV8nTv_qndgKLfvSixvqpUBmZDdMx7kDnLXoreoZjI6SSp_Mde0CZZdBASFBf5kdyhEYnMhNEP_mojLHYu9ep61ZKsGKvRFSt6CYd4bgIuWXJpkajixmpyeAhEQ-51USZh1k6fYSuudE8wAA-7WnXAyOp9c3Y84g1eJ-rtd77sFIx-NwvR4eeUxYVApw6Ua5SZaPG-git7fdGBgzO-FNt1cOws6Wo3vxPhlY6yRG_oF-KWMmnPWezjIglN5SrsJN1Gn2T41TnxNcUIPL-JcUMxbJZ3TvhgiPn5LjMi5TCfjRYiFiS1-ZPUvsYkfcteTZhxr6GwkCyUywiNi8LK_-s0T9blJSzvVZ2xshgCGSkaZ9g2IS_Nf-wXkNDRMjp2SOUcTFAqz99EAIhzXp8p6vPyIvMserywVZOixCb8NovYnh8WO30hF4c79lc2OBP5iB3vtD6wXCuBf5wyW58OkasIAlxk9opyaiquO6uoc4qED7OfEztNAVJQuztEz6io2k9oJtlMlGY5rmUbtHtDfiPrEc6YM94aBzRKc94P8M7T227dkbBuCb4tB12hZ_WjlyONT5m8UG3DnsJLP_PUhfZ9Ssm30gxL5kSIffsPuYXHqzfRejqduCnKQG8Z17D2JDjCUkKOvVuX-mRTl4E23T0gpGLVV5blwpXEoz_fElbrmIs=w1080-h1080-s-no?authuser=0"} alt="Highlight pen sample" />}
            {currentSlide === 2 && <img style={{width: "80vh", height: "80vh", marginBottom: "50px"}} src={"https://lh3.googleusercontent.com/pw/AIL4fc81lMZNS_ux34tD0Z4EOacsuOdGiSqKPI7bmV3VOz-wI1OacS3ujIEdi2mKIOOMtXNFnQBINSxg-BxBXwAjOj2iKK3nzoaeGT5kqFNQSiCM5rw__TKz8WFzCWklPYmwsehb-dl5InHin2_n2u0vZg4HG466vU22rddLtpBPxdZmBUSznpbD9BTCt8-1PjaZQREOShTjPPivzujsAOtICkkO-txc2kx4roA53SSTSyiON-EeWZhOH02K3dd4-1WY9b01g1lCMVXbQuNkV8lMEIzqmsYuhwlGBingFS3o-QmbFyZApiI6nBqJX5F_TEVDqgffGIJCXv-_kK_Ah9vHRalD-25fGGUyCrqws5qSugc6batpDr8KVvSG4O0rmJbvZT9PmoACOWCFVLp6IKC9QsqkeaxmOgOICwzdZmFd8a84qOE0_XyEpp_jk0_6SBBEw_95vqOCsHKLOL_mTv1YTMIUbQ1E7Mpsa71gyQsc-v_1uwziOt7_CarmN_XqpK6fYWGV0ntkV4IqxjsqLbERHCahX5r4bsJ1i2if-4_lojik29AkBlPicAPkZynNafwsyB-RAwed8IJDOLZrMBHjLnGsRvpMieIGROtHzN6qS3b-0Kv6oec4OTpobZ5-zNyQOmU4iTJfbYLQA8hzvivUUNlV9UWDf0zjZpol-vgpvyyh4yW8Tp7iJsD0PK9BhjwwoSA1dVupKC0m15gwXqHemv28x0VAz32722oUGpK01G8sXeZ0npzxwGCxGdXTAqKx8iVarAZ6Lb_MhJiMnmsXAThp1un2vgn70tNwTeUAFYczm-H3DUXvdgpvdS_G_ZxhEQGy4tVCzZg1jO8RluPC5FPKeLQ_sDYPTFMGcssTAyZXGEbtr592ZxfnXHNTBPRMOQtQQCQItH47OKuNqBjCHIsJm96sEWad0Y6PPiSmMcNkUlW2Qmln09KohCzSc3uAuqIy0gCmqUKfhUvm3ausb2hUw5rxNuOi=w1080-h1080-s-no?authuser=0"} alt="Highlight pen sample" />}
            {currentSlide === 3 && <img style={{width: "80vh", height: "80vh", marginBottom: "50px"}} src={"https://lh3.googleusercontent.com/pw/AIL4fc_bO8WrUzkd6_iltI1ivC8VHnqXyRkilkPaMSAZTrWO9fZ8_I_7xU88A2jn7JOyTOa5kwC5C9FITc8lwxcNIYRKRbNMZSGV9IUJS-xzAZ_q6PDbR4chhmRVrNV_nmd5spFqddz5IzSvpF4SquLlPSHyiSYuWgwum4ESnoZcq4NDrjmCnpmliERHqOjm3ck6m5aUT4SCCuaRInJSYO9D4LhxbN9_Q1ukazTyanmBw4U1TcvBPd_ayzybFeILbdi5QRmOQwF69EtD7uif8Xx1-BQi4EkV9Ir9i4CRksHb8xYPFtQ7IBcekoXTXWrk6Hrz24bm6DI3-xsqqfYgXJeS2flEXF98PGQ4CVXGJitcVMHwbm3cjxdFI1OXURLy2zBPofVXvRair4G0zoBKC5g2lrWflHn27qTkMw70a6qJroMM3MC4T5KgYDH3eDfSJBaFK3E-ZHiz49aTj-NLw9G8F1FeF7tdbjZh4YbWf2qF_p04t-PO0L8XMhGYgl53us_bsqS_y9RQuEcv8FN6T_Vvbe9-aLBN4tGbiFGEJ46wnlw9_kdDIH0pS2S4zy59HKGV1sauku6ZEDeLsSE7I7k-YSA-Qe9OsQP1uHHeN3sSHWTwysek_30BCrH06BeqbBjLmy679FKxPQzZdHkOY9LGE7zHBEAs1GjzyBysd-J6Xn_Yu0O6Mr6OvPyV3zrDoaQjpDcZMqZvcG07nHA-13iui0d0XiGupFTi60xgp1UqDm9teva4tO9pX-Dj6vc6T0aBWU3HehymoazMmilMbsMGVEBOcZT5AsDBl2NNWmp8FYj70EecTrTCv0SZDQnPXplvmlhwBG_8fkRNspUwTSobvgF3yxg2SeVQU_nnX0IbwJfqeaOm4hb8ZCYO_cX3VEnkpvx0st_XyJXkUtHf6fJxP-AwcDNpuOg6KoZ0mEVPeKNzXI9LCIkzIVt7yC6DlEdFEvFMHvOK3Aoyal0WHV4TPChkVCCsZWR0=w1080-h1080-s-no?authuser=0"} alt="Highlight pen sample" />}
            {currentSlide === 4 && <img style={{width: "80vh", height: "80vh", marginBottom: "50px"}} src={"https://lh3.googleusercontent.com/pw/AIL4fc_quFn3J3IkOL_nC1KTnLr0HH7LVitlPREgK6dnxoQkOX-uZFP_Y53e50GuIiE_q3H42fWAyKpHFoq1lPOjEbcmiQnibAHuoWi1rGT_uyP-YH_aLlmj_IWm5VM3mnzpExQYL_SfvCk--805waFDZ88IPH3TRXLWQZeR6EMVut19fBWwxv0Lpb5-bgpphqpNAnZ3pzt-_khO_issZmlXjPcFyemwUexGFvn6uSGKErmVTWQgJTKDAmcTXsCWYkoW6Fb9bWJ4w1azKUP65vS0QLgDs1mb1lwcQ4guaNLzKMOgz8SixBVzAKksmL2cqnIuspxZzbXhLJBvaGLSJDa4fFnwzr3ACavwBH663Pu55b7crOvrhy99SUgfIQHriUgta_NNxayxhALF0RnRI2PxU3a7h-shR-TPC2AwY0C1Xr__draZOpT80XWeahhE9E1BJdO1J-fGtHCgVDYjtOKv26cP5nTpB_65hOQ1OQ4t0zuWTYewFmpo2nJMJ6e8wuKpz9mRmV-5c_vxfZZdbkwg3VgWyeHQ1NtGpggnBlq6CpQCbHymbnCiCs8rh5VqjC76dZ2VWZaEbIf2o7btdWA-Ut1b4mA2JAfpN0ueYp63haOENP_Oo7ihlUiQvQ_yozPYHMLl6DHVZAHPNeS3K-MOdN1Dl-gJyEHTx0PeDwQyYrWCZnCU63exKa3dt7AM8g7RpCXcZEbyZNrnFfnC3NRb9VmrowLjhCwz6D8OawgRKHeZhE7r5UO7qUWUo9F58iOxx19fGDMUCKirOpoaTrsRDMg4EvKuxRV7yvWmYgUxK2ToblmuCCcCG9yyrqp4ZP6Z0y_fVoL6ObUs8rg4iQhW6_IxOt7y4LCA4SZp4vgcJ9HWMkFwtLTpc7JR7p1lPDmH9GK580u-v_VeQlwjdTgfVhJ9Y_xupNzs-51brtpHCZDrimo66vgRN9h3YddQhgYdOIQ15CswVqmSelH34jhHp1pQVWrCAlR_=w1080-h1080-s-no?authuser=0"} alt="Highlight pen sample" />}
            {currentSlide != 4 && <button style={{fontSize: "20px"}} onClick={() => setCurrentSlide(currentSlide + 1)}>Next slide {' >'} </button>}
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
      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && <Header />}
      {(!location.pathname.startsWith('/reading/') && !location.pathname.startsWith('/listening/')) && <div className="menu">
          <Link className="Navigator" onClick={()=>{setCurrentPage(0)}}>Reading</Link>
          <Link className="Navigator" onClick={()=>{setCurrentPage(1)}}>Listening</Link>
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
