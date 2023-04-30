import styled from 'styled-components';

export const ToogleBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.themeSwitcher};

  width: 26px;
  height: 26px;
  padding: 0;
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
