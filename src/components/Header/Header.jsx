import * as SC from './Header.styled';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { UserInfo } from './UserInfo/UserInfo';
import { ThemeToogle } from './ThemeToogle/ThemeToogle';
import { OpenSidebarBtn } from '../Sidebar/OpenSidebarBtn/OpenSidebarBtn';

export const Header = () => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <SC.Header>
      <OpenSidebarBtn />
      <SC.HeaderTitle>
        {location.pathname === '/user/account' ? t`User Profile` : t`Calendar`}
      </SC.HeaderTitle>
      <SC.UserInfo>
        <ThemeToogle />
        <ChangeLngElem />
        <UserInfo />
      </SC.UserInfo>
    </SC.Header>
  );
};
