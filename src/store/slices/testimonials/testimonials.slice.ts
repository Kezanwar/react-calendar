import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Testimonial } from '@app/types/testimonials';
import { ErrorObject } from '@app/types/error';

// types

interface testimonialSliceState {
  testimonials: Testimonial[] | null;
  loading: boolean;
  error: string;
  isFetched: boolean;
}

const initialState: testimonialSliceState = {
  testimonials: null,
  loading: false,
  error: '',
  isFetched: false
};

const testimonialSlice = createSlice({
  name: 'testimonialSlice',
  initialState,
  reducers: {
    setTestimonialsSuccess: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
      state.isFetched = true;
      state.loading = false;
      state.error = '';
    },
    setTestimonialsError: (state, action: PayloadAction<ErrorObject>) => {
      state.testimonials = null;
      state.isFetched = true;
      state.loading = false;
      state.error = action.payload.message;
    },
    setTestimonialsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

// export for use around the app
export const {
  setTestimonialsSuccess,
  setTestimonialsError,
  setTestimonialsLoading
} = testimonialSlice.actions;

// export for store
const testimonialReducer = testimonialSlice.reducer;

export default testimonialReducer;
