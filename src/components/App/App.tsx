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
import CalendarRedirect from '../../pages/CalendarPage/CalendarRedirect';
import { ITheme } from '../../helpers/theme';

import { ThemeProvider } from 'styled-components';
import {
  lightblue,
  darkblue,
  darkgreen,
  lightgreen,
} from '../../helpers/theme';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeReducer';

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
  const currentTheme = useSelector(getTheme);

  let choosenTheme: ITheme = lightblue;

  const getNewTheme = (currentTheme: string) => {
    switch (currentTheme) {
      case 'darkblue':
        choosenTheme = darkblue;
        break;
      case 'darkgreen':
        choosenTheme = darkgreen;
        break;
      case 'lightblue':
        choosenTheme = lightblue;
        break;
      case 'lightgreen':
        choosenTheme = lightgreen;
        break;

      default:
        return choosenTheme;
    }
  };

  getNewTheme(currentTheme);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <ThemeProvider theme={choosenTheme}>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <RestrictedRout
                    redirectTo="/user/calendar"
                    component={<HomePage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRout
                    redirectTo="/user/calendar"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/registration"
                element={
                  <RestrictedRout
                    redirectTo="/user/calendar"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="user"
                element={
                  <PrivateRout redirectTo="/" component={<UserPage />} />
                }
              >
                <Route
                  path="account"
                  element={
                    <PrivateRout redirectTo="/" component={<AccountPage />} />
                  }
                />
                <Route
                  path="calendar"
                  element={
                    <PrivateRout
                      redirectTo="/"
                      component={<CalendarRedirect />}
                    />
                  }
                >
                  <Route
                    path="month"
                    element={
                      <PrivateRout
                        redirectTo="/"
                        component={<CalendarPage />}
                      />
                    }
                  />
                </Route>
                <Route
                  path="calendar/day/:current"
                  element={
                    <PrivateRout
                      redirectTo="/"
                      component={<CurrentDayPage />}
                    />
                  }
                />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        )}
      </ThemeProvider>
    </>
  );
};
