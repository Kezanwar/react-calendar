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
    setChosenMonth: (state, { payload }: PayloadAction<Date>) => {
      state.chosenMonth = payload.toISOString();
    },
    setSelectedDay: (state, { payload }: PayloadAction<Date>) => {
      state.selectedDay = payload.toISOString();
    }
  }
});

// export for use around the app
export const { setChosenMonth, setSelectedDay } = calendarSlice.actions;

// export for store
const calendarReducer = calendarSlice.reducer;

export default calendarReducer;
