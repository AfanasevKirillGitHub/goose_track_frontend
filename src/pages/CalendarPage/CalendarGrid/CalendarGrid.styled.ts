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

export const CalendarContainer = styled.div`
  width: 100%;
  padding-top: 12px;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CalendarGrid = styled.div<ICalendarGridProps>`
  border: 1px solid rgba(220, 227, 229, 0.8);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
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

  background-color: ${props => props.theme.colors.white};

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

  &:nth-last-child(2) > span,
  &:nth-last-child(1) > span {
    color: ${props => props.theme.colors.blue};
  }
`;

export const DayOfWeek = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  text-transform: uppercase;

  color: #616161;
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  min-width: 100%;
  min-height: 94px;
  padding: 8px;
  background-color: ${p => (p.isWeekend ? '#FFFFFF' : '#FFFFFF')};
  color: ${p => (p.isSelectedMonth ? '#343434' : 'rgba(220, 227, 229, 0.8)')};

  @media screen and (min-width: 768px) {
    min-height: 144px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 104px;
  }
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
  width: 21px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.1667;

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const CurrentDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    border-radius: ${props => props.theme.radii.normal};
  }
`;

export const ShowDaywrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TasksList = styled.ul`
  list-style: none;
  padding-left: 10px;
`;
