import * as SC from './Header.styled';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';

export const Header = () => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <SC.Header>
      <SC.HeaderTitle>
        {location.pathname === '/user/account' ? t`User Profile` : t`Calendar`}
      </SC.HeaderTitle>
      <ChangeLngElem />
    </SC.Header>
  );
};
