import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface SettingsState {
  langID: string;
}

// init states
const initState: SettingsState = {
  langID: 'en',
};

export type Settings = typeof initState.langID;

// reducer
const settings = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    setSettings(state, action: PayloadAction<Partial<SettingsState>>) {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setSettings } = settings.actions;
export default settings.reducer;

export const useSettingsStore = () => {
  const settings = useSelector((state: RootState) => state.settings);
  return settings;
};
