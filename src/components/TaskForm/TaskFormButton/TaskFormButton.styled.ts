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
    return p.type === 'button' ? p.theme.colors.black1 : p.theme.colors.white3;
  }};
  background-color: ${p => {
    return p.type === 'button' ? p.theme.colors.grey2 : p.theme.colors.blue;
  }};

  border-radius: ${props => props.theme.radii.normal};
  border: none;
  outline: none;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverYellow};
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;
