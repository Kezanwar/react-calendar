// redux
import { AppDispatch } from '@app/types/store';
import {
  setProjectsLoading,
  setProjectsSuccess,
  setProjectsError
} from './recent-projects.slice';

// api
import { getRecentProjects } from '../../../api/projects.api';

// util
import { fetchErrorHandler } from '@app/util/api/api.util';

export const fetchProjectsAction = async (dispatch: AppDispatch) => {
  try {
    dispatch(setProjectsLoading(true));
    const res = await getRecentProjects();
    dispatch(setProjectsSuccess(res?.data || null));
  } catch (error) {
    fetchErrorHandler({
      error,
      onError: (err) => dispatch(setProjectsError(err))
    });
  }
};
