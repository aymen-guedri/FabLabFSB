import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./header.css";
import DarkWideLogo from "../../assets/images/fablab/light-wide-logo.png";
import DarkMobileLogo from "../../assets/images/fablab/light-wide-logo.png";
import LightWideLogo from "../../assets/images/fablab/light-wide-logo.png";
import LightMobileLogo from "../../assets/images/fablab/light-wide-logo.png";

const Header = ({ storedTheme, setStoredTheme, ...rest }) => {


  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }





  
  const { t } = useTranslation();

  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    gr: { label: "Français", dir: "ltr", active: false },
  };



  const Login2={
    en: { label: "Student", dir: "ltr", active: true },
    gr: { label: "User", dir: "ltr", active: false },
  }

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );

  const [selectedLogin, setSelectedLogin] = useState();

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
    
    <header
      id="header"
      style={
        storedTheme === "dark"
          ? { backgroundColor: "#111111",color:"#e9e8e8" }
          : { backgroundColor: "#e9e8e8",color:"#111111" }
      }
      className={storedTheme + " header-enable-fixed"}
      data-fullwidth="true"
    >
      <div className="header-inner" style={
      storedTheme === "dark"
        ? { backgroundColor: "#111111",color:"#e9e8e8" }
        : { backgroundColor: "#e9e8e8",color:"#111111" }
    }>
        <div className="container" style={
      storedTheme === "dark"
        ? { backgroundColor: "#111111",color:"#e9e8e8" }
        : { backgroundColor: "#e9e8e8",color:"#111111" }
    }>
          <div id="logo" className="flex items-center justify-center " >
            
            <img
              className="desktopLogo h-2/3 cursor-pointer"
              onClick={() => {
                window.location.href = "/"
              }}
              src={storedTheme === "dark" ? DarkWideLogo : LightWideLogo}
            ></img> <p style={
              storedTheme === "dark"
                ? { color:"white",cursor: "pointer" }
                : { color:"black",cursor: "pointer" }
            }> <span className="tx1">Fab</span><span style={
              storedTheme === "dark"
                ? { color:"#00CDFF",cursor: "pointer" }
                : { color:"blue",cursor: "pointer" }
            }>Lab</span><span className="tx3">FSB</span></p>
            <img
              className="mobileLogo cursor-pointer"
              src={storedTheme === "dark" ? DarkMobileLogo : LightMobileLogo}
              onClick={() => {
                window.location.href = "/"
              }}
              width="130px"
              height="35px"
            ></img>
          </div>
          <div className="header-extras">



            
            <ul>
              


                <div className="p-dropdown authenticate-btn" >
                  {" "}
                  <a href="#">
                    <span
                      style={{ fontSize: "1.1rem" }}
                      className="btn btn-outline m-r-10 m-t-10"
                    >
                         {t("login")}
                    </span>
                  </a>
                  <ul className="p-dropdown-content">
                    
                      <li >
                        <a
                          href=""
                          style={{ cursor: "pointer",fontSize: "1.1rem"}}
                        >
                          As a Student
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://fablab-fsb-user.vercel.app/auth" target="_blank"
                          style={{ cursor: "pointer",fontSize: "1.1rem"}}
                        >
                          As a User
                        </a>
                      </li>
                    
                  </ul>
                </div>

              {/* Dark/Light mode button */}
              <li style={{ cursor: "pointer",margin:"0 10px 0 10px" }}>
                <i
                  onClick={() => {
                    toggleTheme();
                  }}
                  style={{ fontSize: "1.3rem" }}
                  className={
                    storedTheme === "dark" ? "fa fa-moon white" : "fa fa-moon"
                  }
                ></i>
              </li>

              {/* Language selector */}
              <li>
                <div className="p-dropdown" style={
      storedTheme === "dark"
        ? {color:"#e9e8e8" }
        : { color:"#111111" }
    }>
                  {" "}
                  <a href="#">
                    <span
                      className=""
                      style={
                        storedTheme === "dark"
                          ? { color:"#e9e8e8",fontSize:"18px",fontWeight:"600",cursor:"pointer"}
                          : { color:"#111111",fontSize:"18px",fontWeight:"600",cursor:"pointer"}
                      }
                    >

                      {selectedLang.toUpperCase() == "GR" ? "Fr" : "En"}
                    </span>
                    <i
                      className="fa fa-light fa-angle-down m-l-5"
                      style={{ fontSize: "1.1rem", color: "#ff8b2a" }}
                    ></i>
                  </a>
                  <ul className="p-dropdown-content">
                    {Object.keys(languageMap)?.map((item) => (
                      <li key={item}>
                        <a
                          onClick={() => {
                            console.log(`changing language to ${item}`);
                            i18next.changeLanguage(item);
                            setSelectedLang(item);
                          }}
                          style={{ cursor: "pointer",fontSize: "1.1rem"}}
                        >
                          {languageMap[item].label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div id="mainMenu-trigger">
            {" "}
            <a className="lines-button x">
              <span className="lines"></span>
            </a>{" "}
          </div>
          <div id="mainMenu" className="menu-center">
            <div className="container">
              <nav>
                <ul>
                <div className="p-dropdown authenticate-btn_active" >
                  {" "}
                  <a href="#">
                    <span
                      style={{ fontSize: "1.1rem" }}
                      className="btn btn-outline m-r-10 m-t-10"
                    >
                         {t("login")}
                    </span>
                  </a>
                  <ul className="p-dropdown-content">
                    
                      <li >
                        <a
                          href=""
                          style={{ cursor: "pointer",fontSize: "1.1rem"}}
                        >
                          As a Student
                        </a>
                      </li>

                      <li>
                        <a
                         href="https://fablab-fsb-user.vercel.app/auth" target="_blank"
                          style={{ cursor: "pointer",fontSize: "1.1rem"}}
                        >
                          As a User
                        </a>
                      </li>
                    
                  </ul>
                </div>
                
                  
                  
                  <li>
                    <a href="/#About"  style={
                        storedTheme === "dark"
                          ? { color:"#e9e8e8",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                          : { color:"#111111",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                      }>{t("about")} </a>
                  </li>
                  
                  <li>
                    <a href="/#events" style={
                        storedTheme === "dark"
                          ? { color:"#e9e8e8",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                          : { color:"#111111",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                      }>{t("Events")}</a>
                  </li>
                  
                  <li>
                    <a href="/#team"  style={
                        storedTheme === "dark"
                          ? { color:"#e9e8e8",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                          : { color:"#111111",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                      }>{t("prof")}</a>
                  </li>
                  <li>
                    <a href="/#contact"  style={
                        storedTheme === "dark"
                          ? { color:"#e9e8e8",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                          : { color:"#111111",fontSize:"11px",fontWeight:"600",cursor:"pointer"}
                      }>{t("contact")}</a>
                  </li>
                  


                  
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </header>
    
  );
};

export default Header;
