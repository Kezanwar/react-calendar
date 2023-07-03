import {
  eachDayOfInterval,
  endOfWeek,
  lastDayOfMonth,
  startOfMonth,
  startOfWeek
} from 'date-fns';

export const getCalendarMonth = (arg = new Date()) => {
  const start = startOfMonth(arg);
  const last = lastDayOfMonth(start);

  const month = eachDayOfInterval({
    start: startOfWeek(start),
    end: endOfWeek(last)
  });

  return month;
};
