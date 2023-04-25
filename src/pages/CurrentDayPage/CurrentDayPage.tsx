import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarMonitor } from '../CalendarPage/CalendarMonitor/CalendarMonitor';
import * as SC from './CurrentDayPage.styled';
import { TaskModal } from '../../components/TaskModal';
import { useNavigate } from 'react-router-dom';
// import { ITaskToEdit } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { TasksColumnsList } from '../../components/TasksColumnsList/TasksColumnsList';

export const CurrentDayPage = () => {
  const { current } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const lang = localStorage.getItem('i18nextLng');

  // Fake Modal Data ---------------------

  const STATUS = ['todo', 'inprogress', 'done'];
  // const PRIORITY = ['low', 'medium', 'high'];

  // const TEMP_MODAL_DATA = {};
  // const TEMP_STATUS = 'todo';
  // const TEMP_MODAL_DATA: ITaskToEdit = {
  //   title: { [lang as string]: 'text' },
  //   start: '13:00',
  //   end: '13:13',
  //   date: 'data from back',
  //   status: TEMP_STATUS,
  //   priority: 'high1',
  // };

  const TEMP_MODAL_DATA = {
    title: 'Edit me',
    start: '11:00',
    end: '12:00',
    date: '2023-04-25',
    priority: 'low',
  };

  // Fake Modal Data ---------------------

  moment.updateLocale('en', { day: { dow: 1 } });
  moment.locale(t(`lang`)!);

  const [today, setToday] = useState(moment(current));

  // const [isOpenModal, setIsOpenModal] = useState(false);

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

  // const toggleModal = () => {
  //   setIsOpenModal(!isOpenModal);
  // };

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

  const modalData = Object.keys(TEMP_MODAL_DATA).length
    ? TEMP_MODAL_DATA
    : null;

  return (
    <main style={{ width: '1151px' }}>
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
        <SC.WeekWrapper>
          {daysArray.map(dayItem => (
            <SC.DayOfWeek key={dayItem.format('DDMMYY')}>
              <span>{dayItem.format('ddd').toUpperCase()}</span>
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
        <TasksColumnsList items={STATUS} currentDate={current} />
      </SC.PageWrapper>

      <ul>
        {STATUS.map(col => (
          <li key={col}>
            {/* <button type="button" onClick={toggleModal}>
              Open modal for {col}
            </button> */}
            {/* {isOpenModal && (
              <TaskModal
                status={col}
                data={modalData}
                closeModal={toggleModal}
              />
            )} */}
            <>
              <p>
                ADD task button
                <TaskModal status={col} data={null} />
              </p>

              <p>
                EDIT task button
                <TaskModal status={col} data={modalData} />
              </p>
              <br />
            </>
          </li>
        ))}
      </ul>
    </main>
  );
};
