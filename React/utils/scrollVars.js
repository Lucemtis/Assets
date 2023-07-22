import { useEffect } from 'react';

const useScrollVars = (ref) => {
  useEffect(() => {

    const element = ref.current;

    const frameHeight = element.clientHeight;
    element.style.setProperty('--frameHeight', frameHeight);


    const handleScroll = () => {

      const rect = element.getBoundingClientRect();

      const frameTop = rect.top ;
      const frameBottom = rect.bottom - window.innerHeight;

      
      element.style.setProperty('--frameTop', frameTop);
      element.style.setProperty('--frameBottom', frameBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);
};

export default useScrollVars;
