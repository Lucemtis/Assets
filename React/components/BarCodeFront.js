import React from 'react';
import "../styles/barCodeFront.scss";

const BarCodeFront = () => {

  return (
    <span className='barCodeFront'>
      <span className='topCodes'></span>
      <span className='bottomCodes'></span>
      <span className='leftCodes'>
        <span></span>
        <span></span>
      </span>
      <span className='rightCodes'>
        <span></span>
        <span></span>
      </span>
    </span>
  );

};

export default BarCodeFront;
