import styled from 'styled-components';

export const ColorPicker = styled.button`
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border-radius: ${props => props.theme.radii.normal};
  overflow: hidden;
  cursor: pointer;
  color: ${props => props.theme.colors.blue};

  svg {
    fill: ${props => props.theme.colors.colorSwitcher};
  }
`;

export const Color = styled.div`
  width: 100%;
  height: 100%;
`;
