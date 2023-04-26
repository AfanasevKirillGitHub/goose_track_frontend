import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.blue2};
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 335px;
  padding: 40px 24px;
  margin-bottom: 18px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.normal};
  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.xl};
  color: ${props => props.theme.colors.blue};
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.l};
  color: ${props => props.theme.colors.black2};
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  border: ${props => props.theme.borders.task};
  border-radius: ${props => props.theme.radii.normal};
  margin-top: ${props => props.theme.space[3]}px;
  padding: 14px;
  &::placeholder {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: ${props => props.theme.lineHeights.xl};
    color: ${props => props.theme.colors.grey4};
    @media (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.m};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 287px;
  height: 44px;
  padding: 14px;
  margin-top: ${props => props.theme.space[5]}px;

  border: none;
  border-radius: ${props => props.theme.radii.medium};
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.button};

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.xl};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    margin-left: ${props => props.theme.space[3]}px;
    width: 18px;
    height: 18px;
  }
  &:hover,
  &:focus {
    background-color: #ffee00;
    color: ${props => props.theme.colors.blue};
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    font-size: ${props => props.theme.fontSizes.l};

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Div = styled.div`
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Notification = styled.span`
  position: absolute;
  font-size: 12px;
  left: 20px;
  bottom: -40%;
`;

export const Google = styled.a`
  height: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fontFamily.logo};
`;

export const Eye = styled.span`
  position: absolute;
  right: 15px;
  top: 70%;
  transform: translateY(-50%);
  cursor: pointer;
  fill: ${props => props.theme.colors.blue};

  @media (min-width: 768px) {
    right: 20px;
  }
`;

export const GooseImage = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    position: fixed;
    right: 60px;
    bottom: 20px;
    width: 370px;
    height: 520px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.lineHeights.xl};
  color: ${props => props.theme.colors.blue};

  :hover,
  :focus {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.m};
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Span = styled.span`
  font-size: ${props => props.theme.fontSizes.xl};
`;
