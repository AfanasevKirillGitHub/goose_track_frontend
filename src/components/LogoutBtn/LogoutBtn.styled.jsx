import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 24px;
  text-decoration: none;
  width: 131px;
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  margin-right: ${props => props.theme.space[4]}px;
  margin-bottom: 200px;
  margin-top: 32px;
  color: ${props => (props.to === '/login' ? '#3E85F3' : '#FFFFFF')};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  background-color: ${props => (props.to === '/login' ? '#FFFFFF' : '#3E85F3')};
  box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);

  svg {
    margin-left: ${props => props.theme.space[3]}px;
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 121px;
    height: 49px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
