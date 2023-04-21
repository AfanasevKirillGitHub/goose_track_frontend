import * as SC from './CalendarMonitor.styled';

interface IProps {
  today: moment.Moment;
  todayHandler: () => void;
  nextHandler: () => void;
  prevHandler: () => void;
}

export const CalendarMonitor = ({
  today,
  prevHandler,
  nextHandler,
  todayHandler,
}: IProps) => {
  return (
    <SC.CalendarMonitorWrapper>
      <div>
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
    </SC.CalendarMonitorWrapper>
  );
};
