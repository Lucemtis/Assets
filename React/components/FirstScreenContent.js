import React from 'react';
import '../styles/firstScreenContent.scss';

const FirstScreenContent = ({children}) => {

    return (
        <div className='firstScreenContent'>
            {children}
        </div>
      );
    };    
  
export default FirstScreenContent;
