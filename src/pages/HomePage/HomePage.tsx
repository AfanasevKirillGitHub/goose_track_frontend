import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { signInWhithToken } from '../../redux/auth/authOperations';

export const HomePage = () => {
  const { token } = useGetSearchParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  if (token) {
    dispatch(signInWhithToken({ token }));
  }
  return <p>HomePage</p>;
};
