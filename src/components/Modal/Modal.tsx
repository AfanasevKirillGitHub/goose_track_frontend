import React, { useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { SVG } from '../../images';
import * as SC from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface IProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ toggleModal, children }: IProps) => {
  useEffect(() => {
    const closeModal = (evt: Event): void => {
      if (evt instanceof KeyboardEvent && evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', closeModal);
      // document.body.style.overflow = '';
      const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
      mobileMenu?.classList.contains('is-open') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = (evt: MouseEvent<HTMLElement>) => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        {children}
        <SC.CloseBtn type="button" onClick={toggleModal}>
          <SVG.CloseIcon />
        </SC.CloseBtn>
      </SC.Inner>
    </SC.Overlay>,

    modalRoot
  );
};
