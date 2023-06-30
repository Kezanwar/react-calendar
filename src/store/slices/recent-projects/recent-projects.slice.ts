import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ErrorObject } from '@app/types/error';
import { Project } from '../../../types/projects';

// types

interface projectsSliceState {
  projects: Project[] | null;
  loading: boolean;
  error: string;
  isFetched: boolean;
}

const initialState: projectsSliceState = {
  projects: null,
  loading: false,
  error: '',
  isFetched: false
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
      state.isFetched = true;
      state.loading = false;
      state.error = '';
    },
    setProjectsError: (state, action: PayloadAction<ErrorObject>) => {
      state.projects = null;
      state.isFetched = true;
      state.loading = false;
      state.error = action.payload.message;
    },
    setProjectsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

// export for use around the app
export const { setProjectsSuccess, setProjectsError, setProjectsLoading } =
  projectSlice.actions;

// export for store
const projectReducer = projectSlice.reducer;

export default projectReducer;
