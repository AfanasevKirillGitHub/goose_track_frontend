import * as SC from './ColorToggle.styled';
import { SVG } from '../../../images';
import { useSelector, useDispatch } from 'react-redux';
import { themeAction } from '../../../redux/theme/theme.action';

export const ColorToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme);

  let newTheme;

  const getNewTheme = currentTheme => {
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
        onClick={() => dispatch(themeAction(newTheme))}
      >
        <SVG.DropIcon />
      </SC.ColorPicker>
    </>
  );
};
