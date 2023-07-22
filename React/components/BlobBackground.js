import React from 'react';
import '../styles/blobBackground.scss';
import img from '../medias/background.png';

const BlobBackground = ({ classAdd }) => {


  if (!classAdd) {
    classAdd = '';
  }

  return (
    <div className={classAdd + ' blobBackground'}>
      <svg className="blobCont">
        <mask id="blobMask" x="0" y="0">
          <circle className="blob" cx="10%" cy="10%" r="150" fill="white" stroke="white" />
          <circle className="blob" cx="50%" cy="10%" r="70" fill="white" stroke="white" />
          <circle className="blob" cx="17%" cy="15%" r="140" fill="white" stroke="white" />
          <circle className="blob" cx="90%" cy="20%" r="180" fill="white" stroke="white" />
          <circle className="blob" cx="30%" cy="25%" r="60" fill="white" stroke="white" />
          <circle className="blob" cx="50%" cy="60%" r="250" fill="white" stroke="white" />
          <circle className="blob" cx="70%" cy="90%" r="80" fill="white" stroke="white" />
          <circle className="blob" cx="90%" cy="60%" r="180" fill="white" stroke="white" />
          <circle className="blob" cx="30%" cy="90%" r="60" fill="white" stroke="white" />
          <circle className="blob" cx="10%" cy="10%" r="250" fill="white" stroke="white" />
          <circle className="blob" cx="50%" cy="10%" r="80" fill="white" stroke="white" />
          <circle className="blob" cx="17%" cy="15%" r="200" fill="white" stroke="white" />
          <circle className="blob" cx="40%" cy="20%" r="120" fill="white" stroke="white" />
          <circle className="blob" cx="30%" cy="25%" r="30" fill="white" stroke="white" />
          <circle className="blob" cx="80%" cy="60%" r="180" fill="white" stroke="white" />
          <circle className="blob" cx="17%" cy="10%" r="250" fill="white" stroke="white" />
          <circle className="blob" cx="40%" cy="60%" r="20" fill="white" stroke="white" />
          <circle className="blob" cx="10%" cy="50%" r="80" fill="white" stroke="white" />
        </mask>
        <image className="blobImg" href={img} mask={`url(#blobMask)`} />
      </svg>
    </div>
  );
};

export default BlobBackground;
