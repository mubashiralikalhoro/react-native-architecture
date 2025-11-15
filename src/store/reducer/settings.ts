import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export interface SettingsState {
  data: {
    langID: string;
  };
}

// init states
const initState: SettingsState = {
  data: {
    langID: 'en',
  },
};

// reducer
const settings = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    setSettings(state, action: PayloadAction<Partial<SettingsState['data']>>) {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setSettings } = settings.actions;
export default settings.reducer;

export const useSettingsStore = () => {
  const settings = useSelector((state: RootState) => state.settings);
  return settings;
};
