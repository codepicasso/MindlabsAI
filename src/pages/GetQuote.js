import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavbarFour from "../components/NavbarFour";
import FooterFour from "../components/FooterFour";
import GetQuoteMain from "../components/GetQuoteMain";

const StartProject = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"Quotation"} />

      {/* Contact Main */}
      <GetQuoteMain />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default StartProject;
