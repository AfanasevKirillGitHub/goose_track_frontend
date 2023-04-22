import { useTranslation } from 'react-i18next';
import { accountPages } from '../../helpers/pages';
import { LogoutBtn } from './LogoutBtn/LogoutBtn';
import { SVG } from '../../images';
import goose from '../../images/goose.png';
import * as SC from './Sidebar.styled';
import { CloseSidebarBtn } from './CloseSidebarBtn/CloseSidebarBtn';

export const AccountSidebar = () => {
  const { t } = useTranslation();

  return (
    <SC.Sidebar>
      <SC.LogoWrapper>
        <SC.LogoImg src={goose} alt="logo goose" />
        <SC.Title>
          G<SC.Span>oo</SC.Span>seTrack
        </SC.Title>
        <CloseSidebarBtn />
      </SC.LogoWrapper>

      <SC.NavTitle>{t`User Panel`}</SC.NavTitle>

      <SC.NavList>
        {accountPages.map(({ href, name, id }) => (
          <li key={id}>
            <SC.Link to={href}>
              {href === 'account' ? <SVG.UserCheck /> : <SVG.Calendar />} {t(`navigation.${name}`)}
            </SC.Link>
          </li>
        ))}
      </SC.NavList>

      <LogoutBtn />
    </SC.Sidebar>
  );
};
