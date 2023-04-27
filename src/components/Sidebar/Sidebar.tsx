import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { accountPages } from '../../helpers/pages';
import { LogoutBtn } from './LogoutBtn/LogoutBtn';
import { AddReview } from '../review/addReview';
import { SVG } from '../../images';
import goose from '../../images/goose.png';
import { Modal } from '../Modal/Modal';
import * as SC from './Sidebar.styled';
import { CloseSidebarBtn } from './CloseSidebarBtn/CloseSidebarBtn';

interface IProps {
  toggleBurgerMenu: () => void;
}

export const AccountSidebar = ({ toggleBurgerMenu }: IProps ) => {
  const { t } = useTranslation();

// ======================== for closing Sidebar by navigate on accountPages if media screen less 1440 px
  const [isDesktop, setIsDesktop] = useState(false);
  
  const navigateByAccountPages = () => {
    if (window.innerWidth >= 1440) {
      return setIsDesktop(true);
    }

    return !isDesktop && closeSidebar();
  }

// ======================== for closing Sidebar by touching overlay
  const closeOnClickByOverlay = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      closeSidebar();
    }
  };
  
// ======================== for closing Sidebar by using "toggleBurgerMenu" and NOT hidden overlay
  const closeSidebar = () => {
    toggleBurgerMenu();
    document.body.style.overflow = '';
  };

// ======================== for leaving reviews
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
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
            <CloseSidebarBtn closeBurgerMenu={toggleBurgerMenu} />
          </SC.LogoWrapper>

          <SC.NavTitle>{t`User Panel`}</SC.NavTitle>

          <SC.NavList>
            {accountPages.map(({ href, name, id }) => (
              <li key={id}>
                <SC.Link to={href} onClick={navigateByAccountPages}>
                  {href === 'account' ? <SVG.UserCheck /> : <SVG.Calendar />}{' '}
                  {t(`navigation.${name}`)}
                </SC.Link>
              </li>
            ))}
          </SC.NavList>
        </div>

        <SC.ButtonReview onClick={toggleModal} type='button'>Leave review</SC.ButtonReview>

        <LogoutBtn />
        {isOpenModal && (
        <Modal toggleModal={toggleModal}>
            <AddReview />     
        </Modal>
      )}
      </SC.Sidebar>
    </SC.MenuContainer>
  );
};
