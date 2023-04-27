import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarMonitor } from '../CalendarPage/CalendarMonitor/CalendarMonitor';
import * as SC from './CurrentDayPage.styled';
import { useNavigate } from 'react-router-dom';
import { TasksColumnsList } from '../../components/TasksColumnsList/TasksColumnsList';

export const CurrentDayPage = () => {
  const { current } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const lang = localStorage.getItem('i18nextLng');

  const STATUS = ['todo', 'inprogress', 'done'];

  moment.updateLocale('en', { day: { dow: 1 } });
  moment.locale(t(`lang`)!);

  const [today, setToday] = useState(moment(current));

  const totalDays = 7;
  const startDay = today.clone().startOf('isoWeek');
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const [nextDisabled, setNextDisabled] = useState(() => {
    const nextDay = today.clone().add(1, 'day');
    return nextDay.isAfter(startDay.clone().add(6, 'day')) ? true : false;
  });
  const [prevDisabled, setPrevDisabled] = useState(() => {
    const prevDay = today.clone().subtract(1, 'day');
    return prevDay.isBefore(startDay) ? true : false;
  });

  const prevHandler = () => {
    const prevDay = today.clone().subtract(1, 'day');
    if (
      prevDay.clone().format('YYYY-MM-DD') ===
        today.clone().startOf('isoWeek').format('YYYY-MM-DD') &&
      prevDay.clone().format('YYYY-MM-DD') !==
        today.clone().endOf('isoWeek').format('YYYY-MM-DD')
    ) {
      setPrevDisabled(true);
    }

    if (prevDay.isBefore(startDay)) {
      setPrevDisabled(true);
      setToday(startDay);
      navigate(`/user/calendar/day/${startDay.format('YYYY-MM-DD')}`);
    } else {
      setNextDisabled(false);
      setToday(prevDay);
      navigate(`/user/calendar/day/${prevDay.format('YYYY-MM-DD')}`);
    }
  };

  const nextHandler = () => {
    const nextDay = today.clone().add(1, 'day');
    if (
      nextDay.clone().format('YYYY-MM-DD') ===
        today.clone().endOf('isoWeek').format('YYYY-MM-DD') &&
      nextDay.clone().format('YYYY-MM-DD') !==
        today.clone().startOf('isoWeek').format('YYYY-MM-DD')
    ) {
      setNextDisabled(true);
      setToday(startDay.clone().add(6, 'day'));
      navigate(
        `/user/calendar/day/${startDay
          .clone()
          .add(6, 'day')
          .format('YYYY-MM-DD')}`
      );
    } else {
      setPrevDisabled(false);

      setToday(nextDay);
      navigate(`/user/calendar/day/${nextDay.format('YYYY-MM-DD')}`);
    }
  };

  const todayHandler = () => {
    setPrevDisabled(false);
    setNextDisabled(false);
    setToday(moment());
    navigate(`/user/calendar/day/${moment().format('YYYY-MM-DD')}`);
  };

  const isCurrentDay = (day: moment.Moment): boolean => {
    return today.isSame(day, 'day');
  };

  const handleChangeDay = (dayItem: moment.Moment) => {
    if (
      dayItem.clone().format('YYYY-MM-DD') ===
        today.clone().startOf('isoWeek').format('YYYY-MM-DD') &&
      dayItem.clone().format('YYYY-MM-DD') !==
        today.clone().endOf('isoWeek').format('YYYY-MM-DD')
    ) {
      setPrevDisabled(true);
      setNextDisabled(false);
    }
    //
    else if (
      dayItem.clone().format('YYYY-MM-DD') ===
        today.clone().endOf('isoWeek').format('YYYY-MM-DD') &&
      dayItem.clone().format('YYYY-MM-DD') !==
        today.clone().startOf('isoWeek').format('YYYY-MM-DD')
    ) {
      setNextDisabled(true);
      setPrevDisabled(false);
    } else {
      setPrevDisabled(false);
      setNextDisabled(false);
    }

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
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
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
