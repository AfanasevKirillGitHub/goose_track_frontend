import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksApi } from './task/taskOperations';
import { reviewsApi } from './review/reviewOperations';
import { authSlice } from './auth/authReducer';
import { themeSlice } from './theme/themeReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer)!,
    [themeSlice.name]: persistReducer(themePersistConfig, themeSlice.reducer)!,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    tasksApi.middleware,
    reviewsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
