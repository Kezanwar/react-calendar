import React, { useMemo } from 'react';

import { motion } from 'framer-motion';
import { isBefore, isSameDay, isSameMonth, isToday } from 'date-fns';

import { cc } from '@app/util/styles/styles.util';

import { useGetAllEventsQuery } from '@app/store/services/events.services';

type Props = {
  chosenMonth: Date;
  calendarMonth: Date[];
  prev: Date;
  handleUpdatePrevRef: () => void;
  selectedDay: Date;
  handleSelectDay: (date: Date) => void;
};

const buttonDefaultClass =
  ' rounded-full flex items-center cursor-pointer justify-center w-[50px]  aspect-[1/1] active:scale-90 transition-all relative';

const itemDefaultClass =
  '__black-and-white p-2 py-3 flex items-center justify-center';

const itemBorderBottomClass =
  'border-b-[2px] border-b-gray-200 dark:border-b-gray-800';

const CalendarGrid: React.FC<Props> = React.memo(
  ({
    chosenMonth,
    calendarMonth,
    prev,
    handleUpdatePrevRef,
    selectedDay,
    handleSelectDay
  }) => {
    const isPrevious = isBefore(chosenMonth, prev);

    const { data: events } = useGetAllEventsQuery();

    const thisMonthEvents = useMemo(() => {
      return events?.filter((ev) =>
        isSameMonth(new Date(ev.startTime), chosenMonth)
      );
    }, [chosenMonth, events]);

    return (
      // calendar grid animated container
      // uses a previous and current reference *isPrevious* to decide which side to animate in from
      <motion.div
        onAnimationComplete={handleUpdatePrevRef}
        initial={{ x: isPrevious ? -80 : 80, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        className="grid grid-cols-7 w-full grid-rows-7"
      >
        {calendarMonth.map((date, i) => {
          // get count of events on this day for indicator
          const count = thisMonthEvents?.reduce((prevVal, currentEl) => {
            if (isSameDay(date, new Date(currentEl.startTime))) {
              return prevVal + 1;
            } else return prevVal;
          }, 0);

          return (
            // calendar grid item
            <div
              key={date.toISOString()}
              className={cc([
                itemDefaultClass,
                calendarMonth.length === 35 && i < 28
                  ? itemBorderBottomClass
                  : calendarMonth.length === 42 && i < 35
                  ? itemBorderBottomClass
                  : ''
              ])}
            >
              {/* calendar day button */}
              <button
                onClick={() => handleSelectDay(new Date(date))}
                className={cc([
                  buttonDefaultClass,
                  isToday(date)
                    ? ' bg-rose-50 text-black dark:bg-gray-800 dark:text-white hover:bg-rose-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    : '',
                  !isSameMonth(date, chosenMonth)
                    ? 'text-gray-300 dark:text-gray-800 pointer-events-none border-none'
                    : '',
                  isSameDay(selectedDay, date)
                    ? 'border-2 border-black dark:border-white'
                    : 'border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900'
                ])}
              >
                <p>{date.getDate()}</p>
                {/* number inidicator, using a ternary here to avoid printing 0 to the screen */}
                {count ? (
                  <div
                    className={cc([
                      'absolute top-0 right-0 translate-y-[-50%]  md:translate-y-[-35%] p-1 w-[19px] h-[19px] md:scale-105 flex items-center justify-center rounded-full text-[12px] font-bold ',
                      count === 1
                        ? 'bg-green-200 dark:bg-green-300 text-green-800'
                        : count < 3
                        ? 'bg-yellow-300 dark:bg-yellow-300 text-yellow-800'
                        : 'bg-red-300 dark:bg-red-300 text-red-800'
                    ])}
                  >
                    {count}
                  </div>
                ) : null}
              </button>
            </div>
          );
        })}
      </motion.div>
    );
  }
);

export default CalendarGrid;
