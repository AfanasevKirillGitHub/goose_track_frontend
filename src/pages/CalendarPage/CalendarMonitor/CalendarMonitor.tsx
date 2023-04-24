import moment from 'moment';
import { useTranslation } from 'react-i18next';
import 'moment/locale/uk';

import * as SC from './CalendarMonitor.styled';
import { SVG } from '../../../images';

interface IProps {
  today: moment.Moment;
  todayHandler?: () => void;
  nextHandler: () => void;
  prevHandler: () => void;
  currentDay?: boolean;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
}

export const CalendarMonitor = ({
  today,
  prevHandler,
  nextHandler,
  todayHandler,
  currentDay,
  nextDisabled,
  prevDisabled,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <SC.CalendarMonitorWrapper>
      <SC.LeftWrapper>
        <SC.TextWrapperOutline>
          {currentDay && <SC.TextWrapper>{today.format('D')}</SC.TextWrapper>}
          <SC.TitleWrapper>{today.format('MMMM')}</SC.TitleWrapper>
          <SC.TextWrapper>{today.format('YYYY')}</SC.TextWrapper>
        </SC.TextWrapperOutline>
        <SC.ButtonsWrapper>
          <SC.ChevronButton
            type="button"
            onClick={prevHandler}
            disabled={prevDisabled}
            style={{
              transform: 'rotate(180deg)',
              color: prevDisabled ? '#DCE3E5' : '#616161',
            }}
          >
            <SVG.Chevron />
          </SC.ChevronButton>
          <SC.ChevronButton
            type="button"
            onClick={nextHandler}
            disabled={nextDisabled}
            style={{
              color: nextDisabled ? '#DCE3E5' : '#616161',
            }}
          >
            <SVG.Chevron />
          </SC.ChevronButton>
        </SC.ButtonsWrapper>
        <SC.TodayButton type="button" onClick={todayHandler}>
          {t('Today')}
        </SC.TodayButton>
      </SC.LeftWrapper>
      <SC.ButtonsWrapper>
        <SC.LinkMonth to="/user/calendar">{t('Month')}</SC.LinkMonth>
        <SC.LinkDay to={`/user/day/${today.format('YYYY-MM-DD')}`}>
          {t('Day')}
        </SC.LinkDay>
      </SC.ButtonsWrapper>
    </SC.CalendarMonitorWrapper>
  );
};
