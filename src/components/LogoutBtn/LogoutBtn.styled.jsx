import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 46px;
  padding: ${props => props.theme.space[0]}px;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  color: ${props => (props.to === '/login' ? '#3E85F3' : '#FFFFFF')};
  background-color: ${props => (props.to === '/login' ? '#FFFFFF' : '#3E85F3')};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-left: ${props => props.theme.space[3]}px;
  }

  :hover,
  :focus {
    color: yellow;
    background-color: yellowgreen;
  }
  
  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
  }
`;
