import './Events.scss'
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import AymenImg from "../assets/images/pic.png";
import Zoom from 'react-reveal/Zoom';
const Team = ({ storedTheme, setStoredTheme, ...rest }) => {
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
  <section id='team' className={storedTheme} style={
    storedTheme === "dark"
      ? { backgroundColor: "#111111" }
      : { backgroundColor: "#e9e8e8" }
  }>
	<Fade left >
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
		<h2>{t("team")}</h2>
		<h2>{t("team")}</h2>
	 </div>
  </section>
  </Fade>
   <main>
   <Fade bottom>
   <div class="container">
		<div class="row flex-center sm-no-flex">
		
			<div class="pull-right sm-no-float col-md-8">
				<ul class="team-members">
				
					<li class="clearfix">
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="Developer"/>
								<div class="member-info">
									<h3>Aymen Guedri</h3>
									<p>{t("developer")}</p>
								</div>
							</div>
						</div>
						
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="UI Designer"/>
								<div class="member-info">
									<h3>Someone</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
						
						<div class="member-details">
							<div>
								<img src={AymenImg}/>
								<div class="member-info">
									<h3>David Warner</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
					</li>
					<li class="clearfix">
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="UI Designer"/>
								<div class="member-info">
									<h3>John Doe</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
						
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="UI Designer"/>
								<div class="member-info">
									<h3>John Doe</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
						
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="UI Designer"/>
								<div class="member-info">
									<h3>John Doe</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
					</li>
					<li class="clearfix">
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="UI Designer"/>
								<div class="member-info">
									<h3>John Doe</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
						
						<div class="member-details">
							<div>
								<img src={AymenImg} alt="UI Designer"/>
								<div class="member-info">
									<h3>John Doe</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
						
						<div class="member-details">
							<div>
								<img src={AymenImg}alt="UI Designer"/>
								<div class="member-info">
									<h3>Sara Khan</h3>
									<p>UI Designer</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<div class="pull-left col-md-4 sm-text-center">
				<div class="team-overview">
				<Zoom left cascade>
					<h2>{t("whoweare")}</h2>
					
					<p><div>{t("dec_team")}</div></p>
					</Zoom>
				</div>
			</div>
		</div>
	</div>
	</Fade>
   </main>
 </section>
  )
}
export default Team;
