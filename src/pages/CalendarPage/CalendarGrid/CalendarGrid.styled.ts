import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface ICalendarGridProps {
  isHeader?: boolean;
}

interface ITopRopperInCellProps {
  justifyContent: string;
}
interface ICellWrapperProps {
  isWeekend?: boolean;
  isSelectedMonth?: boolean;
}

export const CalendarGrid = styled.div<ICalendarGridProps>`
  border: 1px solid rgba(220, 227, 229, 0.8);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  grid-gap: 1px;
  background-color: ${p =>
    p.isHeader ? 'rgba(220, 227, 229, 0.8)' : 'rgba(220, 227, 229, 0.8)'};
  ${p => p.isHeader && 'border-bottom: 1px solid #4d4c4d'}
  width:100%;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: ${props => props.theme.radii.normal};

  overflow: hidden;
`;

export const WeekWrapper = styled.ul<ICellWrapperProps>`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  padding: 14px 0;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: ${props => props.theme.radii.normal};

  font-weight: 600;
  font-size: 14px;
  line-height: 1.286;
  color: #616161;
`;

export const DayOfWeekItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const DayOfWeek = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  text-transform: uppercase;

  color: #616161;
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  min-width: 120px;
  min-height: 104px;
  padding: 8px;
  background-color: ${p => (p.isWeekend ? '#FFFFFF' : '#FFFFFF')};
  color: ${p => (p.isSelectedMonth ? '#343434' : 'rgba(220, 227, 229, 0.8)')};
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const TopRopperInCell = styled.div<ITopRopperInCellProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${p => (p.justifyContent ? p.justifyContent : 'flex-start')};
`;

export const DayWrapper = styled.div`
  width: 27px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.125;
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.normal};
  width: 100%;
  height: 100%;
`;

export const ShowDaywrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TasksList = styled.ul`
  list-style: none;
  padding-left: 10px;
`;
