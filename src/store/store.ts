import { configureStore } from '@reduxjs/toolkit';

// reducers
import navReducer from './slices/nav/nav.slice';
import testimonialReducer from './slices/testimonials/testimonials.slice';
import projectReducer from './slices/recent-projects/recent-projects.slice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    recentProjects: projectReducer,
    testimonials: testimonialReducer
  }
});
