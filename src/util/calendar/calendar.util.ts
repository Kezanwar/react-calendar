import {
  eachDayOfInterval,
  endOfWeek,
  format,
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

  return {
    calendarMonth: month,
    year: start.getFullYear(),
    month: format(start, 'MMM')
  };
};

export const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
