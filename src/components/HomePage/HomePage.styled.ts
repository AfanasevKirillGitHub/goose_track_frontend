import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.blue};
  height: 812px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    height: 770px;
  }
`;

export const WrapperChange = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const LogoImg = styled.img`
  margin: 0 auto;
  padding-top: 232px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 321px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 187px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.logo};
  font-size: ${props => props.theme.fontSizes.bxxxl};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.white};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.homePageLogo};
  }
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavListItem = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-top: 32px;
      margin-bottom: 200px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: ${props => props.theme.space[4]}px;
  }
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  width: 131px;
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  color: ${props => (props.to === '/login' ? '#3E85F3' : '#FFFFFF')};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  background-color: ${props => (props.to === '/login' ? '#FFFFFF' : '#3E85F3')};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ffee00;
    color: ${props => props.theme.colors.blue};
  }
  svg {
    margin-left: ${props => props.theme.space[3]}px;
    display: ${props => (props.to === '/login' ? 'block' : 'none')};
  }
  @media screen and (min-width: 768px) {
    width: 121px;
    height: 49px;
  }
`;

export const HomePageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 64px;
`;

export const ListItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  align-items: center;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 1107px;
    display: flex;
    justify-content: space-between;
    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
`;

export const ItemWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 275px;
  }
`;

export const ItemNumber = styled.p`
  font-size: ${props => props.theme.fontSizes.homePageNumber};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.blue};
  @media screen and (max-width: 1439px) {
    margin-top: 64px;
  }
`;

export const ItemTitle = styled.h2`
  display: inline;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.bxl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.blue};
  line-height: ${props => props.theme.lineHeights.l};
  background-color: ${props => props.theme.colors.blue2};
  border-radius: ${props => props.theme.radii.big2};
  padding: 8px 18px;
`;

export const ItemSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.bxl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black4};
  line-height: ${props => props.theme.lineHeights.l};
  @media screen and (max-width: 767px) {
    margin-top: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 14px;
  }
`;

export const ItemText = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.xl};
  @media screen and (max-width: 767px) {
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const ItemImg = styled.img`
  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 48px;
  }
`;
