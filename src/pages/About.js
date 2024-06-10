import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import TeamAreaOne from "../components/TeamAreaOne";
import NavbarFour from "../components/NavbarFour";
import FooterFour from "../components/FooterFour";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default About;
