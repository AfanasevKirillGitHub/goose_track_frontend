import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CalendarMonitorWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`;
export const TextWrapperOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.currentDay};

  color: ${props => props.theme.colors.white};
  padding: 8px 12px;
  border-radius: 8px;
  height: 100%;
  min-width: 155px;

  @media screen and (min-width: 768px) {
    min-width: 173px;
  }
`;

export const TextWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.286;

  text-transform: uppercase;

  color: ${props => props.theme.colors.white3};
  min-width: 24px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const ChevronButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChevronButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  padding: 7px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey};

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  &:disabled {
    color: ${props => props.theme.colors.grey9};
  }

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
  }
`;

export const HiddenTitle = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  :active,
  :focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;

export const TodayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  font-weight: 500;
  font-size: 12px;
  line-height: 1.1667;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey};

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  color: #616161;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.navLink};
  padding: 9px 16px;
  background-color: ${props => props.theme.colors.monitorLink};
  min-width: 82px;
  &.active.act {
    background-color: ${props => props.theme.colors.monitorActiveLink};
  }
`;

export const LinkMonth = styled(Link)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const LinkDay = styled(Link)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
