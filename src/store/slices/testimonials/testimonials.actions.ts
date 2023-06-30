// redux
import { AppDispatch } from '@app/types/store';
import {
  setTestimonialsLoading,
  setTestimonialsSuccess,
  setTestimonialsError
} from './testimonials.slice';

// api
import { getTestimonials } from '@app/api/testimonials.api';

// util
import { fetchErrorHandler } from '@app/utilities/api/api.utilities';

export const fetchTestimonialsAction = async (dispatch: AppDispatch) => {
  try {
    dispatch(setTestimonialsLoading(true));
    const res = await getTestimonials();
    dispatch(setTestimonialsSuccess(res?.data || null));
  } catch (error) {
    fetchErrorHandler({
      error,
      onError: (err) => dispatch(setTestimonialsError(err))
    });
  }
};
