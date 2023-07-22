import React from 'react';
import "../styles/homeButton.scss";

import Logo from "../medias/Logo.svg"

const HomeButton = () => {

  return (
    <a className="home hover-target" href="https://lucemtis.github.io/home/" target='blank_'>
        <img src={Logo} alt="home button" />
    </a>
  );

};

export default HomeButton;
