import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  theme: 'lightblue',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

// Selectors
export const getTheme = (state: RootState) => state.theme.theme;
