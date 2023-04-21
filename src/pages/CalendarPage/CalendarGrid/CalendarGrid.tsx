import moment from 'moment';
import * as SC from './CalendarGrid.styled';

interface IProps {
  startDay: moment.Moment;
  today: moment.Moment;
}

export const CalendarGrid = ({ startDay, today }: IProps) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day: moment.Moment): boolean => {
    return moment().isSame(day, 'day');
  };

  const isSelectedMonth = (month: moment.Moment): boolean => {
    return today.isSame(month, 'month');
  };

  return (
    <>
      <SC.CalendarGrid isHeader>
        {[...Array(7)].map((_, idx) => (
          <SC.CellWrapper isHeader key={idx} isSelectedMonth={true}>
            {moment()
              .day(idx + 1)
              .format('ddd')
              .toUpperCase()}
          </SC.CellWrapper>
        ))}
      </SC.CalendarGrid>
      <SC.CalendarGrid>
        {daysArray.map(dayItem => (
          <SC.CellWrapper
            key={dayItem.format('DDMMYY')}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <SC.TopRopperInCell justifyContent={'flex-end'}>
              <SC.ShowDaywrapper>
                <SC.DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <SC.CurrentDay>{dayItem.format('D')}</SC.CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </SC.DayWrapper>
              </SC.ShowDaywrapper>
              <ul style={{ paddingLeft: '10px' }}>
                <li>tasks</li>
                <li>tasks</li>
              </ul>
            </SC.TopRopperInCell>
          </SC.CellWrapper>
        ))}
      </SC.CalendarGrid>
    </>
  );
};
