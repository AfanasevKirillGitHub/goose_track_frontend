import { LoginForm } from '../../components/LoginForm/LoginForm';
import * as SC from './LoginPage.styled';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { useDispatch } from 'react-redux';
import { signInWhithToken } from '../../redux/auth/authOperations';

export const LoginPage = () => {
  const { token } = useGetSearchParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  if (token) {
    dispatch(signInWhithToken({ token }));
  }

  return (
    <SC.Main>
      <LoginForm />
    </SC.Main>
  );
};
