import { useFetchTasksQuery } from '../../../redux/task/taskOperations';
import motivationGoose from '../../../images/MotivationGoose.png';
import * as SC from './MotivationGoose.styled';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const MotivationGoose = () => {
  const { data } = useFetchTasksQuery();
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      {data?.length > 0 && location.pathname.includes('/calendar') && (
        <SC.MotivationWrapper>
          <img src={motivationGoose} alt="logo" />
          <SC.WrapperText>
            <SC.HeaderTitle>
              {location.pathname === '/user/account'
                ? t`User Profile`
                : t`Calendar`}
            </SC.HeaderTitle>
            <SC.MotivationText>
              {' '}
              <SC.Accent>Let go</SC.Accent> of the past and focus on the
              present!
            </SC.MotivationText>
          </SC.WrapperText>
        </SC.MotivationWrapper>
      )}
      {data?.length > 0 && location.pathname.includes('/account') && (
        <SC.HeaderTitle>
          {location.pathname === '/user/account'
            ? t`User Profile`
            : t`Calendar`}
        </SC.HeaderTitle>
      )}
      {!data?.length && (
        <SC.HeaderTitle>
          {location.pathname === '/user/account'
            ? t`User Profile`
            : t`Calendar`}
        </SC.HeaderTitle>
      )}
    </>
  );
};