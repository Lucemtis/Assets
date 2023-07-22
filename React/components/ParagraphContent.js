import React, { useRef } from 'react';
import "../styles/paragraphContent.scss";
import useFixedEffect from "../utils/fixedEffect";

const ParagraphContent = ({ children1, children2, classAdd }) => {

  const constRef = useRef(null);
  useFixedEffect(constRef);

  if(!classAdd){
    classAdd= '';
  }

  return (
    <div ref={constRef} className= {classAdd + " paragraphContent"}>
      <div className='paragraphContentLeft'>
        <div className='paragraphFixedContentLeft'>
          {children1}
        </div>
      </div>
      <div className='paragraphContentRight'>
        {children2}
      </div>
    </div>
  );
};

export default ParagraphContent;
