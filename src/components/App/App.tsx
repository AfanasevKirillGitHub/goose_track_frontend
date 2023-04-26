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

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);

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

const UserPage = lazy(() =>
  import('../../pages/UserPage/UserPage').then(module => ({
    ...module,
    default: module.UserPage,
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

const CurrentDayPage = lazy(() =>
  import('../../pages/CurrentDayPage/CurrentDayPage').then(module => ({
    ...module,
    default: module.CurrentDayPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage').then(module => ({
    ...module,
    default: module.NotFoundPage,
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
              path="/"
              element={
                <RestrictedRout
                  redirectTo="/user/calendar/month"
                  component={<HomePage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRout
                  redirectTo="/user/calendar/month"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRout
                  redirectTo="/user/calendar/month"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="user"
              element={<PrivateRout redirectTo="/" component={<UserPage />} />}
            >
              <Route
                path="account"
                element={
                  <PrivateRout redirectTo="/" component={<AccountPage />} />
                }
              />
              <Route
                path="calendar/month"
                element={
                  <PrivateRout redirectTo="/" component={<CalendarPage />} />
                }
              />
              <Route
                path="calendar/month/day/:current"
                element={
                  <PrivateRout redirectTo="/" component={<CurrentDayPage />} />
                }
              />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
