import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { ThemeProvider } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/authOperations';
import { Loader } from '../Loader/Loader';
import { ITheme } from '../../helpers/theme';
import {
  lightblue,
  darkblue,
  darkgreen,
  lightgreen,
} from '../../helpers/theme';
import { getTheme } from '../../redux/theme/themeReducer';
import { Router } from '../../routsConfig/router';

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
        {isRefreshing ? <Loader /> : <Router />}
      </ThemeProvider>
    </>
  );
};
