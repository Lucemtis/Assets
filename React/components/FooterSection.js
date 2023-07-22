import React from 'react';
import '../styles/footerSection.scss';

const FooterSection = ({children}) => {

    return (
        <div className='footerSection'>
            {children}
        </div>
      );
    };    
  
export default FooterSection;
