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
import { newsApi } from './news/newsOperations';
import { petsApi } from './pets/petsOperations';
import { servicesApi } from './services/servicesOperations';
import { authSlice } from './auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer)!,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    newsApi.middleware,
    servicesApi.middleware,
    petsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
