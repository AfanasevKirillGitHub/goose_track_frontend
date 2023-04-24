import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CalendarMonitorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  width: 100%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const TextWrapperOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e85f3;
  color: ${props => props.theme.colors.white};
  padding: 8px 12px;
  border-radius: 8px;
  min-width: 173px;
  height: 100%;
`;

export const TextWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 0.9;
  text-transform: uppercase;
  color: #ffffff;
  min-width: 24px;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
`;

export const ChevronButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  padding: 8px 16px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  color: #616161;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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
  font-size: 16px;
  line-height: 1.125;
  color: #616161;

  margin-left: 16px;
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
  color: #3e85f3;
  padding: 9px 16px;
  background-color: #e3f3ff;
  min-width: 82px;
  &.active.act {
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
