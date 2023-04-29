import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { signInWithToken } from '../../redux/auth/authOperations';
import { HomePageHeader } from '../../components/HomePage/HomePageHeader';
import { HomePageMain } from '../../components/HomePage/HomePageMain';
import { HomePageWrapper } from '../../components/HomePage/HomePage.styled';

export const HomePage = () => {
  const { token } = useGetSearchParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  if (token) {
    dispatch(signInWithToken({ token }));
  }
  return (
    <>
      <HomePageHeader />
      <HomePageWrapper>
        <div className="container">
          <HomePageMain />
        </div>
      </HomePageWrapper>
    </>
  );
};
