import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/authOperations';
import { ModalForLogOut } from './ModalForLogOut/ModalForLogOut';
import { SVG } from '../../../images';
import * as SC from './LogoutBtn.styled';

interface IProps {
  design?: boolean;
}

export const LogoutBtn = ({ design }: IProps) => {
  const { t } = useTranslation();
  // const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <SC.Button type="button" onClick={() => dispatch(logOut())}>
        {t`Log Out`}
        <SVG.LogOutIcon />
      </SC.Button> */}

      <SC.Button design={design} type="button" onClick={() => openModal()}>
        {t`Log Out`}
        <SVG.LogOutIcon />
      </SC.Button>

      {isModalOpen && <ModalForLogOut onClose={closeModal} />}
    </>
  );
};
