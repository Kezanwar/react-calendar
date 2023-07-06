import React, { useMemo, useRef } from 'react';

// calendar utils
import { addMonths, subMonths } from 'date-fns';
import { getCalendarMonth } from '@app/util/calendar/calendar.util';

// redux
import { AppDispatch } from '@app/types/store';
import { useDispatch } from 'react-redux';

// components
import {
  CalendarGrid,
  CalendarControls,
  Schedule,
  CalendarDays
} from './components';
import { ErrorLottie } from '@app/components/elements/ErrorLottie';
import { LoadingSpinner } from '@app/components/elements/LoadingSpinner';
import useCalendarState from '@app/hooks/redux/useCalendarState';

import { useGetAllEventsQuery } from '@app/store/services/events.services';
import {
  handleSetChosenMonth,
  handleSetSelectedDay
} from '@app/store/slices/calendar/calendar.actions';

const Error: React.FC = () => {
  return (
    <div className="flex items-center py-4 gap-2">
      <ErrorLottie />
      <p className=" text-red-500 dark:text-red-400 text-[14px]">
        An error occured fetching your events, check your internet connection or
        refresh...
      </p>
    </div>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="flex items-center py-4 gap-2">
      <LoadingSpinner />
      <p className="__black-and-white text-[14px]">Loading your calendar</p>
    </div>
  );
};

const Calendar: React.FC = () => {
  const { chosenMonth, selectedDay } = useCalendarState();

  const calMonth = useMemo(() => {
    const { calendarMonth, year, month } = getCalendarMonth(chosenMonth);

    return { calendarMonth, year, month };
  }, [chosenMonth]);

  const { calendarMonth, year, month } = calMonth;

  const dispatch: AppDispatch = useDispatch();

  const { isLoading, isError } = useGetAllEventsQuery();

  const prev = useRef(new Date());

  const handleNextMonth = () => {
    const nextMonth = addMonths(chosenMonth, 1);
    dispatch(handleSetChosenMonth(nextMonth));
  };

  const handlePrevMonth = () => {
    const prevMonth = subMonths(chosenMonth, 1);
    dispatch(handleSetChosenMonth(prevMonth));
  };

  const handleUpdatePrevRef = () => {
    prev.current = chosenMonth;
  };

  const handleSelectDay = (date: Date) => {
    dispatch(handleSetSelectedDay(date));
  };

  return (
    <div className="is-container CalendarSection">
      <div className="my-20 grid md:grid-cols-2 max-w-[100vw] overflow-y-hidden  ">
        <div className="w-full max-w-[100%] mx-auto lg:max-w-[500px] md:p-6 md:pt-12">
          <CalendarControls
            month={month}
            year={`${year}`}
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
          />
          <CalendarDays />
          <CalendarGrid
            calendarMonth={calendarMonth}
            key={chosenMonth.toISOString()}
            chosenMonth={chosenMonth}
            prev={prev.current}
            handleUpdatePrevRef={handleUpdatePrevRef}
            selectedDay={selectedDay}
            handleSelectDay={handleSelectDay}
          />
          {isError && <Error />}
          {isLoading && <Loading />}
        </div>
        <div className="right-container p-2  w-full h-full mt-12 md:mt-0  md:p-6 md:pt-12">
          <div className="w-full max-w-[100%] mx-auto lg:max-w-[500px]">
            <Schedule selectedDay={selectedDay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
