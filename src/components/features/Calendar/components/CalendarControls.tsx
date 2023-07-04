import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

type Props = {
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
  month: string;
  year: string;
};

const lightIconStyles = { fontSize: '1.5rem' };

const buttonClass =
  'w-[40px] rounded-full flex items-center justify-center  aspect-square hover:bg-rose-100 hover:text-rose-600   dark:hover:text-teal-300 dark:hover:bg-gray-900 active:scale-75 transition-all';

const CalendarControls: React.FC<Props> = ({
  month,
  year,
  handleNextMonth,
  handlePrevMonth
}) => {
  return (
    <div className="__text flex items-center justify-between py-6">
      <div className="flex items-center gap-1 font-bold bg-black text-white dark:border-none  dark:bg-gray-900 dark:text-white p-3 rounded-md">
        <span className=" ">
          {month} {year}
        </span>
      </div>
      <div className="flex">
        <button className={buttonClass} onClick={handlePrevMonth}>
          <BiChevronLeft style={lightIconStyles} />
        </button>
        <button className={buttonClass} onClick={handleNextMonth}>
          <BiChevronRight style={lightIconStyles} />
        </button>
      </div>
    </div>
  );
};

export default CalendarControls;
