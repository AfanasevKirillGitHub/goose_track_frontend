import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarMonitor } from '../CalendarPage/CalendarMonitor/CalendarMonitor';
import * as SC from './CurrentDayPage.styled';

export const CurrentDayPage = () => {
  const { current } = useParams();
  const { t } = useTranslation();
  moment.updateLocale('en', { day: { dow: 1 } });

  moment.locale(t(`lang`)!);
  const [today, setToday] = useState(moment(current));
  const [selectedDay, setSelectedDay] = useState(moment(current));

  const totalDays = 7;
  const startDay = today.clone().startOf('isoWeek');
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => {
    const prevDay = today.clone().subtract(1, 'day');
    if (prevDay.isBefore(startDay)) {
      setSelectedDay(startDay);
      setToday(startDay);
    } else {
      setSelectedDay(prevDay);
      setToday(prevDay);
    }
  };

  const nextHandler = () => {
    const nextDay = today.clone().add(1, 'day');
    if (nextDay.isAfter(startDay.clone().add(6, 'day'))) {
      setSelectedDay(startDay.clone().add(6, 'day'));
      setToday(startDay.clone().add(6, 'day'));
    } else {
      setToday(nextDay);
      setSelectedDay(nextDay);
    }
  };

  const todayHandler = () => {
    setSelectedDay(moment());
    setToday(moment());
  };
  const isCurrentDay = (day: moment.Moment): boolean => {
    return selectedDay.isSame(day, 'day');
  };

  return (
    <main style={{ width: '1151px' }}>
      <SC.PageWrapper>
        <CalendarMonitor
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          todayHandler={todayHandler}
          today={today}
          currentDay={true}
        />
        <SC.WeekAndDayWrapper>
          <SC.WeekWrapper>
            {daysArray.map((dayItem, idx) => (
              <SC.DayOfWeek key={idx}>
                {dayItem.format('ddd').toUpperCase()}
              </SC.DayOfWeek>
            ))}
          </SC.WeekWrapper>
          <SC.DaysWrapper>
            {daysArray.map(dayItem => (
              <div key={dayItem.format('DDMMYY')}>
                <SC.CellWrapper>
                  {isCurrentDay(dayItem) ? (
                    <SC.CurrentDay>{dayItem.format('D')}</SC.CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </SC.CellWrapper>
              </div>
            ))}
          </SC.DaysWrapper>
        </SC.WeekAndDayWrapper>
      </SC.PageWrapper>
    </main>
  );
};
