import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 12px;

  width: 100%;

  text-transform: capitalize;
  font-family: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.xl};

  color: ${p => {
    return p.type === 'button' ? p.theme.colors.black : p.theme.colors.white;
  }};
  background-color: ${p => {
    return p.type === 'button' ? p.theme.colors.grey2 : p.theme.colors.blue;
  }};

  border-radius: ${props => props.theme.radii.normal};
  border: none;
  outline: none;

  cursor: pointer;
`;
