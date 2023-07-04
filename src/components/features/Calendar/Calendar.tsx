import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Calendar.module.scss';

// calendar utils
import { addMonths, subMonths } from 'date-fns';
import { getCalendarMonth } from '@app/util/calendar/calendar.util';

// redux
import { AppDispatch, RootState } from '@app/types/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsAction } from '@app/store/slices/events/events.actions';

// components
import { CalendarGrid } from './components';
import CalendarControls from './components/CalendarControls';

const Calendar: React.FC = () => {
  const [chosenMonth, setChosenMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const calMonth = useMemo(() => {
    const { calendarMonth, year, month } = getCalendarMonth(chosenMonth);

    return { calendarMonth, year, month };
  }, [chosenMonth]);

  const { calendarMonth, year, month } = calMonth;

  const dispatch: AppDispatch = useDispatch();
  const { loading, error, isFetched, stale } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    if (!loading && (!isFetched || stale)) {
      fetchEventsAction(dispatch);
    }
  }, []);

  const prev = useRef(new Date());

  const handleNextMonth = () => {
    const nextMonth = addMonths(chosenMonth, 1);
    setChosenMonth(nextMonth);
  };

  const handlePrevMonth = () => {
    const prevMonth = subMonths(chosenMonth, 1);
    setChosenMonth(prevMonth);
  };

  const handleUpdatePrevRef = () => {
    prev.current = chosenMonth;
  };

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date);
  };

  return (
    <div className="is-container">
      <div className="my-20 grid md:grid-cols-2  min-h-[70vh] overflow-x-hidden">
        <div className="w-full max-w-[100%] mx-auto lg:max-w-[500px] md:p-6 md:pt-12">
          <CalendarControls
            month={month}
            year={`${year}`}
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
          />

          <CalendarGrid
            calendarMonth={calendarMonth}
            key={chosenMonth.toISOString()}
            chosenMonth={chosenMonth}
            prev={prev.current}
            handleUpdatePrevRef={handleUpdatePrevRef}
            selectedDay={selectedDay}
            handleSelectDay={handleSelectDay}
          />
        </div>

        <div className=" p-2 md:border-l-[1px] md:border-l-gray-300 md:dark:border-l-gray-700 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Calendar;
