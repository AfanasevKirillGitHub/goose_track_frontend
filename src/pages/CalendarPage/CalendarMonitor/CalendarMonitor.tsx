import moment from 'moment';
import { useTranslation } from 'react-i18next';
import 'moment/locale/uk';

import * as SC from './CalendarMonitor.styled';

interface IProps {
  today: moment.Moment;
  todayHandler: () => void;
  nextHandler: () => void;
  prevHandler: () => void;
  currentDay?: boolean;
}

export const CalendarMonitor = ({
  today,
  prevHandler,
  nextHandler,
  todayHandler,
  currentDay,
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
          <SC.ButtonWrapper type="button" onClick={prevHandler}>
            &lt;
          </SC.ButtonWrapper>
          <SC.ButtonWrapper type="button" onClick={todayHandler}>
            {t('Today')}
          </SC.ButtonWrapper>
          <SC.ButtonWrapper type="button" onClick={nextHandler}>
            &gt;
          </SC.ButtonWrapper>
        </SC.ButtonsWrapper>
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
