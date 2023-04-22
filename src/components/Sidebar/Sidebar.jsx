import { useTranslation } from 'react-i18next';
import { accountPages } from '../../helpers/pages';
import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { SVG } from '../../images';
import goose from '../../images/goose.png';
import * as SC from './Sidebar.styled';

export const AccountSidebar = () => {
  const { t } = useTranslation();

  return (
    <SC.Sidebar>
      <SC.LogoWrapper>
        <SC.LogoImg src={goose} alt="logo goose" />
        <SC.Title>
          G<SC.Span>oo</SC.Span>seTrack
        </SC.Title>
        <SC.ButtonClose type='button'><SVG.CloseIcon /></SC.ButtonClose>
      </SC.LogoWrapper>

      <SC.NavTitle>{t`User Panel`}</SC.NavTitle>

      <SC.NavList>
        {accountPages.map(({ href, name, id }) => (
          <SC.NavItem key={id}>
            <SC.Link to={href}>
              {href === 'account' ? <SVG.UserCheck /> : <SVG.Calendar />} {t(`navigation.${name}`)}
            </SC.Link>
          </SC.NavItem>
        ))}
      </SC.NavList>

      <LogoutBtn />
    </SC.Sidebar>
  );
};
