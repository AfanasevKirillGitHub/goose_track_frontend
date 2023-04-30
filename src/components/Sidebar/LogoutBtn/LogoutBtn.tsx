import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import { ModalForLogOut } from './ModalForLogOut/ModalForLogOut';
import { SVG } from '../../../images';
import * as SC from './LogoutBtn.styled';

interface IProps {
  design?: boolean;
}

export const LogoutBtn = ({ design }: IProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SC.Button design={design} type="button" onClick={() => modalHandler()}>
        {t`Log Out`}
        <SVG.LogOutIcon />
      </SC.Button>

      {isModalOpen && (
        <Modal toggleModal={modalHandler}>
          <ModalForLogOut onCloseModal={modalHandler} />
        </Modal>
      )}
    </>
  );
};
