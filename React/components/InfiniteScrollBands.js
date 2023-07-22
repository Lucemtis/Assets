import React, { useEffect, useRef, useState } from 'react';
import '../styles/infiniteScrollBands.scss';

const InfiniteScrollBands = ({ children, classAdd }) => {
  const constRef = useRef(null);
  const [duplicationFactor, setDuplicationFactor] = useState(1);

  useEffect(() => {
    let T = getComputedStyle(constRef.current).getPropertyValue('--frameWidth');
    let gap = getComputedStyle(constRef.current).getPropertyValue('--frameGap');

    // Check if the frameWidth is in vw or vh units
    if (T.endsWith('vw')) {
      // Convert vw to pixels
      const vwValue = parseFloat(T) * window.innerWidth / 100;
      T = vwValue + 'px';
    } else if (T.endsWith('vh')) {
      // Convert vh to pixels
      const vhValue = parseFloat(T) * window.innerHeight / 100;
      T = vhValue + 'px';
    }

    // Check if the frameGap is in vw or vh units
    if (gap.endsWith('vw')) {
      // Convert vw to pixels
      const vwValue = parseFloat(gap) * window.innerWidth / 100;
      gap = vwValue + 'px';
    } else if (gap.endsWith('vh')) {
      // Convert vh to pixels
      const vhValue = parseFloat(gap) * window.innerHeight / 100;
      gap = vhValue + 'px';
    }

    T = parseFloat(T) + parseFloat(gap) * 2;



    const calculateDuplicationFactor = () => {
      const infiniteScrollBand = constRef.current.offsetHeight > constRef.current.offsetWidth
        ? constRef.current.offsetHeight
        : constRef.current.offsetWidth;

      const childContentWidth = T;

      const desiredWidth = infiniteScrollBand * 3;

      if (childContentWidth < desiredWidth) {
        const newDuplicationFactor = Math.ceil(desiredWidth / childContentWidth);
        setDuplicationFactor(newDuplicationFactor);
      }
    };

    /*
    const handleScroll = () => {
      const t = 2;
      const x = getComputedStyle(constRef.current).getPropertyValue('--frameTop');
      const TBand = T * childrenCount;

      const sawTooth = (parseFloat(x) % (TBand * t)) / t;

      constRef.current.style.setProperty('--sawTooth', sawTooth);
    };

    let animationFrameId;

    const update = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(update);
    };

    calculateDuplicationFactor();

    window.addEventListener('resize', calculateDuplicationFactor);
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', calculateDuplicationFactor);
      cancelAnimationFrame(animationFrameId);
    };
    */

    calculateDuplicationFactor();

    window.addEventListener('resize', calculateDuplicationFactor);

    return () => {
      window.removeEventListener('resize', calculateDuplicationFactor);
    };
  }, [children]);

  if (!classAdd) {
    classAdd = '';
  }

  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;
  const duplicatedChildren = Array.from({ length: duplicationFactor }, (_, index) => {
    return childrenArray[index % totalChildren];
  });

  return (
    <div ref={constRef} className={classAdd + ' infiniteScrollBands'}>
      <div className='band'>
        {duplicatedChildren.map((child, index) => (
          <div className='childContent' key={index}>{child}</div>
        ))}
      </div>
      <div className='band'>
        {duplicatedChildren.map((child, index) => (
          <div className='childContent' key={index}>{child}</div>
        ))}
      </div>
      <div className='band'>
        {duplicatedChildren.map((child, index) => (
          <div className='childContent' key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollBands;
