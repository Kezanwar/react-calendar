import { configureStore } from '@reduxjs/toolkit';

// reducers
import themeReducer from '@app/store/slices/theme/theme.slice';
import eventsReducer from '@app/store/slices/events/events.slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    events: eventsReducer
  }
});
