import React from 'react';
import "../styles/frameContent.scss";

const FrameContent = ({ children, classAdd }) => {

  if (!classAdd) {
    classAdd = '';
  }

  return (
    <div className={classAdd +  " frameFullContent"}>
      <div className='frameParent'>
        <div className='frameContent'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FrameContent;