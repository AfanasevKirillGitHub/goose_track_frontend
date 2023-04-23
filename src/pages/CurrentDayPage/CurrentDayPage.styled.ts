import styled from 'styled-components';

interface ICellWrapperProps {
  isWeekend?: boolean;
  isHeader?: boolean;
  isSelectedMonth?: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  /* background-color: ${p => (p.isWeekend ? '#272829' : '#1e1f21')}; */
  color: black;
  ${p => p.isHeader && 'text-align:center'}
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 50%;

  width: 100%;
  height: 100%;
`;

export const WeekWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
`;

export const DaysWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
`;

export const DayOfWeek = styled.div``;

export const WeekAndDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  width: 100%;
`;
