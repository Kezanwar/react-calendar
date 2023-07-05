import { createSlice } from '@reduxjs/toolkit';
import { getTheme, saveTheme } from '@app/services/storage';
import { ThemeMode } from '@app/types/theme';

// types

interface themeSliceState {
  mode: ThemeMode;
}

const initialState: themeSliceState = {
  mode: getTheme() || 'light'
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggle: (state) => {
      const newState = state.mode === 'light' ? 'dark' : 'light';
      state.mode = newState;
      saveTheme(newState);
    }
  }
});

// export for use around the app
export const { toggle } = themeSlice.actions;

// export for store
const themeReducer = themeSlice.reducer;

export default themeReducer;
