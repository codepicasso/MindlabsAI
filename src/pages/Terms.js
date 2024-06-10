import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import TeamAreaOne from "../components/TeamAreaOne";
import NavbarFour from "../components/NavbarFour";
import FooterFour from "../components/FooterFour";
import TermsOfServiceMain from "../components/TermsAndConditionMain";

const TermsAndCondition = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"Terms & Condition"} />

      <TermsOfServiceMain />
      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default TermsAndCondition;
