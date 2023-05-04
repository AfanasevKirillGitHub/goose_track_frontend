import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { logOut } from '../../../../redux/auth/authOperations';
import * as SC from './ModalForLogOut.styled';

interface IProps {
  onCloseModal: () => void;
}

export const ModalForLogOut = ({ onCloseModal }: IProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handleLogout = async () => {
    await dispatch(logOut());

    document.location.reload();
  };

  return (
    <>
      <SC.ModalTitle>{t(`Do you really wanna fly away?`)}</SC.ModalTitle>
      <SC.ModalList>
        <SC.SecondaryItemBtn type="button" onClick={handleLogout}>
          {t(`Yes`)}
        </SC.SecondaryItemBtn>
        <SC.ItemBtn type="button" onClick={onCloseModal}>
          {t(`No`)}
        </SC.ItemBtn>
      </SC.ModalList>
    </>
  );
};
