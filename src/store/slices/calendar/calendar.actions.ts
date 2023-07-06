import { AppDispatch } from '@app/types/store';
import { setChosenMonth, setSelectedDay } from './calendar.slice';

export const handleSetChosenMonth = (date: Date) => (dispatch: AppDispatch) => {
  dispatch(setChosenMonth(date.toISOString()));
};

export const handleSetSelectedDay = (date: Date) => (dispatch: AppDispatch) => {
  dispatch(setSelectedDay(date.toISOString()));
};
