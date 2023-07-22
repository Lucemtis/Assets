import { useEffect } from 'react';

const useFixedEffect = (ref) => {
  useEffect(() => {

    const element = ref.current;

    const handleScroll = () => {

      const rect = element.getBoundingClientRect();
      const isElementVisible = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      
      if (element.classList.contains("activateOff")) {
        return;
      }

      if (isElementVisible) {
        element.classList.add('fixed');

        const scrollFill = rect.top;
        element.style.setProperty('--scrollFill', scrollFill + "px");

        element.classList.remove('endFixed');

      } else if (rect.bottom <= window.innerHeight) {
        element.classList.add('endFixed');

        // const scrollBottom = rect.bottom;
        // element.style.setProperty('--scrollBottom', scrollBottom + "px");

      } else {

        // const scrollTop = rect.top;
        // element.style.setProperty('--scrollTop', scrollTop + "px");
        
        element.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);
};

export default useFixedEffect;
