import { createSlice } from '@reduxjs/toolkit';

// types

interface navSliceState {
  mobileNavOpen: boolean;
}

const initialState: navSliceState = {
  mobileNavOpen: false
};

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    open: (state) => {
      state.mobileNavOpen = true;
    },
    close: (state) => {
      state.mobileNavOpen = false;
    },
    toggle: (state) => {
      state.mobileNavOpen = !state.mobileNavOpen;
    }
  }
});

// export for use around the app
export const { open, close, toggle } = navSlice.actions;

// export for store
const navReducer = navSlice.reducer;

export default navReducer;
