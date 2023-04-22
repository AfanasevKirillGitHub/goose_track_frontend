import { NavLink } from 'react-router-dom';
import * as SC from './CalendarMonitor.styled';
import { CurrentDay } from '../CalendarGrid/CalendarGrid.styled';

interface IProps {
  today: moment.Moment;
  todayHandler: () => void;
  nextHandler: () => void;
  prevHandler: () => void;
  currentDay?: boolean;
}

export const CalendarMonitor = ({
  today,
  prevHandler,
  nextHandler,
  todayHandler,
  currentDay,
}: IProps) => {
  return (
    <SC.CalendarMonitorWrapper>
      <SC.LeftWrapper>
        <div>
          {currentDay && <SC.TextWrapper>{today.format('D')}</SC.TextWrapper>}
          <SC.TitleWrapper>{today.format('MMMM')}</SC.TitleWrapper>
          <SC.TextWrapper>{today.format('YYYY')}</SC.TextWrapper>
        </div>
        <SC.ButtonsWrapper>
          <SC.ButtonWrapper type="button" onClick={prevHandler}>
            &lt;
          </SC.ButtonWrapper>
          <SC.ButtonWrapper type="button" onClick={todayHandler}>
            Today
          </SC.ButtonWrapper>
          <SC.ButtonWrapper type="button" onClick={nextHandler}>
            &gt;
          </SC.ButtonWrapper>
        </SC.ButtonsWrapper>
      </SC.LeftWrapper>
      <SC.ButtonsWrapper>
        <NavLink to="/calendar">Month/</NavLink>
        <NavLink to="/calendar/day">Day</NavLink>
      </SC.ButtonsWrapper>
    </SC.CalendarMonitorWrapper>
  );
};
