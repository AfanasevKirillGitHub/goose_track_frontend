import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { Layout } from '../Layout/Layout';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/authOperations';
import { Loader } from '../Loader/Loader';
import { PrivateRout } from '../PrivateRoute/PrivateRoute';
import { RestrictedRout } from '../RestrictedRoute/RestrictedRoute';

const LoginPage = lazy(() =>
  import('../../pages/LoginPage/LoginPage').then(module => ({
    ...module,
    default: module.LoginPage,
  }))
);

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage').then(module => ({
    ...module,
    default: module.RegisterPage,
  }))
);

const AccountPage = lazy(() =>
  import('../../pages/AccountPage/AccountPage').then(module => ({
    ...module,
    default: module.AccountPage,
  }))
);

const CalendarPage = lazy(() =>
  import('../../pages/CalendarPage/CalendarPage').then(module => ({
    ...module,
    default: module.CalendarPage,
  }))
);

export const App = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/login"
              element={
                <RestrictedRout
                  redirectTo="/account"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRout
                  redirectTo="/account"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRout redirectTo="/" component={<AccountPage />} />
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRout redirectTo="/" component={<CalendarPage />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};