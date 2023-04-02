import styles from './Events.scss'
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './Event.scss'
import slider from 'react-slick'


const Events = ({ storedTheme, setStoredTheme, ...rest }) => {
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


  

  const slidesArray = [
    {
      url: "/images/event1.jpg",

      // (Optional) Set if you want to add any content on your slide
     
    },
    {
      url: "/images/event2.jpg",
      
    },
    {
      url: "/images/event1.jpg",
   
    },
  ];

  let settings ={
        
    Infinite:true,
    speed:700,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
}
  return(
    
  <section id='events' className={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
  <section className='events' style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
    <Fade bottom>
    
    <div class={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
		<h2>{t("Event")}</h2>
		<h2>{t("Event")}</h2>
	 </div>
   </Fade>
  </section>

   <Container >
  

<div class="container_Event">


<div class="book">
  <div class="gap"></div>
  <div class="pages">
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
    <div class="page"></div>
  </div>
  <div class="flips">
    <div class="flip flip1">
      <div class="flip flip2">
        <div class="flip flip3">
          <div class="flip flip4">
            <div class="flip flip5">
              <div class="flip flip6">
                <div class="flip flip7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





</div>



 </Container>
 </section>
  )
}

export default Events;

const Container =styled.div`
grid-area:main;


`;

const Carousel=styled(slider)`

padding:40px;
    overflow:hidden ;

}


`

const Wrap=styled.div`
border-radius:20px;
cursor:pointer;
  img{
      border: 3px solid #00d2f7;
      border-radius:20px;
      width:100%;
      height:400px;
      object-fit: fill;
      transition-duration:1000ms;
     
  }

  @media screen and (max-width: 600px) {
    img{
      object-fit: contain;
      height:217px;
      width: 100%;    
      object-position: 40% 100%;
      
  }
`         