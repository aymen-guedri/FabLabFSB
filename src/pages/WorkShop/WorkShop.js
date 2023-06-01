import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import Header from '../../components/User Screen/Header';
import './workshop.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import styled from 'styled-components'
function WorkShop() {
  const { t } = useTranslation();

  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    fr: { label: "Français", dir: "ltr", active: false },
  };

  useEffect(() => {
    var swiper = new Swiper('.blog-slider', {
      direction: 'vertical', // Set the direction to vertical
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className='Home'>
      <Header />

      <div className='blog-slider'>
        <div className='blog-slider__wrp swiper-wrapper'>
          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='/1.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 Avril 2023</span>
              <div className='blog-slider__title'>Bootcamp of the FSB'INNOV 1.0 Competition </div>
              <div className='blog-slider__text'>
              🚀 J-1️⃣ Bootcamp of the FSB'INNOV 1.0 Competition dedicated to the students of the Faculté des Sciences de Bizerte organized as part of the activities of the PAQ-DGSE MIRE Project.
🚀 The Bootcamp takes place from 2️⃣6️⃣ to 2️⃣8️⃣ April 2️⃣0️⃣2️⃣3️⃣ at the Grand Amphi from 9️⃣H to 1️⃣7️⃣H.
🚀 More than 30 entrepreneurship projects compete in the semi-final on April 2️⃣8️⃣ 2️⃣0️⃣2️⃣3️⃣, the top ten projects will compete in the FSB'INNOV 1.0 Competition Final on May 5️⃣0️⃣2⃣3️⃣
🏃 ♂️ 🏃 ♀️ 🏃 Be there!! ❤️{' '}
              </div>
              <a href='https://www.4c.tn/Formation/_Details/4883' className='blog-slider__button'>
                Inscription
              </a>
            </div>
          </div>

          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='/2.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>8, 9 et 10 février 2023</span>
              <div className='blog-slider__title'>Atelier de Formation</div>
              <div className='blog-slider__text'>
              🤖En partenariat avec L'Agence Universitaire de la Francophonie, le Centre 4C-FS Bizerte organise un atelier de Formation  "FabLab Manager" dans le cadre du projet PAQ-4C de la Faculté des Sciences de Bizerte  et ce les 8, 9 et 10 février 2023 au Coworking Space du FabLab FSB.
🤖Nombre de places : 12 (Membres 4C-FSBizerte et du comité de pilotage du projet PAQ-4C, Enseignants en Digitalisation et prototypage, Référent Pôle Etudiant Entrepreneur de Carthage - PEEC-FSB et administratifs du FabLab-FSB).
🤖Formateurs : M. Mohamed Ali Trabelsi et Rihab Sahbeni - Association Jeunes Science de Tunisie  (AJST) 
🤖Inscription sur la plateforme www.4c.tn  avec les comptes institutionnels 
↘️ Lien d'inscription : https://www.4c.tn/Formation/_Details/4883
#FSB
#AUF
#4C_FSBizerte
#fablab_fsb
#PEEC{' '}
              </div>
              <a href='#' className='blog-slider__button'>
                Inscription
              </a>
            </div>
          </div>

      
          

        </div>
        <div className='blog-slider__pagination' />
      </div>
      <Footer>
      <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <a class="footer-logo-link" href="/">
              <span class="hidden-link-text">LOGO</span>
              <img src='/logo.png' alt='logo' width="120px" />
            </a>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name">{t('get_started')} </h2>
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">{t('about_fablab_content')} </a>
              </li>
             
              
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> FabLab FSB</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">{t('reservation')}</a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">{t('guide')}</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">{t('offers')}</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name">{t('link')} </h2>
            <ul id="menu-legal" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="#">FabLab Forum</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Location</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.8244228667863!2d9.878045414580827!3d37.26698184898558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31fcabaf83cd1%3A0x2e1cd92f29a2fa27!2sFacult%C3%A9%20des%20Sciences%20de%20Bizerte!5e1!3m2!1sfr!2stn!4v1679935896793!5m2!1sfr!2stn" width="400" height="300" style={{border:"0",width:"360px",height:"250px",borderRadius:"20px"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>              </li> 
            </ul>
          </div>
        </div>
       
        <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
            <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
          </svg>
          <a class="footer-social-link linkedin" href="https://www.linkedin.com/company/fablab-fsb/?original_referer=https%3A%2F%2Ffablab-fsb.vercel.app%2F" target="_blank">
            <span class="hidden-link-text">Linkedin</span>
            <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30">
              <path class="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
            </svg>
          </a>
          <a class="footer-social-link twitter" href="https://www.facebook.com/FabLab.PAQ.4C.FSBizerte" target="_blank">
            <span class="hidden-link-text">Facebook</span>
            <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
   <path class="footer-social-icon-path" d="M19.125 0H4.875C2.1875 0 0 2.1875 0 4.875v15.25C0 21.8125 2.1875 24 4.875 24h7.383125v-9.28125H9.1875v-3.59375h3.070625V7.230469C12.257031 4.722656 13.898438 3 16.824219 3c1.15625 0 2.148438.0859375 2.4375.125v3.40625l-1.664063.003906c-1.3125 0-1.5625.625-1.5625 1.53125v2.03125h3.125l-.40625 3.59375h-2.71875v9.28125h5.3203125c2.6875 0 4.875-2.1875 4.875-4.875V4.875C24 2.1875 21.8125 0 19.125 0z"/>
</svg>
          </a>
          <a class="footer-social-link youtube" href="#" target="_blank">
            <span class="hidden-link-text">Youtube</span>
            <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path class="footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
            </svg>
          </a>
          <a class="footer-social-link github" href="#" target="_blank">
            <span class="hidden-link-text">Github</span>
            <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path class="footer-social-icon-path" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="https://aymenguedri.me/" target="_blank"> CopyRight ©2023. {t('copyright')} Aymen Guedri </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
      </Footer>
    </div>
  );
}

export default WorkShop;


const Footer=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  
}
a {
  color: #fff;
  text-decoration: none;
}
.pg-footer {
  font-family: 'PT Sans Narrow', sans-serif;

}


.footer {
    background-color: #4A1231;
    color: #fff;
}
.footer-wave-svg {
    background-color: transparent;
    display: block;
    height: 30px;
    position: relative;
    top: -1px;
    width: 100%;
}
.footer-wave-path {
    fill: #ddf1ea;
}

.footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 450px;
    position: relative;
}

