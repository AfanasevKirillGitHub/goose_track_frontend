import * as SC from './ColorToggle.styled';
import { SVG } from '../../../images';
import { useSelector, useDispatch } from 'react-redux';

import { getTheme, changeTheme } from '../../../redux/theme/themeReducer';

export const ColorToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getTheme);

  let newTheme: string;

  const getNewTheme = (currentTheme: string) => {
    switch (currentTheme) {
      case 'darkblue':
        newTheme = 'darkgreen';
        break;
      case 'darkgreen':
        newTheme = 'darkblue';
        break;
      case 'lightblue':
        newTheme = 'lightgreen';
        break;
      case 'lightgreen':
        newTheme = 'lightblue';
        break;

      default:
        return newTheme;
    }
  };

  getNewTheme(currentTheme);

  return (
    <>
      <SC.ColorPicker
        type="button"
        onClick={() => dispatch(changeTheme(newTheme))}
      >
        <SVG.DropIcon />
        <SC.HiddenTitle>Color Picker</SC.HiddenTitle>
      </SC.ColorPicker>
    </>
  );
};
