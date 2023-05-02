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
interface ITaskListItem {
  design: string;
}

export const CalendarContainer = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CalendarGrid = styled.div<ICalendarGridProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${p =>
    p.isHeader ? 'rgba(220, 227, 229, 0.8)' : 'rgba(220, 227, 229, 0.8)'};
  ${p => p.isHeader && 'border-bottom: 1px solid #4d4c4d'}

  width: 100%;
  border: ${props => props.theme.borders.task};
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

  border: ${props => props.theme.borders.task};
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
    color: ${props => props.theme.colors.currentDay};
  }
`;

export const DayOfWeek = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  text-transform: uppercase;

  color: ${props => props.theme.colors.grey};
`;

export const CellWrapper = styled.div<ICellWrapperProps>`
  min-width: 100%;
  min-height: 94px;
  padding: 2px;
  padding-top: 8px;
  /* background-color: ${p => (p.isWeekend ? '#FFFFFF' : '#FFFFFF')}; */
  background-color: ${p => p.theme.colors.white};
  color: ${p =>
    p.isSelectedMonth ? p.theme.colors.black5 : p.theme.colors.grey6};

  @media screen and (min-width: 768px) {
    min-height: 144px;
    padding: 4px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 104px;
    padding-left: 8px;
    padding-right: 8px;
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
  background-color: ${props => props.theme.colors.currentDay};
  color: ${props => props.theme.colors.white3};
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
  margin-top: 4px;
`;

export const TasksListItem = styled.li<ITaskListItem>`
  /*  */
  position: relative;
  /*  */

  background-color: ${p => {
    switch (p.design) {
      case 'low':
        return p.theme.colors.blue2;
      case 'medium':
        return p.theme.colors.lightYellow;
      case 'high':
        return p.theme.colors.lightPink;
      default:
        return p.theme.colors.grey4;
    }
  }};
  color: ${p => {
    switch (p.design) {
      case 'low':
        return p.theme.colors.blue8;
      case 'medium':
        return p.theme.colors.yellow;
      case 'high':
        return p.theme.colors.pink;
      default:
        return p.theme.colors.grey8;
    }
  }};
  border-radius: ${props => props.theme.radii.normal};
  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeights.bold};
  padding: 4px 10px;

  :not(:last-child) {
    margin-bottom: 2px;
  }
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const TasksListItemDiv = styled.li`
  /*  */
  position: relative;
  /*  */

  display: inline-block;
  :not(:last-child) {
    margin-right: 5px;
  }
  @media screen and (max-width: 767px) {
    :nth-child(n + 3) {
      display: none;
    }
  }
`;

export const TasksListItemMany = styled(TasksListItem).attrs(() => ({
  as: 'div',
}))<ITaskListItem>`
  width: 20px;
  height: 20px;
`;

export const HoverText = styled.p`
  width: 140px;
  padding: 4px;
  border-radius: ${props => props.theme.radii.normal};
  word-wrap: break-word;
  color: ${props => props.theme.colors.white3};
  background-color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.bold};
  position: absolute;
  top: 30px;
  left: 20%;
  opacity: 0;
  z-index: 2;
  &.act {
    opacity: 1;
  }
`;
