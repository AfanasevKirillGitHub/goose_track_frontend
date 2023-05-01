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

export const HiddenTitle = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  :active,
  :focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;
