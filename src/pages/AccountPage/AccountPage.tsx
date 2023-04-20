import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { signInWhithToken } from '../../redux/auth/authOperations';

import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { MyInfo } from '../../components/MyInfo/MyInfo';

export const AccountPage = () => {
  const { token } = useGetSearchParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  if (token) {
    dispatch(signInWhithToken({ token }));
  }

  const modalHandler = (): void => {
    console.log('working');
  };
  return (
    <>
      <MyInfo />
      <AddPetBtn toggleModal={modalHandler} />
    </>
  );
};
