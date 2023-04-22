import styled from 'styled-components';

export const CalendarMonitorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #565759;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.span`
  font-size: 32px;
  margin-right: 10px;
`;
export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  border: unset;
  cursor: pointer;
  background-color: #565759;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
`;
