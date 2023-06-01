import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Fade from 'react-reveal/Fade';
import "./index.scss"
const Footer = ({ storedTheme, setStoredTheme, ...rest }) => {
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


  return (
  
      <Container className={storedTheme} style={
        storedTheme === "dark"
          ? { backgroundColor: "#161616" }
          : { backgroundColor: "#eff1f2" }
      }>
        <Fade bottom>
      <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4 style={{color:"#EF5B0C"}}>{t("find_us")}</h4>
                                <span  style={
                              storedTheme === "dark"
                                ? { color: "white" }
                                : { color:"black" }
                            }>Faculté des Sciences de Bizerte</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                            <h4 style={{color:"#EF5B0C"}}>{t("call_us")}</h4>
                                <span  style={
                              storedTheme === "dark"
                                ? { color: "white" }
                                : { color:"black" }
                            }>+216 95 215 979</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                            <h4 style={{color:"#EF5B0C"}}>{t("mail_us")}</h4>
                                <span  style={
                              storedTheme === "dark"
                                ? { color: "white" }
                                : { color:"black" }
                            }>contact@fablab-fsb.tn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={Logo} class="img-fluid" alt="logo" style={{width:"160px"}}/></a>
                            </div>
                            <div class="footer-text">
                                <p style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"start" }
                                : { color:"black",textAlign:"start"  }
                            }>{t("desc_footer")}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                            <h3 style={{color:"#EF5B0C"}}>{t("links")}</h3>
                            </div>
                            <ul>
                                <li><a style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"start" }
                                : { color:"black",textAlign:"start"  }
                            } href="/">Home</a></li>
                                <li><a style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"start" }
                                : { color:"black",textAlign:"start"  }
                            } href="#About">{t("about")}</a></li>
                                <li><a style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"start" }
                                : { color:"black",textAlign:"start"  }
                            } href="#events">{t("Events")}</a></li>
                                <li><a style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"start" }
                                : { color:"black",textAlign:"start"  }
                            } href="#team">{t("prof")}</a></li>
                                
                                <li><a style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"start" }
                                : { color:"black",textAlign:"start"  }
                            } href="#contact">{t("contact")} </a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                            <h3 style={{color:"#EF5B0C"}}>{t("follow")}</h3>
                            </div>
                            
                          
                            <div className="social-container">
                              <ul className="social-icons">
                               <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                               <li><a href="https://www.facebook.com/FabLab.PAQ.4C.FSBizerte" target="_blank"><i className="fa fa-facebook"></i></a></li>
                               <li><a href="https://www.linkedin.com/company/fablab-fsb/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                               
                              </ul>
                             </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Container >
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="text-center">
                        <div class="copyright-text">
                            <p style={
                              storedTheme === "dark"
                                ? { color: "white",textAlign:"center" }
                                : { color:"black",textAlign:"center"  }
                            }>{t("copyright")}<a style={{fontSize:"18px"}} href="https://aymenguedri.me"> Aymen Guedri</a></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </Container>
    </footer>
    </Fade>
    </Container> 
  )
}

export default Footer;

const Container=styled.div`

ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
position: relative;
}
.footer-cta {
border-bottom: 1px solid #373636;
}
.single-cta i {
color: #ff5e14;
font-size: 30px;
float: left;
margin-top: 8px;
}
.cta-text {
padding-left: 15px;
display: inline-block;
}
.cta-text h4 {
color: #fff;
font-size: 20px;
font-weight: 600;
margin-bottom: 2px;
}
.cta-text span {
color: #757575;
font-size: 15px;
}
.footer-content {
position: relative;
z-index: 2;
}
.footer-pattern img {
position: absolute;
top: 0;
left: 0;
height: 330px;
background-size: cover;
background-position: 100% 100%;
}
.footer-logo {
margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
margin-bottom: 14px;
font-size: 14px;
    color: #7e7e7e;
line-height: 28px;
}


.footer-widget-heading h3 {
color: #fff;
font-size: 20px;
font-weight: 600;
margin-bottom: 40px;
position: relative;
}
.footer-widget-heading h3::before {
content: "";
position: absolute;
left: 0;
bottom: -15px;
height: 2px;
width: 50px;
background: #ff5e14;
}
.footer-widget ul li {
display: inline-block;
float: left;
width: 50%;
margin-bottom: 12px;
}


.copyright-area{

padding: 25px 0;
}
.copyright-text p {
margin: 0;
font-size: 14px;
color: #878787;
}
.copyright-text p a{
color: #ff5e14;
}
.footer-menu li {
display: inline-block;
margin-left: 20px;
}
.footer-menu li:hover a{
color: #ff5e14;
}
.footer-menu li a {
font-size: 14px;
color: #878787;
}
`
