import React, { useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import * as SC from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface IProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ toggleModal, children }: IProps) => {
  useEffect(() => {
    const coseModal = (evt: Event): void => {
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
      <SC.Inner>
        {children}
        <SC.CloseBtn type="button" onClick={toggleModal}>
          <ImCross size="16" />
        </SC.CloseBtn>
      </SC.Inner>
    </SC.Overlay>,

    modalRoot
  );
};
