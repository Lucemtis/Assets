import React from 'react';
import "../styles/banner.scss";

import HomeButton from './HomeButton';

const TitleBanner = () => {

  return (
    <div className='banner'>
      <HomeButton />
      <div className="bannerSecondColumn">
        <h2>Training Book<span className='letterSpacingOff'>s</span></h2>
        <h3>© 2023 Lucemtis Mioky</h3>
      </div>
    </div>
  );

};

export default TitleBanner;
