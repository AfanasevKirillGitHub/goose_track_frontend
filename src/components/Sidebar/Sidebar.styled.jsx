import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  padding: 24px 20px;
  background-color: #fff;
  /* height: 100%; */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    /* height: 1024px; */
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    /* height: 770px; */
    width: 289px;
    padding: 32px 24px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-bottom: ${props => props.theme.space[7]}px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: ${props => props.theme.space[6]}px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${props => props.theme.space[5]}px;
  }
`;

export const LogoImg = styled.img`
  margin: 0 6px 0 0;
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 72px;
    height: 72px;
  }
`;

export const Title = styled.h1`
  color: #3e85f3;
  font-family: ${props => props.theme.fontFamily.logo};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.xl};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.xl};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes.xxxl};
    line-height: ${props => props.theme.lineHeights.xxs};
  }
`;

export const Span = styled.span`
  font-style: italic;
`;

export const NavTitle = styled.h2`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.m};
  color: #7e7d82;

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => props.theme.space[5]}px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  list-style: none;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 10px 12px;
  text-decoration: none;

  font-family: 'Inter';
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.m};
  color: #84828a;
  border-radius: ${props => props.theme.radii.normal};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-right: ${props => props.theme.space[3]}px;
  }

  &.active {
    background: #e3f3ff;
    color: #3e85f3;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background: gold;
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 20px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;
