import moment from 'moment';
import * as SC from './CalendarGrid.styled';
import { useFetchTasksQuery } from '../../../redux/task/taskOperations';
import { useGetSearchParams } from '../../../hooks/useGetSearchParams';

interface IProps {
  startDay: moment.Moment;
  today: moment.Moment;
}

export const CalendarGrid = ({ startDay, today }: IProps) => {
  const { lang } = useGetSearchParams();
  const targetDateClick = (day: moment.Moment) => {
    localStorage.setItem('data', JSON.stringify(day.format('YYYY-MM-DD')));
  };

  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const { data } = useFetchTasksQuery({ lang });
  console.log(data);

  const isCurrentDay = (day: moment.Moment): boolean => {
    return moment().isSame(day, 'day');
  };

  const isSelectedMonth = (month: moment.Moment): boolean => {
    return today.isSame(month, 'month');
  };

  return (
    <main style={{ width: '1151px' }}>
      <SC.CalendarGrid isHeader>
        {[...Array(7)].map((_, idx) => (
          <SC.CellWrapper isHeader key={idx} isSelectedMonth>
            {moment()
              .day(idx + 1)
              .format('ddd')
              .toUpperCase()}
          </SC.CellWrapper>
        ))}
      </SC.CalendarGrid>
      <SC.CalendarGrid>
        {daysArray.map(dayItem => (
          <SC.Link to="day" key={dayItem.format('DDMMYY')}>
            <SC.CellWrapper
              onClick={() => targetDateClick(dayItem)}
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
                      ({ date }) =>
                        date >= dayItem.format('X') &&
                        date <= dayItem.clone().endOf('day').format('X')
                    )
                    .map(({ date, title }) => (
                      <li key={date}>
                        {title['en']
                          ? title['en']?.slice(0, 8)
                          : title['ua']?.slice(0, 8)}
                      </li>
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
