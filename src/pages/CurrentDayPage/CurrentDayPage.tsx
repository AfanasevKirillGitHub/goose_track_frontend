import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarMonitor } from '../CalendarPage/CalendarMonitor/CalendarMonitor';
import * as SC from './CurrentDayPage.styled';
import { useNavigate } from 'react-router-dom';
import { TasksColumnsList } from '../../components/TasksColumnsList/TasksColumnsList';
import { useTranslation } from 'react-i18next';
import { STATUS } from '../../helpers/enums';

export const CurrentDayPage = () => {
  const { current } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  moment.updateLocale('en', { day: { dow: 1 } });

  const [today, setToday] = useState(moment(current));
  today.locale(t(`lang`)!);

  const totalDays = 7;
  const startDay = today.clone().startOf('isoWeek');
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => {
    const prevDay = today.clone().subtract(1, 'day');

    setToday(prevDay);
    navigate(`/user/calendar/day/${prevDay.format('YYYY-MM-DD')}`);
  };

  const nextHandler = () => {
    const nextDay = today.clone().add(1, 'day');

    setToday(nextDay);
    navigate(`/user/calendar/day/${nextDay.format('YYYY-MM-DD')}`);
  };

  const todayHandler = () => {
    setToday(moment());
    navigate(`/user/calendar/day/${moment().format('YYYY-MM-DD')}`);
  };

  const isCurrentDay = (day: moment.Moment): boolean => {
    return today.isSame(day, 'day');
  };

  const handleChangeDay = (dayItem: moment.Moment) => {
    setToday(moment(dayItem.format('YYYY-MM-DD')));
    navigate(`/user/calendar/day/${dayItem.format('YYYY-MM-DD')}`);
  };

  const isMobileView = window.innerWidth < 768;

  return (
    <SC.PageWrapper>
      <CalendarMonitor
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        todayHandler={todayHandler}
        today={today}
        currentDay={true}
      />
      <SC.CurrDayWrapper>
        <SC.WeekWrapper>
          {daysArray.map(dayItem => (
            <SC.DayOfWeek key={dayItem.format('DDMMYY')}>
              <span>
                {dayItem.format(isMobileView ? 'dd' : 'ddd').toUpperCase()}
              </span>
              <SC.CellWrapper onClick={() => handleChangeDay(dayItem)}>
                {isCurrentDay(dayItem) ? (
                  <SC.CurrentDay>{dayItem.format('D')}</SC.CurrentDay>
                ) : (
                  dayItem.format('D')
                )}
              </SC.CellWrapper>
            </SC.DayOfWeek>
          ))}
        </SC.WeekWrapper>
        <TasksColumnsList items={STATUS} currentDate={current!} />
      </SC.CurrDayWrapper>
    </SC.PageWrapper>
  );
};
