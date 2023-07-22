import React from 'react';
import '../styles/bottomContent.scss';

const BottomContent = ({children}) => {

    return (
        <div className='bottomContent'>
            {children}
        </div>
      );
    };    
  
export default BottomContent;
