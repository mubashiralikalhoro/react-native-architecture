import { createSlice } from "@reduxjs/toolkit";

// init states
const initState = {
  resources: [{}],
  langID: "en",
};

// reducer
const resources = createSlice({
  name: "resources",
  initialState: initState,
  reducers: {
    setResources(state, action) {
      state.resources = action.payload;
    },
    setLangID(state, action) {
      state.langID = action.payload;
    },
  },
});

export const { setResources, setLangID } = resources.actions;
export default resources.reducer;
export const selectResources = (state) => state.resources.resources;
