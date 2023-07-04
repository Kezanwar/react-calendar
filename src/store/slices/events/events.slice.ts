import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IEvent } from '@app/types/events';
import { ErrorObject } from '@app/types/error';

// types

interface eventsSliceState {
  events: IEvent[] | null;
  loading: boolean;
  error: string;
  isFetched: boolean;
  stale: boolean;
}

const initialState: eventsSliceState = {
  events: null,
  loading: false,
  error: '',
  isFetched: false,
  stale: false
};

const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState,
  reducers: {
    setEventsSuccess: (state, action: PayloadAction<IEvent[]>) => {
      state.events = action.payload;
      state.isFetched = true;
      state.loading = false;
      state.stale = false;
      state.error = '';
    },
    setEventsError: (state, action: PayloadAction<ErrorObject>) => {
      state.events = null;
      state.isFetched = true;
      state.loading = false;
      state.stale = false;
      console.log(action);
      state.error = action.payload.message;
    },
    setEventsStale: (state) => {
      state.stale = true;
    },
    setEventsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

// export for use around the app
export const { setEventsSuccess, setEventsError, setEventsLoading } =
  eventsSlice.actions;

// export for store
const eventsReducer = eventsSlice.reducer;

export default eventsReducer;
