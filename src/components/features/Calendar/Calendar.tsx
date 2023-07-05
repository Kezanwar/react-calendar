import React, { useEffect, useMemo, useRef, useState } from 'react';

// calendar utils
import { addMonths, startOfMonth, subMonths } from 'date-fns';
import { getCalendarMonth } from '@app/util/calendar/calendar.util';

// redux
import { AppDispatch, RootState } from '@app/types/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsAction } from '@app/store/slices/events/events.actions';

// components
import { CalendarGrid, CalendarControls, DayEvents } from './components';
import CalendarDays from './components/CalendarDays';

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
    // setSelectedDay(startOfMonth(nextMonth));
  };

  const handlePrevMonth = () => {
    const prevMonth = subMonths(chosenMonth, 1);
    setChosenMonth(prevMonth);
    // setSelectedDay(startOfMonth(prevMonth));
  };

  const handleUpdatePrevRef = () => {
    prev.current = chosenMonth;
  };

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date);
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
        </div>
        <div className="right-container p-2  w-full h-full mt-12 md:mt-0  md:p-6 md:pt-12">
          <div className="w-full max-w-[100%] mx-auto lg:max-w-[500px]">
            <DayEvents selectedDay={selectedDay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
