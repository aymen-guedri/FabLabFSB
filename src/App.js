import "./App.css";
import styles from "./style";
import React, { useState, useEffect } from "react";

import { Events, Team, CardDeal, Offre, Navbar, Stats, Partenariat, Hero } from "./Components/index.js";


import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer/index"
import Contact from "./Components/ContactForm/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [storedTheme, setStoredTheme] = useState(
    localStorage.getItem("theme") === "dark" ||
      (localStorage.getItem("theme") === null && prefersDark)
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const functionsScript = document.createElement("script");
    functionsScript.src = "js/functions.js";
    functionsScript.async = false;

    document.body.appendChild(functionsScript);

    return () => {
      document.body.removeChild(functionsScript);
    };
  }, []);

  const lightStyle =
    ".heading-text.heading-section > h2::before { background-color: #ff8b2a !important}";
  const darkStyle =
    ".heading-text.heading-section > h2::before { background-color: #adab07 !important} .item-link {color: #adab07} .item-link:hover {color: #adab07} .post-item .post-item-description > h2, .post-item .post-item-description > h2 > a {color: #fff !important} .heading-text.heading-line h1::before, .heading-text.heading-line h2::before, .heading-text.heading-line h3::before, .heading-text.heading-line h4::before, .heading-text.heading-line h5::before, .heading-text.heading-line h6::before { background-color: #adab07 !important}";







    (function(d, m){
      var kommunicateSettings = 
          {"appId":"58684b090878f5375ef61651806b5a0b","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    

  return (
    <>
      <style>{storedTheme == "dark" ? darkStyle : lightStyle}</style>

      <Router>
        <Header
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Header>
      </Router>

      <div className="bg-dark w-full overflow-hidden">
      <Router>
      <div className={`bg-dark ${styles.flexStart}`}>
        
        <Hero className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Hero>
      </div>
      </Router>

      <Router>
      <div >
        <Stats className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Stats>
      </div>
      </Router>

      <Router>
      <div >
        <Events className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Events>
      </div>
      </Router>

      <Router>
      <div >
        <Offre className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Offre>
      </div>
      </Router>

      <Router>
      <div >
        <Team className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Team>
      </div>
      </Router>

      <Router>
      <div >
        <Partenariat className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Partenariat>
      </div>
      </Router>


      <Router>
      <div >
        <Contact className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Contact>
      </div>
      </Router>


      <Router>
      <div >
        <Footer className={` bg-dark`}
          storedTheme={storedTheme}
          setStoredTheme={setStoredTheme}
        ></Footer>
      </div>
      </Router>
      
      


      
    


      </div>
      

      {/* <InspiroSlider></InspiroSlider> */}

      {/* <OurActivities
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></OurActivities> */}
      {/* <OurClients
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></OurClients> */}

      {/*<Timeline></Timeline>
      <CallToAction></CallToAction>
      */}
    </>
  );
}

export default App;
