import './Events.scss'
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";


const Contact = ({ storedTheme, setStoredTheme, ...rest }) => {
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
  <section id='contact' className={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
    

  <section className='events' style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
    <div class={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
		<h2>Contact</h2>
		<h2>Contact</h2>
	 </div>
  </section>

   <main>
   
   </main>
 </section>
  )
}
export default Contact;
