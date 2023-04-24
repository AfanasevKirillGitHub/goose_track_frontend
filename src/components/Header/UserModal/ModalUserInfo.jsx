import { useTranslation } from 'react-i18next';
import { SVG } from '../../../images';
import { LogoutBtn } from '../../Sidebar/LogoutBtn/LogoutBtn';

import * as SC from './ModalUserInfo.styled';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

const modalUserRoot = document.querySelector('#user-modal');

export const ModalUserInfo = ({ toggleModal }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const coseModal = evt => {
      if (evt instanceof KeyboardEvent && evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', coseModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', coseModal);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.ModalUserInfo>
        <UserAvatar />
        <SC.Link to="account">
          <SVG.UserCheck />
          {t('My Account')}
        </SC.Link>
        <LogoutBtn design />
      </SC.ModalUserInfo>
    </SC.Overlay>,
    modalUserRoot
  );
};
