// redux
import { AppDispatch } from '@app/types/store';

import {
  setEventsLoading,
  setEventsSuccess,
  setEventsError
} from './events.slice';

// api
import { getEvents } from '@app/api/events.api';

// util
import { fetchErrorHandler } from '@app/util/api/api.util';

export const fetchEventsAction = async (dispatch: AppDispatch) => {
  try {
    dispatch(setEventsLoading(true));
    const res = await getEvents();
    if (!res?.data) {
      fetchErrorHandler({
        error: res?.data,
        onError: (err) => dispatch(setEventsError(err))
      });
    } else dispatch(setEventsSuccess(res?.data || null));
  } catch (error) {
    fetchErrorHandler({
      error,
      onError: (err) => dispatch(setEventsError(err))
    });
  }
};
