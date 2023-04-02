import './Events.scss'
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import Flip from 'react-reveal/Flip';
const Offre = ({ storedTheme, setStoredTheme, ...rest }) => {
  const { t } = useTranslation();

  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    gr: { label: "Français", dir: "ltr", active: false },
  };

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const setDark = () => {
    setStoredTheme("dark");
    localStorage.setItem("theme", "dark");
    //document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    setStoredTheme("light");
    localStorage.setItem("theme", "light");
    //document.documentElement.setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (storedTheme === "light") {
      setDark();
    } else {
      setLight();
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", storedTheme);
  }, []);




  return(
    
  <section id='offres' className={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#161616" }
      : { backgroundColor: "#eff1f2" }
  }>
    <Fade right>
    
  <section className='events' style={
    storedTheme === "dark"
      ? { backgroundColor: "#161616" }
      : { backgroundColor: "#eff1f2" }
  }>
    <div class={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#161616" }
      : { backgroundColor: "#eff1f2" }
  }>
		<h2>{t("offres")}</h2>
		<h2>{t("offres")}</h2>
	 </div>
  </section>
  </Fade>
  <Fade right>
   <main>
  

   <div class="container-fluid">
    <div class="container">
      <div class="row">
        
        <div class="col-sm-4">
          <div class="card2 text-center">
            <div class="title">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
              <h2>Basic</h2>
            </div>
            <div class="price">
              <h4><sup>TND</sup>Price</h4>
            </div>
            <div class="option">
              <ul>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-times" aria-hidden="true"></i> Something </li>
              </ul>
            </div>
            <a href="#">Order Now </a>
          </div>

        </div>
        
     

        <div class="col-sm-4">
          <div class="card2 text-center">
            <div class="title">
              <i class="fa fa-plane" aria-hidden="true"></i>
              <h2>Standard</h2>
            </div>
            <div class="price">
              <h4><sup>TND</sup>Price</h4>
            </div>
            <div class="option">
              <ul>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-times" aria-hidden="true"></i> Something </li>
              </ul>
            </div>
            <a href="#">Order Now </a>
          </div>
        </div>
    

        <div class="col-sm-4">
          <div class="card2 text-center">
            <div class="title">
              <i class="fa fa-rocket" aria-hidden="true"></i>
              <h2>Premium</h2>
            </div>
            <div class="price">
              <h4><sup>TND</sup>Price</h4>
            </div>
            <div class="option">
              <ul>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              <li> <i class="fa fa-check" aria-hidden="true"></i> Something </li>
              </ul>
            </div>
            <a href="#">Order Now </a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
 </main>
 
 </Fade>
 </section>
 
  )
}
export default Offre;
