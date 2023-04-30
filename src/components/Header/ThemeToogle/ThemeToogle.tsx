import { SVG } from '../../../images';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, changeTheme } from '../../../redux/theme/themeReducer';
import * as SC from './ThemeToogle.styled';

export const ThemeToogle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getTheme);

  let newTheme: string;

  const getNewTheme = (currentTheme: string) => {
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
        onClick={() => dispatch(changeTheme(newTheme))}
      >
        {currentTheme === 'darkblue' || currentTheme === 'darkgreen' ? (
          <SVG.SunIcon />
        ) : (
          <SVG.MoonIcon />
        )}
        <SC.HiddenTitle>Theme Toggle</SC.HiddenTitle>
      </SC.ToogleBtn>
    </>
  );
};
