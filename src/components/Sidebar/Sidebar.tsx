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

export const AccountSidebar = () => {
  const { t } = useTranslation();

  const toggleBurgerMenu = () => {
    const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = '';
  };

  const closeOnClickByOverlay = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      toggleBurgerMenu();
    }
  };

  // useEffect(() => {
  //   const closeModal = (evt: Event): void => {
  //     if (evt instanceof KeyboardEvent && evt.code === 'Escape') {
  //       toggleModal();
  //     }
  //   };
  //   window.addEventListener('keydown', closeModal);
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     window.removeEventListener('keydown', closeModal);
  //     document.body.style.overflow = '';
  //   };
  // }, [toggleModal]);

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
            <CloseSidebarBtn />
          </SC.LogoWrapper>

          <SC.NavTitle>{t`User Panel`}</SC.NavTitle>

          <SC.NavList>
            {accountPages.map(({ href, name, id }) => (
              <li key={id}>
                <SC.Link to={href} onClick={() => toggleBurgerMenu()}>
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
