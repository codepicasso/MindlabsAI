import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import TeamAreaOne from "../components/TeamAreaOne";
import NavbarFour from "../components/NavbarFour";
import FooterFour from "../components/FooterFour";
import PrivacyPolicyMain from "../components/PravicyPolicyMain";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"Privacy Policy"} />

      <PrivacyPolicyMain />
      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default PrivacyPolicy;
