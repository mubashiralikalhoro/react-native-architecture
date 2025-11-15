import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// reducers
import settings, { SettingsState } from './reducer/settings';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings'],
};

const rootReducer = combineReducers({
  settings: settings,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//  root reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export interface RootState {
  settings: SettingsState;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
