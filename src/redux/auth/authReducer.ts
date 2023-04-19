import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  signInWhithToken,
} from './authOperations';

interface IInitialState {
  user: {
    name: null | string;
    email: null | string;
    birthday: null | string;
    phone: null | string;
    avatarURL: null | string;
  };
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const initialState: IInitialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, (state, _) => state)
      .addCase(signUp.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.email = payload.dataUser.email;
        state.user.birthday = payload.dataUser.birthday;
        state.user.phone = payload.dataUser.phone;
        state.user.avatarURL = payload.dataUser.avatarURL;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.pending, (state, _) => state)
      .addCase(signIn.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.email = payload.dataUser.email;
        state.user.birthday = payload.dataUser.birthday;
        state.user.phone = payload.dataUser.phone;
        state.user.avatarURL = payload.dataUser.avatarURL;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })
      .addCase(signInWhithToken.pending, (state, _) => state)
      .addCase(signInWhithToken.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signInWhithToken.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.email = payload.dataUser.email;
        state.user.birthday = payload.dataUser.birthday;
        state.user.phone = payload.dataUser.phone;
        state.user.avatarURL = payload.dataUser.avatarURL;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, (state, _) => state)
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.email = payload.dataUser.email;
        state.user.birthday = payload.dataUser.birthday;
        state.user.phone = payload.dataUser.phone;
        state.user.avatarURL = payload.dataUser.avatarURL;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});
