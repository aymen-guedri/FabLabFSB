import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import'./About.scss';
import Roll from 'react-reveal/Roll';
const Stats = ({ storedTheme, setStoredTheme, ...rest }) => {
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
    <div className={storedTheme}  style={
      storedTheme === "dark"
        ? { backgroundColor: "#161616" }
        : { backgroundColor: "#eff1f2" }
    } id="About">
    <Container >
    <Fade bottom>
    <div className="container">
    <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      
                      <h2>{t("aboutfablab")}</h2>
                      

                      <AboutContainer>
                        <Me style={
                              storedTheme === "dark"
                                ? { backgroundColor: "grey" }
                                : { backgroundColor: "#004656" }
                            }>
                          
                            <img src="/images/img3.jpg" alt="my photo" className="Image"/>
                          
                        </Me>

                        <Content>
                          <Cards>
                            <Card 
                            style={
                              storedTheme === "dark"
                                ? { backgroundColor: "#DFF9FF",color:"black"  }
                                : { backgroundColor: "#4AFF9A",color:"black" }
                            }
                            >
                              <Roll>
                              <article>
                                <img src="/images/linkedin.png" alt="linkedin" className="aboutimage" />
                                <h5>Linkedin</h5>
                                <small>fablab-fsb</small>
                              </article>
                              </Roll>
                              </Card>

                              <Card style={
                              storedTheme === "dark"
                              ? { backgroundColor: "#DFF9FF",color:"black"  }
                                : { backgroundColor: "#4AFF9A",color:"black" }
                            }>
                              <Roll>
                              <article>
                                <img src="/images/tel.png" alt="linkedin" className="aboutimage" />
                                <h5>{t("phone")}</h5>
                                <small>+216 95 215 979</small>
                              </article>
                              </Roll>
                              </Card>

                              <Card style={
                              storedTheme === "dark"
                              ? { backgroundColor: "#DFF9FF",color:"black"  }
                                : { backgroundColor: "#4AFF9A",color:"black" }
                            }>
                              <Roll>
                              <article>
                                <img src="/images/mail.png" alt="linkedin" className="aboutimage" />
                                <h5>Mail</h5>
                                <small>4C.FSBizerte@fsb.u-carthage.tn</small>
                               </article>
                               </Roll>
                              </Card>

                           </Cards>
                           <p style={
                              storedTheme === "dark"
                                ? { color: "white" }
                                : { color:"black" }
                            }
                            >{t("desc")}</p>

                           
                           <div class="buttons">
                           <a href='#contact' class="btn btn-primary btn-jittery">
                           {t("chat")}
                           </a>
                           </div>
                        </Content>
                      </AboutContainer>

                    </div>
                 </div>
    </div>
    </div>
    </Fade>
    </Container>
  
    </div>
    
  )
};

  

export default Stats;


const Container =styled.div`
padding: 0 20px 250px 20px;



position: relative;



h2{
  text-align: center;
  font-size:2.5em;
  color:#EF5B0C;
  font-weight:600;
  margin-top:3rem;
  margin-bottom:5rem;
  
}

h2:nth-child(1) {
	color: transparent;
	-webkit-text-stroke: 2px #EF5B0C;
}
h2:nth-child(2) {
	color: #EF5B0C;
	animation: animate 4s ease-in-out infinite;
}


@keyframes animate {
	0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
}




`;

const AboutContainer =styled.div`
display:grid;
grid-template-columns:35% 50%;
gap:15%;


@media(max-width:1024px){
  grid-template-columns:1fr;
  gap:0;
   
}

@media(max-width:600px){
  grid-template-columns:0.1fr;
  gap:0;
  
}


`;

const Me =styled.div`
width:100%;
aspect-ratio:4/3;
border-radius:2rem;

display:grid;
place-items:center;

.Image{
border-radius:2rem;
overflow:hidden;
transform:rotate(10deg);
transition:2s

}

.Image:hover{
  transform:rotate(0deg);

  }

  @media(max-width:1024px){
    width:60%;
    margin:2rem auto 4rem;
  }
  @media(max-width:600px){
    width:80%;
    margin:0 2rem 3rem;
  }

  @media(max-width:900px){
    width:80%;
    margin:0 2rem 3rem;
  }

`;

const Content =styled.div`
p{
  font-size:1.3rem;
}

a{
  margin-top:1rem;
width:6rem;
font-size:1.3rem;
}

@media(max-width:1024px){
  margin:1.6rem 0 1.5rem;
}

@media(max-width:600px){
  
font-size:0.7rem;
  
}

@media(max-width:900px){
  font-size:0.7rem;
}

`;



const Cards =styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:1.5rem;
margin-bottom:2rem;


@media(max-width:600px){
  grid-template-columns:1fr 1fr;
  gap:1rem;
}

@media(max-width:900px){
  grid-template-columns:1fr 1fr;
  gap:1rem;
}
`;

const Card =styled.div`
padding:2rem;
text-align:center;
border:1px solid transparent;
border-radius:1rem;
width:10rem;

.aboutimage{
  width:30px;
  align-items:center;
  justify-content:center;
  padding:auto;
  margin:auto;
}

:hover{
  background:transparent;
  border-color:gray;
  cursor:default;
  transition:10s;
}

h5{
  font-size:1rem;
  color:#EF5B0C;
}

small{
  font-size:1rem;
  
}

@media(max-width:600px){
  width:8rem;

  h5{
    font-size:0.8rem;
  }
  small{
    font-size:0.7rem;
  }
}

@media(max-width:900px){
  width:8rem;
  h5{
    font-size:0.8rem;
  }
  small{
    font-size:0.7rem;
  }
}

`;

