import { useState } from 'react';
import * as SC from './ColorToggle.styled';
import { SVG } from '../../../images';

export const ColorToggle: React.FC = () => {
  const [isMainColor, setMainColor] = useState(false);

  const handleColorChange = () => {
    setMainColor(!isMainColor);
  };

  return (
    <>
      <SC.ColorPicker
        type="button"
        onClick={handleColorChange}
        name={isMainColor ? 'blue' : 'green'}
      >
        <SVG.DropIcon />
      </SC.ColorPicker>
    </>
  );
};
