import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  @media screen and (max-width: 1439px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.backdropBackground};

    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transition-property: opacity, visibility;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: initial;
    }

    &.is-open > div {
      transform: translateX(0);
    }
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 225px;

  @media screen and (max-width: 1439px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
    padding: 24px 20px;
    background-color: ${p => p.theme.colors.white};

    transform: translateX(-100%);

    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
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
  color: ${p => p.theme.colors.blue};
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
  color: ${props => props.theme.colors.grey};

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => props.theme.space[5]}px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  color: ${p => p.theme.colors.grey3};
  border-radius: ${props => props.theme.radii.normal};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    margin-right: ${props => props.theme.space[3]}px;
  }

  &.active {
    color: ${p => p.theme.colors.navLink};
    background: ${p => p.theme.colors.blue3};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.blue};
    background: ${p => p.theme.colors.hoverBackground};
  }

  @media screen and (min-width: 768px) {
    padding: 16px 20px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

interface IButton {
  design?: boolean;
  to?: boolean;
}

export const ButtonReview = styled.button<IButton>`
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
  color: ${p => p.theme.colors.white3};
  background-color: ${p => p.theme.colors.blue};
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
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.hoverBackground};
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: ${props => (props.design ? '108' : '141')}px;
    height: ${props => (props.design ? '37' : '46')}px;
  }
`;
