import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { infoReducer } from './slice';

const infoPersistConfig = {
  key: 'info',
  storage,
};

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    // contacts: contactsReducer,
    info: persistReducer(infoPersistConfig, infoReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
