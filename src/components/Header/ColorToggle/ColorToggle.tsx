import { useState } from 'react';
import * as SC from './ColorToggle.styled';

export const ColorToggle: React.FC = () => {
  const [isMainColor, setMainColor] = useState(false);

  const handleColorChange = () => {
    setMainColor(!isMainColor);
  };

  return (
    <SC.ColorPicker type="button" onClick={handleColorChange}>
      <SC.Color
        style={{ backgroundColor: isMainColor ? '#3EB489' : '#3E85F3' }}
      ></SC.Color>
    </SC.ColorPicker>
  );
};
