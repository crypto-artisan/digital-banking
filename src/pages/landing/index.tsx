import React from 'react';
import Divider from "components/Divider";
// import FixedMenu from "components/FixedMenu";
import ScrollTop from "components/ScrollTop";
import AboutPart from "./AboutPart";
import BenefitPart from "./BenefitPart";
import ContactInfoPart from "./ContactInfoPart";
import FaqPart from "./FaqPart";
import FooterPart from "./FooterPart";
import GetStartedPart from "./GetStartedPart";

import IntroPart from "./IntroPart";
import ServicePart from "./ServicePart";
import SupportPart from "./SupportPart";

const LandingPage = () => {
  
  return (
    <div>
      <IntroPart />
      <AboutPart />
      <ServicePart />
      <BenefitPart />
      <SupportPart />
      <GetStartedPart />
      <FaqPart />
      <ContactInfoPart />
      <Divider />
      <FooterPart />
      <ScrollTop />
    </div>
  );
};

export default LandingPage;
