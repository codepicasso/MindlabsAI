import React from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import BannerFive from "../components/BannerFive";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import FooterFour from "../components/FooterFour";
import NavbarFour from "../components/NavbarFour";
import ServiceAreaFive from "../components/ServiceAreaFive";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* Case Study Area Two */}
      <CaseStudyAreaTwo />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFive;
