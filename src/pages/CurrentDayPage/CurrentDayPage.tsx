import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarMonitor } from '../CalendarPage/CalendarMonitor/CalendarMonitor';
import * as SC from './CurrentDayPage.styled';
import { TaskModal } from '../../components/TaskModal';
import { useNavigate } from 'react-router-dom';

export const CurrentDayPage = () => {
  const { current } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  moment.updateLocale('en', { day: { dow: 1 } });
  moment.locale(t(`lang`)!);

  const [today, setToday] = useState(moment(current));
  const [selectedDay, setSelectedDay] = useState(moment(current));

  const [isOpenModal, setIsOpenModal] = useState(false);

  const totalDays = 7;
  const startDay = today.clone().startOf('isoWeek');
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const prevHandler = () => {
    const prevDay = today.clone().subtract(1, 'day');
    if (prevDay.isBefore(startDay)) {
      setSelectedDay(startDay);
      setToday(startDay);
      navigate(`/user/day/${startDay.format('YYYY-MM-DD')}`);
    } else {
      setSelectedDay(prevDay);
      setToday(prevDay);
      navigate(`/user/day/${prevDay.format('YYYY-MM-DD')}`);
    }
  };

  const nextHandler = () => {
    const nextDay = today.clone().add(1, 'day');
    if (nextDay.isAfter(startDay.clone().add(6, 'day'))) {
      setSelectedDay(startDay.clone().add(6, 'day'));
      setToday(startDay.clone().add(6, 'day'));
      navigate(
        `/user/day/${startDay.clone().add(6, 'day').format('YYYY-MM-DD')}`
      );
    } else {
      setToday(nextDay);
      setSelectedDay(nextDay);
      navigate(`/user/day/${nextDay.format('YYYY-MM-DD')}`);
    }
  };

  const todayHandler = () => {
    setSelectedDay(moment());
    setToday(moment());
    navigate(`/user/day/${moment().format('YYYY-MM-DD')}`);
  };
  const isCurrentDay = (day: moment.Moment): boolean => {
    return selectedDay.isSame(day, 'day');
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
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
        <SC.WeekWrapper>
          {daysArray.map(dayItem => (
            <SC.DayOfWeek key={dayItem.format('DDMMYY')}>
              <span>{dayItem.format('ddd').toUpperCase()}</span>
              <SC.CellWrapper>
                {isCurrentDay(dayItem) ? (
                  <SC.CurrentDay>{dayItem.format('D')}</SC.CurrentDay>
                ) : (
                  dayItem.format('D')
                )}
              </SC.CellWrapper>
            </SC.DayOfWeek>
          ))}
        </SC.WeekWrapper>
      </SC.PageWrapper>

      <button type="button" onClick={toggleModal}>
        Open modal
      </button>
      {isOpenModal && <TaskModal data={null} closeModal={toggleModal} />}
    </main>
  );
};
