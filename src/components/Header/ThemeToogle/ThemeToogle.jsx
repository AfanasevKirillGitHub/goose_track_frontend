import { SVG } from '../../../images';

import * as SC from './ThemeToogle.styled';

export const ThemeToogle = () => {
  return (
    <>
      <SC.ToogleBtn type="button">
        <SVG.MoonIcon />
      </SC.ToogleBtn>
    </>
  );
};
