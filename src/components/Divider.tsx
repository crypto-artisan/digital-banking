import React from "react";
import Container from "./Container";

import logo from "assets/image/logo.png";

const Divider = () => {
  return (
    <div className="landing-divider h-20 lg:py-4">
      <Container>
        <div className="flex justify-between flex-col lg:flex-row items-center">
          <img
            src={logo}
            alt="logo"
            className="logo-img h-14 pt-1"
          />
          <div className="h-[2px] bg-white w-full ml-12" />
        </div>
      </Container>
    </div>
  );
};

export default Divider;
