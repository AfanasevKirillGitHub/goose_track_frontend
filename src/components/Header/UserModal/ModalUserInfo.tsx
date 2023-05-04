import { createPortal } from 'react-dom';
import { MouseEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { SVG } from '../../../images';
import { LogoutBtn } from '../../Sidebar/LogoutBtn/LogoutBtn';
import * as SC from './ModalUserInfo.styled';

const modalUserRoot = document.querySelector('#user-modal') as HTMLElement;

interface IProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

export const ModalUserInfo = ({ toggleModal, children }: IProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const coseModal = (evt: Event) => {
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

  const closeOnClick = (evt: MouseEvent<HTMLElement>) => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.ModalUserInfo>
        {children}
        <SC.Link to="account" onClick={closeOnClick}>
          <SVG.UserCheck />
          {t('My Account')}
        </SC.Link>
        <LogoutBtn design />
      </SC.ModalUserInfo>
    </SC.Overlay>,
    modalUserRoot
  );
};
