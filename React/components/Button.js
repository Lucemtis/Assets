import React from 'react';
import '../styles/button.scss';

const Button = ({children, classAdd}) => {

  if (!classAdd) {
    classAdd = '';
  }

    return (
        <button className={classAdd + ' btn hover-target'}>{children}</button>
      );
    };    
  
export default Button;
