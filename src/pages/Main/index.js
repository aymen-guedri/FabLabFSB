import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../Layouts/Header";
import CookieConsent from "../../Components/CookieConsent";
import FirstSection from "../../Components/FirstSection";
import WhatWeDo from "../../Components/WhatWeDo";
import SearchTalent from "../../Components/SearchTalent";
import WhyUs from "../../Components/WhyUs";
import WhyTunisia from "../../Components/WhyTunisia";
import Timelines from "../../Components/Timeline";
import CallToAction from "../../Components/CallToAction";
import OurTeam from "../../Components/OurTeam";
import ContactForm from "../../Components/ContactForm";
import Footer from "../../Layouts/Footer";

const Main = ({ storedTheme, setStoredTheme, ...rest }) => {
  const { t } = useTranslation();

  return (
    <>
      <FirstSection
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></FirstSection>

      {/* <WhatWeDo
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></WhatWeDo> */}

      {/* <SearchTalent storedTheme={storedTheme}></SearchTalent> */}

      <WhyUs storedTheme={storedTheme} setStoredTheme={setStoredTheme}></WhyUs>

      <WhyTunisia
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></WhyTunisia>

      <Timelines
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></Timelines>

      <CallToAction
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></CallToAction>

      <OurTeam
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></OurTeam>

      <ContactForm
        storedTheme={storedTheme}
        setStoredTheme={setStoredTheme}
      ></ContactForm>
    </>
  );
};

export default Main;
