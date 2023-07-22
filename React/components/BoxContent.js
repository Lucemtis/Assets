import React, { useRef } from 'react';
import "../styles/boxContent.scss";
import useFixedEffect from "../utils/fixedEffect";

const BoxContent = ({ children, classAdd }) => {

  const constRef = useRef(null);
  useFixedEffect(constRef);

  if (!classAdd) {
    classAdd = '';
  }

  return (
    <div ref={constRef} className={classAdd + " boxContent"}>
      <div className="horizontalScroll">
        {children}
      </div>
    </div>
  );
};

export default BoxContent;