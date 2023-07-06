import { configureStore } from '@reduxjs/toolkit';

// reducers
import themeReducer from '@app/store/slices/theme/theme.slice';
import calendarReducer from '@app/store/slices/calendar/calendar.slice';
import { eventsApi } from '@app/store/services/events.services';

export const store = configureStore({
  reducer: {
    // states
    theme: themeReducer,
    calendar: calendarReducer,

    // queries
    [eventsApi.reducerPath]: eventsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware)
});
