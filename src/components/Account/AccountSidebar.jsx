import * as SC from './AccountSidebar.styled';
import goose from '../../images/goose.png';
import { useTranslation } from 'react-i18next';
import { accountPages } from '../../helpers/pages';
// import { NavLink } from 'react-router-dom';
import { LogOut } from '../LogOut/LogOut';

export const AccountSidebar = () => {
  const { t } = useTranslation();

  return (
    <SC.Sidebar>
      <SC.LogoWrapper>
        <SC.LogoImg src={goose} alt="logo goose" />
        <SC.Title>
          <SC.Span>Goose</SC.Span>Track
        </SC.Title>
      </SC.LogoWrapper>

      <SC.NavTitle>User Panel</SC.NavTitle>
      <SC.NavList>
        {accountPages.map(({ href, name, id }) => (
          <SC.NavItem key={id}>
            <SC.Link to={href}>{t(`${name}`)}</SC.Link>
          </SC.NavItem>
        ))}
      </SC.NavList>
      <LogOut />
    </SC.Sidebar>
  );
};
