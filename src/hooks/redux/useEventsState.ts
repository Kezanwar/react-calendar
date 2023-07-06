import { useSelector } from 'react-redux';
import { RootState } from '@app/types/store';

const useEventsState = () => {
  const state = useSelector((state: RootState) => state.events);

  return state;
};

export default useEventsState;
