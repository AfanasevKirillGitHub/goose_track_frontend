import { SVG } from '../../../images';
import { useSelector, useDispatch } from 'react-redux';
import { themeAction } from '../../../redux/theme/theme.action';

import * as SC from './ThemeToogle.styled';

export const ThemeToogle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme);

  let newTheme;

  const getNewTheme = currentTheme => {
    switch (currentTheme) {
      case 'darkblue':
        newTheme = 'lightblue';
        break;
      case 'darkgreen':
        newTheme = 'lightgreen';
        break;
      case 'lightblue':
        newTheme = 'darkblue';
        break;
      case 'lightgreen':
        newTheme = 'darkgreen';
        break;

      default:
        return newTheme;
    }
  };

  getNewTheme(currentTheme);

  return (
    <>
      <SC.ToogleBtn
        type="button"
        onClick={() => dispatch(themeAction(newTheme))}
      >
        {currentTheme === 'darkblue' || currentTheme === 'darkgreen' ? (
          <SVG.SunIcon />
        ) : (
          <SVG.MoonIcon />
        )}
      </SC.ToogleBtn>
    </>
  );
};
