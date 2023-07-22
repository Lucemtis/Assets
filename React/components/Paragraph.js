import React from 'react';
import '../styles/paragraph.scss';

const Paragraph = ({children}) => {

    return (
        <p className='paragraph'>
            {children}
        </p>
      );
    };    
  
export default Paragraph;
