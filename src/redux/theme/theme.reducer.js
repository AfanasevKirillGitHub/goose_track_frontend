import { createReducer } from '@reduxjs/toolkit';
import { themeAction } from '../theme/theme.action';

const themeInitialState = localStorage.getItem('theme') || 'lightblue';

export const themeReducer = createReducer(themeInitialState, builder => {
  builder.addCase(themeAction, (state, action) => {
    localStorage.setItem('theme', action.payload);
    return (state = action.payload);
  });
});
