import { useState } from 'react';
import { SVG } from '../../../images';

import * as SC from './ThemeToogle.styled';

export const ThemeToogle: React.FC = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <SC.ToogleBtn type="button" onClick={handleThemeChange}>
        {isDarkTheme ? <SVG.SunIcon /> : <SVG.MoonIcon />}
      </SC.ToogleBtn>
    </>
  );
};
