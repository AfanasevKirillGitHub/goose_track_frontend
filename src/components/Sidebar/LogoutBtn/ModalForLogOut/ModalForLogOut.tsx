import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { logOut } from '../../../../redux/auth/authOperations';
import * as SC from './ModalForLogOut.styled';

interface IProps {
  onCloseModal: () => void;
}

export const ModalForLogOut = ({ onCloseModal }: IProps) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  return (
    <>
      <SC.ModalTitle>Do you really wanna fly away?</SC.ModalTitle>
      <SC.ModalList>
        <li>
          <SC.ItemBtn type="button" onClick={() => dispatch(logOut())}>
            Yes
          </SC.ItemBtn>
        </li>
        <li>
          <SC.ItemBtn type="button" onClick={onCloseModal}>
            No
          </SC.ItemBtn>
        </li>
      </SC.ModalList>
    </>
  );
};
