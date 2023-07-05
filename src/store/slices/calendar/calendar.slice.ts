import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// types

interface calendarSliceState {
  chosenMonth: Date;
  selectedDay: Date;
}

const initialState: calendarSliceState = {
  chosenMonth: new Date(),
  selectedDay: new Date()
};

const calendarSlice = createSlice({
  name: 'calendarSlice',
  initialState,
  reducers: {
    setChosenMonth: (state, { payload }: PayloadAction<Date>) => {
      state.chosenMonth = payload;
    },
    setSelectedDay: (state, { payload }: PayloadAction<Date>) => {
      state.selectedDay = payload;
    }
  }
});

// export for use around the app
export const { setChosenMonth, setSelectedDay } = calendarSlice.actions;

// export for store
const calendarReducer = calendarSlice.reducer;

export default calendarReducer;
