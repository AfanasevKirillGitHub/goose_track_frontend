import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CalendarMonitorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  /* background-color: #565759; */
  width: 100%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const TextWrapperOutline = styled.div`
  background-color: #3e85f3;
  padding: 8px 12px;
  border-radius: 8px;
`;

export const TextWrapper = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 0.9;
  margin-right: 10px;
  text-transform: uppercase;
`;

export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  padding: 10px 10px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  color: #616161;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #3e85f3;
  padding: 8px 16px;
  background-color: #e3f3ff;
  &.active {
    background-color: #3e85f350;
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
