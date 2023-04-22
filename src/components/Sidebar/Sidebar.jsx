import * as SC from './Sidebar.styled';
import goose from '../../images/goose.png';
import { useTranslation } from 'react-i18next';
import { accountPages } from '../../helpers/pages';
import { LogoutBtn } from '../LogoutBtn/LogoutBtn';

export const AccountSidebar = () => {
  const { t } = useTranslation();

  return (
    <SC.Sidebar>
      <SC.LogoWrapper>
        <SC.LogoImg src={goose} alt="logo goose" />
        <SC.Title>
          G<SC.Span>oo</SC.Span>seTrack
        </SC.Title>
      </SC.LogoWrapper>

      <SC.NavTitle>{t`User Panel`}</SC.NavTitle>

      <SC.NavList>
        {accountPages.map(({ href, name, id }) => (
          <SC.NavItem key={id}>
            <SC.Link to={href}>{t(`navigation.${name}`)}</SC.Link>
          </SC.NavItem>
        ))}
      </SC.NavList>

      <LogoutBtn />
    </SC.Sidebar>
  );
};
