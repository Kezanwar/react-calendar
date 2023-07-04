import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { isBefore, isSameDay, isSameMonth, isToday } from 'date-fns';

import { cndClass } from '@app/util/styles/styles.util';

import { RootState } from '@app/types/store';

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

const itemDefaultClass = '__text p-2 py-3 flex items-center justify-center';

const itemBorderBottomClass =
  'border-b-[1px] border-b-gray-200 dark:border-b-gray-800';

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

    const { events } = useSelector((state: RootState) => state.events);

    const thisMonthEvents = useMemo(() => {
      return events?.filter((ev) =>
        isSameMonth(new Date(ev.startTime), chosenMonth)
      );
    }, [chosenMonth, events]);

    return (
      <motion.div
        onAnimationComplete={handleUpdatePrevRef}
        initial={{ x: isPrevious ? -80 : 80, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        className="grid grid-cols-7 w-full grid-rows-7"
      >
        {calendarMonth.map((date, i) => {
          const dayEvents = thisMonthEvents?.filter((ev) =>
            isSameDay(date, new Date(ev.startTime))
          );

          const l = dayEvents?.length;

          return (
            <div
              className={cndClass([
                itemDefaultClass,
                calendarMonth.length === 35 && i < 28
                  ? itemBorderBottomClass
                  : calendarMonth.length === 42 && i < 35
                  ? itemBorderBottomClass
                  : ''
              ])}
            >
              <button
                onClick={() => handleSelectDay(date)}
                className={cndClass([
                  buttonDefaultClass,
                  isToday(date)
                    ? ' bg-rose-50 text-black dark:bg-gray-800 dark:text-white hover:bg-rose-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    : '',
                  !isSameMonth(date, chosenMonth)
                    ? 'text-gray-300 dark:text-gray-800 pointer-events-none border-none'
                    : '',
                  isSameDay(selectedDay, date)
                    ? 'border-2 border-black dark:border-white'
                    : 'border-2 border-gray-200 dark:border-gray-800 hover:bg-slate-100 dark:hover:bg-gray-900'
                ])}
              >
                <p>{date.getDate()}</p>
                {l ? (
                  <div
                    className={cndClass([
                      'absolute top-0 right-0 translate-y-[-25%] p-1 w-[19px] h-[19px] flex items-center justify-center rounded-full text-[12px] font-bold ',
                      l === 1
                        ? 'bg-green-300 dark:bg-green-400 text-green-800'
                        : l < 3
                        ? 'bg-yellow-300 dark:bg-yellow-400 text-yellow-800'
                        : 'bg-red-300 dark:bg-red-400 text-red-800'
                    ])}
                  >
                    {l}
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
