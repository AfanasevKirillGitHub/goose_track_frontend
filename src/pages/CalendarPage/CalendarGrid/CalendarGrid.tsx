import moment from 'moment';
import * as SC from './CalendarGrid.styled';
import { useFetchTasksQuery } from '../../../redux/task/taskOperations';

interface IProps {
  startDay: moment.Moment;
  today: moment.Moment;
}

export const CalendarGrid = ({ startDay, today }: IProps) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const { data } = useFetchTasksQuery(null);

  const isCurrentDay = (day: moment.Moment): boolean => {
    return moment().isSame(day, 'day');
  };

  const isSelectedMonth = (month: moment.Moment): boolean => {
    return today.isSame(month, 'month');
  };

  return (
    <main style={{ width: '1087px' }}>
      <SC.WeekWrapper>
        {[...Array(7)].map((_, idx) => (
          <SC.DayOfWeekItem key={idx}>
            <SC.DayOfWeek>
              {moment()
                .day(idx + 1)
                .format('ddd')
                .toUpperCase()}
            </SC.DayOfWeek>
          </SC.DayOfWeekItem>
        ))}
      </SC.WeekWrapper>
      <SC.CalendarGrid>
        {daysArray.map(dayItem => (
          <SC.Link
            to={`/user/calendar/day/${dayItem.format('YYYY-MM-DD')}`}
            key={dayItem.format('DDMMYY')}
          >
            <SC.CellWrapper
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
                <SC.TasksList>
                  {data
                    ?.filter(
                      ({ date }) => date === dayItem.format('YYYY-MM-DD')
                    )
                    .map(({ date, title }) => (
                      <li key={date}>{title?.slice(0, 8)}</li>
                    ))}
                </SC.TasksList>
              </SC.TopRopperInCell>
            </SC.CellWrapper>
          </SC.Link>
        ))}
      </SC.CalendarGrid>
    </main>
  );
};
