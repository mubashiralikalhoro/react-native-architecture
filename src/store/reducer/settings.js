import {createSlice} from '@reduxjs/toolkit';

// init states
const initState = {
  settings: {
    langID: 'en',
  },
};

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

export const {setLangID} = settings.actions;
export default settings.reducer;
export const selectSettings = state => state.settings.settings;
