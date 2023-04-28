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
