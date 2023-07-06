import { useSelector } from 'react-redux';
import { RootState } from '@app/types/store';
import { useMemo } from 'react';

const useCalendarState = () => {
  const chosenMonth = useSelector(
    (state: RootState) => state.calendar.chosenMonth
  );
  const selectedDay = useSelector(
    (state: RootState) => state.calendar.selectedDay
  );

  const memoizedState = useMemo(() => {
    return {
      chosenMonth: new Date(chosenMonth),
      selectedDay: new Date(selectedDay)
    };
  }, [chosenMonth, selectedDay]);

  return memoizedState;
};

export default useCalendarState;
