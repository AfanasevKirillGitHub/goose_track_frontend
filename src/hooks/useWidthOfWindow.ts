import { useState, useEffect } from 'react';

const SCREEN_MOBILE = 375;
const SCREEN_TABLET = 768;
const SCREEN_DESKTOP = 1440;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      if (event.target instanceof Window) {
        setWidth(event.target.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width >= SCREEN_MOBILE,
    isScreenTablet: width >= SCREEN_TABLET,
    isScreenDesktop: width >= SCREEN_DESKTOP,
  };
};
