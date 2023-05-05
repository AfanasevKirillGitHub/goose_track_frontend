import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: ${props => props.theme.colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.space[6]}px;
  width: 200px;
  height: 200px;
  background-color: ${props => props.theme.colors.blue3};

  @media (min-width: 768px) {
    margin-bottom: ${props => props.theme.space[7]}px;
    width: 300px;
    height: 300px;
  }

  & svg {
    margin: 0 auto;

    scale: 0.2;
    margin: 0 auto;
    overflow: visible;

    @media (min-width: 768px) {
      scale: 0.3;
    }
  }
`;

export const Text = styled.p`
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.m};
  color: ${props => props.theme.colors.blue};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  width: 108px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii.normal};
  border: ${props => props.theme.borders.none};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  background-color: ${props => props.theme.colors.blue};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hoverYellow};
    color: ${props => props.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 48px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const PetlyLink = styled.a`
  text-decoration: none;

  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.m};
  color: ${props => props.theme.colors.blue};
  margin-top: 48px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverBackground};
  }
`;
