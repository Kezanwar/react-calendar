import { days } from '@app/util/calendar/calendar.util';

const CalendarDays = () => {
  return (
    <div className="grid grid-cols-7 w-full grid-rows-7">
      {days.map((d) => {
        return (
          <div className={'__text  p-2 py-3 flex items-center justify-center'}>
            {d}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDays;