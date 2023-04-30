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

  return (
    <>
      <SC.ModalTitle>{t(`Do you really wanna fly away?`)}</SC.ModalTitle>
      <SC.ModalList>
        <li>
          <SC.ItemBtn type="button" onClick={() => dispatch(logOut())}>
            {t(`Yes`)}
          </SC.ItemBtn>
        </li>
        <li>
          <SC.ItemBtn type="button" onClick={onCloseModal}>
            {t(`No`)}
          </SC.ItemBtn>
        </li>
      </SC.ModalList>
    </>
  );
};
