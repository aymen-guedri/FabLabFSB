import './Events.scss'
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/Ucar.png";
import Logo3 from "../assets/images/4C.png";
import PAQ from "../assets/images/PAQ.png";
import Fsb from "../assets/images/Fsb.png";
import Tn from "../assets/images/tounes.png";

const Partenariat = ({ storedTheme, setStoredTheme, ...rest }) => {
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
  <section className='fsbMarquee' style={
    storedTheme === "dark"
      ? { backgroundColor: "#161616" }
      : { backgroundColor: "#eff1f2" }
  }>
    <Fade bottom>
<div class="Marquees">
	<div class="Marquee FirstRow">
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Logo2} style={{width:"130px"}}/></div>
		<div class="marquee Item"><img src={Logo3} style={{width:"90px"}}/></div>
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Tn} style={{width:"80px"}}/></div>
		<div class="marquee Item"><img src={PAQ} style={{width:"110px"}}/></div>
		<div class="marquee Item"><img src={Fsb} style={{width:"100px"}}/></div>
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Logo2} style={{width:"130px"}}/></div>
		<div class="marquee Item"><img src={Logo3} style={{width:"90px"}}/></div>
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Tn} style={{width:"80px"}}/></div>
		<div class="marquee Item"><img src={PAQ} style={{width:"110px"}}/></div>
		<div class="marquee Item"><img src={Fsb} style={{width:"100px"}}/></div>
	
		
	</div>
	<div class="Marquee SecondRow">
	<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Logo2} style={{width:"130px"}}/></div>
		<div class="marquee Item"><img src={Logo3} style={{width:"90px"}}/></div>
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Tn} style={{width:"80px"}}/></div>
		<div class="marquee Item"><img src={PAQ} style={{width:"110px"}}/></div>
		<div class="marquee Item"><img src={Fsb} style={{width:"100px"}}/></div>
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Logo2} style={{width:"130px"}}/></div>
		<div class="marquee Item"><img src={Logo3} style={{width:"90px"}}/></div>
		<div class="marquee Item"><img src={Logo} style={{width:"60px"}}/></div>
		<div class="marquee Item"><img src={Tn} style={{width:"80px"}}/></div>
		<div class="marquee Item"><img src={PAQ} style={{width:"110px"}}/></div>
		<div class="marquee Item"><img src={Fsb} style={{width:"100px"}}/></div>
		
	</div>
  
</div>
</Fade>
</section>
  )
}
export default Partenariat;