.footer-content-column {
    box-sizing: border-box;
    float: left;
    padding-left: 65px;
    padding-right: 25px;
    width: 100%;
    color: #fff;
}

.footer-content-column ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-logo-link {
    display: inline-block;
    background-color:white;
    border-radius:20px;
}
.footer-menu {
    margin-top: 30px;
}

.footer-menu-name {
    color: Orange;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: .1em;
    line-height: 8px;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
}
.footer-menu-list {
    list-style: none;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 13px;
    padding-left: 0;
}
.footer-menu-list li {
    margin-top: 5px;
}

.footer-call-to-action-description {
    color: #fffff2;
    margin-top: 10px;
    margin-bottom: 20px;
}
.footer-call-to-action-button:hover {
    background-color: #fffff2;
    color: #B60669;
}
.button:last-of-type {
    margin-right: 0;
}
.footer-call-to-action-button {
    background-color: #B60669;
    border-radius: 21px;
    color: #fffff2;
    display: inline-block;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .1em;
    line-height: 18px;
    padding: 12px 30px;
    margin: 0 10px 10px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color .2s;
    cursor: pointer;
    position: relative;
}
.footer-call-to-action {
    margin-top: 30px;
}
.footer-call-to-action-title {
    color: #fffff2;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: .1em;
    line-height: 18px;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
}
.footer-call-to-action-link-wrapper {
    margin-bottom: 0;
    margin-top: 10px;
    color: #fff;
    text-decoration: none;
}
.footer-call-to-action-link-wrapper a {
    color: #fff;
    text-decoration: none;
}





.footer-social-links {
    bottom: 0;
    height: 54px;
    position: absolute;
    right: 0;
    width: 236px;
}

.footer-social-amoeba-svg {
    height: 54px;
    left: 0;
    display: block;
    position: absolute;
    top: 0;
    width: 236px;
}

.footer-social-amoeba-path {
    fill: #B60669;
}

.footer-social-link.linkedin {
    height: 26px;
    left: 3px;
    top: 11px;
    width: 26px;
}

.footer-social-link {
    display: block;
    padding: 10px;
    position: absolute;
}

.hidden-link-text {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px,1px,1px,1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
    top: 50%;
}

.footer-social-icon-svg {
    display: block;
}

.footer-social-icon-path {
    fill: #fffff2;
    transition: fill .2s;
}

.footer-social-link.twitter {
    height: 28px;
    left: 62px;
    top: 3px;
    width: 28px;
}

.footer-social-link.youtube {
    height: 24px;
    left: 123px;
    top: 12px;
    width: 24px;
}

.footer-social-link.github {
    height: 34px;
    left: 172px;
    top: 7px;
    width: 34px;
}

.footer-copyright {
    background-color: #B60669;
    color: #fff;
    padding: 15px 30px;
  text-align: center;
}

.footer-copyright-wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
}

.footer-copyright-text {
  color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 0;
    margin-top: 0;
}

.footer-copyright-link {
    color: #fff;
    text-decoration: none;
}







/* Media Query For different screens */
@media (min-width:320px) and (max-width:479px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width:480px) and (max-width:599px)  { /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width:600px) and (max-width: 800px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */

}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */

}
@media (min-width:1281px) { /* hi-res laptops and desktops */

}




@media (min-width: 760px) {
  .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 450px;
      position: relative;
  }

  .footer-wave-svg {
      height: 50px;
  }

  .footer-content-column {
      width: 24.99%;
  }
}
@media (min-width: 568px) {
  /* .footer-content-column {
      width: 49.99%;
  } */
}


`