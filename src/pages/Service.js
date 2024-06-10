import React from "react";
import Breadcrumb from "../components/Breadcrumb";

import ServiceAreaGroup from "../components/ServiceAreaGroup";
import NavbarFour from "../components/NavbarFour";
import FooterFour from "../components/FooterFour";
import PastProject from "../components/PastProject";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />
      <PastProject />
      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Footer One */}
      <FooterFour />
    </>
  );
};

export default Service;
