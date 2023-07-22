import React from 'react';
import '../styles/circle.scss';

const Circle = () => {
    const traits = Array.from(Array(150).keys());

    return (
        <div className='contentCircle'>
            <div className="circle">
            {traits.map((index) => (
                <div
                className="trait"
                key={index}
                style={{ transform: `rotate(${(index * (360 / traits.length))}deg)` }}
                ></div>
            ))}
            </div>
        </div>
      );
    };    
  
export default Circle;
