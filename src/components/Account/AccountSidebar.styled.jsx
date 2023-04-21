import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 289px;
  height: 812px;
  background-color: #fff;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    height: 770px;
  }
`;

export const LogoImg = styled.img`
  margin: 0 auto;
  width: 71px;
  height: 68px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 32px 64px 32px 24px;
`;

export const Title = styled.h1`
  color: #3e85f3;
  font-family: 'Coolvetica';
  font-size: 24px;
  line-height: 1.5;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Span = styled.span`
  font-style: italic;
`;

export const NavTitle = styled.h2`
  margin-left: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #7e7d82;
`;

export const NavList = styled.ul`
  margin-top: 32px;
  margin-bottom: 511px;
  display: flex;
  flex-direction: column;
  margin-bottom: 511px;
  text-decoration: none;
  list-style: none;
`;

export const NavItem = styled.li`
  margin: 0;
  width: 241px;
  height: 56px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 54px;
  text-decoration: none;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #84828a;
  &.active {
    background: #e3f3ff;
    border-radius: 8px;
    color: #3e85f3;
  }
`;
