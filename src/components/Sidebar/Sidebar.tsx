import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { accountPages } from '../../helpers/pages';
import { LogoutBtn } from './LogoutBtn/LogoutBtn';
import { SVG } from '../../images';
import goose from '../../images/goose.png';
import * as SC from './Sidebar.styled';
import { CloseSidebarBtn } from './CloseSidebarBtn/CloseSidebarBtn';

export const AccountSidebar = () => {
  const { t } = useTranslation();

  const closeBurgerMenu = () => {
    const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
    mobileMenu.classList.toggle('is-open');
  };

  const closeOnClickByOverlay = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      closeBurgerMenu();
    }
  };

  return (
    <SC.MenuContainer id="menuContainer" onClick={closeOnClickByOverlay}>
      <SC.Sidebar id="sidebar">
        <div>
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
                <SC.Link to={href} onClick={() => closeBurgerMenu()}>
                  {href === 'account' ? <SVG.UserCheck /> : <SVG.Calendar />}{' '}
                  {t(`navigation.${name}`)}
                </SC.Link>
              </li>
            ))}
          </SC.NavList>
        </div>
        <LogoutBtn />
      </SC.Sidebar>
    </SC.MenuContainer>
  );
};
