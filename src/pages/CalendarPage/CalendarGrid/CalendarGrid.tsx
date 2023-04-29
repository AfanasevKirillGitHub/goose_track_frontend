import moment from 'moment';
import * as SC from './CalendarGrid.styled';
import { useFetchTasksQuery } from '../../../redux/task/taskOperations';
import { useState } from 'react';
import { Loader } from '../../../components/Loader/Loader';

interface IProps {
  startDay: moment.Moment;
  today: moment.Moment;
}

export const CalendarGrid = ({ startDay, today }: IProps) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const [currentTitle, setCurrentTitle] = useState('');
  const showOnHover = (title: string) => {
    setCurrentTitle(title);
  };

  const { data, isLoading } = useFetchTasksQuery(null);

  const isCurrentDay = (day: moment.Moment): boolean => {
    return moment().isSame(day, 'day');
  };

  const isSelectedMonth = (month: moment.Moment): boolean => {
    return today.isSame(month, 'month');
  };

  const isMobileView = window.innerWidth < 768;

  return (
    <SC.CalendarContainer>
      {isLoading && <Loader />}
      <SC.WeekWrapper>
        {[...Array(7)].map((_, idx) => (
          <SC.DayOfWeekItem key={idx}>
            <SC.DayOfWeek>
              {isMobileView
                ? moment()
                    .day(idx + 1)
                    .format('dd')
                    .slice(0, 1)
                : moment()
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
                  {(function () {
                    const dayTasks = data?.filter(
                      ({ date }) => date === dayItem.format('YYYY-MM-DD')
                    );
                    return dayTasks?.map((todo, idx) => {
                      return dayTasks.length <= 2 ? (
                        <SC.TasksListItem
                          key={todo.title}
                          design={todo.priority}
                          onMouseEnter={() => showOnHover(todo.title)}
                          onMouseLeave={() => showOnHover('')}
                        >
                          {todo.title.slice(0, isMobileView ? 2 : 8)}
                          {todo.title.length > 8
                            ? '...'
                            : isMobileView
                            ? '...'
                            : null}
                          <SC.HoverText
                            className={
                              currentTitle === todo.title
                                ? 'act'
                                : 'visually-hidden'
                            }
                          >
                            {todo.title}
                          </SC.HoverText>
                        </SC.TasksListItem>
                      ) : (
                        <SC.TasksListItemDiv
                          key={todo.title}
                          onMouseEnter={() => showOnHover(todo.title)}
                          onMouseLeave={() => showOnHover('')}
                        >
                          <SC.TasksListItemMany
                            design={todo.priority}
                          ></SC.TasksListItemMany>
                          <SC.HoverText
                            className={
                              currentTitle === todo.title
                                ? 'act'
                                : 'visually-hidden'
                            }
                          >
                            {todo.title}
                          </SC.HoverText>
                        </SC.TasksListItemDiv>
                      );
                    });
                  })()}
                </SC.TasksList>
              </SC.TopRopperInCell>
            </SC.CellWrapper>
          </SC.Link>
        ))}
      </SC.CalendarGrid>
    </SC.CalendarContainer>
  );
};
