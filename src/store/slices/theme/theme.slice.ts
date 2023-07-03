import { createSlice } from '@reduxjs/toolkit';

// types

interface themeSliceState {
  mode: 'light' | 'dark';
}

const initialState: themeSliceState = {
  mode: 'dark'
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggle: (state) => {
      const newState = state.mode === 'light' ? 'dark' : 'light';
      state.mode = newState;
    }
  }
});

// export for use around the app
export const { toggle } = themeSlice.actions;

// export for store
const themeReducer = themeSlice.reducer;

export default themeReducer;
