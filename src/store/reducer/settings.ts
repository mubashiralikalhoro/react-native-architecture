import { createSlice } from '@reduxjs/toolkit';

// init states
const initState = {
  settings: {
    langID: 'en',
  },
};

export type Settings = typeof initState.settings;

// reducer
const settings = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    setLangID(state, action) {
      state.settings.langID = action.payload;
    },
  },
});

export const { setLangID } = settings.actions;
export default settings.reducer;

export const selectSettings = (state: any) =>
  state.settings.settings as Settings;
