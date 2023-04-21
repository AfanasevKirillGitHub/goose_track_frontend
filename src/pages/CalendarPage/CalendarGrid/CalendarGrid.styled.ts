import styled from 'styled-components';

interface ICalendarGridProps {
  isHeader?: boolean;
}

interface ITopRopperInCellProps {
  justifyContent: string;
}
interface ICellWrapperProps {
  isWeekend?: boolean;
  isHeader?: boolean;
  isSelectedMonth?: boolean;
}

export const CalendarGrid = styled.div<ICalendarGridProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  grid-gap: 1px;
  background-color: ${p => (p.isHeader ? '#1e1f21' : '#4d4c4d')};
  ${p => p.isHeader && 'border-bottom: 1px solid #4d4c4d'}
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  min-width: 140px;
  min-height: ${p => (p.isHeader ? 40 : 80)}px;
  background-color: ${p => (p.isWeekend ? '#272829' : '#1e1f21')};
  color: ${p => (p.isSelectedMonth ? 'wheat' : '#4d4c4d')};
  ${p => p.isHeader && 'text-align:center'}
`;

export const TopRopperInCell = styled.div<ITopRopperInCellProps>`
  display: flex;
  justify-content: ${p => (p.justifyContent ? p.justifyContent : 'flex-start')};
`;

export const DayWrapper = styled.div`
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
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
