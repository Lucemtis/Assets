import React from 'react';
import '../styles/titleSection.scss';

const TitleSection = ({children}) => {

    return (
        <div className='titleSection'>
            <h2>{children}</h2>
        </div>
      );
    };    
  
export default TitleSection;
