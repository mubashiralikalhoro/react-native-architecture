import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

// reducers
import settings from './reducer/settings';

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings'],
};

const rootReducer = combineReducers({
  settings: settings,
});

const persistReducer = persistReducer(persistConfig, rootReducer);

//  root reducer
export const store = configureStore({
  reducer: persistReducer,
});

export const persistor = persistStore(store);
