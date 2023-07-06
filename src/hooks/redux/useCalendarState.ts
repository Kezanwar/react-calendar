import { useSelector } from 'react-redux';
import { RootState } from '@app/types/store';

const useCalendarState = () => {
  const state = useSelector((state: RootState) => ({
    chosenMonth: new Date(state.calendar.chosenMonth),
    selectedDay: new Date(state.calendar.selectedDay)
  }));

  return state;
};

export default useCalendarState;
