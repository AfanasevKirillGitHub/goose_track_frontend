import styled from 'styled-components';

interface IButton {
  design?: boolean;
  to?: boolean;
}

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props =>
    props.design ? props.theme.space[4] : props.theme.space[0]}px;
  width: ${props => (props.design ? '108' : '141')}px;
  height: ${props => (props.design ? '37' : '46')}px;
  padding: ${props => props.theme.space[0]}px;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  color: #ffffff;
  background-color: #3e85f3;
  cursor: pointer;
  font-size: ${props => (props.design ? '14px' : props.theme.fontSizes.l)};
  line-height: ${props => props.theme.lineHeights.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-left: ${props => props.theme.space[3]}px;
  }

  :hover,
  :focus {
    color: #3e85f3;
    background-color: gold;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: ${props => (props.design ? '108' : '141')}px;
    height: ${props => (props.design ? '37' : '46')}px;
  }
`;
