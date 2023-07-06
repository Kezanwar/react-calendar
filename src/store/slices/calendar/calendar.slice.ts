import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types

interface calendarSliceState {
  chosenMonth: string;
  selectedDay: string;
}

const initialState: calendarSliceState = {
  chosenMonth: new Date().toISOString(),
  selectedDay: new Date().toISOString()
};

const calendarSlice = createSlice({
  name: 'calendarSlice',
  initialState,
  reducers: {
    setChosenMonth: (state, { payload }: PayloadAction<string>) => {
      state.chosenMonth = payload;
    },
    setSelectedDay: (state, { payload }: PayloadAction<string>) => {
      state.selectedDay = payload;
    }
  }
});

// export for use around the app
export const { setChosenMonth, setSelectedDay } = calendarSlice.actions;

// export for store
const calendarReducer = calendarSlice.reducer;

export default calendarReducer;
