// import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useState } from 'react';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { CalendarMonitor } from './CalendarMonitor/CalendarMonitor';
import { CalendarGrid } from './CalendarGrid/CalendarGrid';
import * as SC from './CalendarPage.styled';

import 'moment/locale/uk';
import { useTranslation } from 'react-i18next';

export const CalendarPage = () => {
  const { t } = useTranslation();

  moment.updateLocale('en', { week: { dow: 1 } });

  moment.locale(t(`lang`));

  // const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  //
  // const startDayQuery = startDay.clone().format('X');
  // const endDayQuery = startDay.clone().add(42, "days").format('X');
  //
  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };
  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };
  const todayHandler = () => {
    setToday(moment());
  };

  // const endDay = moment().endOf('month').endOf('week');

  // const calendar = [];
  // const day = startDay.clone();
  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, 'day');
  // }

  // startDay.format('YYYY-MM-DD');

  // const { t } = useTranslation();

  return (
    <div style={{ display: 'flex' }}>
      <SC.ShadowWrapper>
        <CalendarHeader />
        <CalendarMonitor
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          todayHandler={todayHandler}
          today={today}
        />
        <CalendarGrid startDay={startDay} today={today} />
      </SC.ShadowWrapper>
    </div>
  );
};
