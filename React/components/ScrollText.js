import React from 'react';
import '../styles/scrollText.scss';

const ScrollText = ({classAdd}) => {

    if (!classAdd) {
        classAdd = '';
      }

    return (
        <p className={classAdd + ' scrollTextContent'}>
            
            <span className='scrollText'>Scroll</span>
            <span className='scrollEffect'></span>
            <span className='scrollText'>Down ⇂</span>
            
        </p>
      );
    };    
  
export default ScrollText;
