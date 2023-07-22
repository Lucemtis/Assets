import React from 'react';
import '../styles/boxTitle.scss';

const BoxTitle = ({nb, children}) => {

    return (
        <div className='boxTitle'>
            <span>{nb}</span>
            <p>{children}</p>
        </div>
      );
    };    
  
export default BoxTitle;
