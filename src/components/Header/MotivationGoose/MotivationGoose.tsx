import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useFetchTasksQuery } from '../../../redux/task/taskOperations';
import { IMG, IMG2x } from '../../../images';

import * as SC from './MotivationGoose.styled';

export const MotivationGoose = () => {
  const { data } = useFetchTasksQuery(null);
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      {(data?.length as number) > 0 &&
        location.pathname.includes('/calendar') && (
          <SC.MotivationWrapper>
            <img
              srcSet={`${IMG.motivation} 1x, ${IMG2x.motivation2x} 2x`}
              alt="logo"
            />
            <SC.WrapperText>
              <SC.HeaderTitle>
                {location.pathname === '/user/account'
                  ? t`User Profile`
                  : t`Calendar`}
              </SC.HeaderTitle>
              <SC.MotivationText>
                {' '}
                <SC.Accent>{t('let go')}</SC.Accent> {t('focus')}
              </SC.MotivationText>
            </SC.WrapperText>
          </SC.MotivationWrapper>
        )}
      {(data?.length as number) > 0 &&
        location.pathname.includes('/account') && (
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
