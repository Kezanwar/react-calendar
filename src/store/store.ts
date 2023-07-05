import { configureStore } from '@reduxjs/toolkit';

// reducers
import themeReducer from '@app/store/slices/theme/theme.slice';
import eventsReducer from '@app/store/slices/events/events.slice';
import calendarReducer from '@app/store/slices/calendar/calendar.slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    events: eventsReducer,
    calendar: calendarReducer
  }
});
