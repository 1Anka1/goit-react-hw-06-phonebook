import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//REDUX
import rootReducer from './rootReducer';

const contactsPersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
