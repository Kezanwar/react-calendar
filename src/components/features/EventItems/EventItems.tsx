import React from 'react';
import { motion } from 'framer-motion';
import { IEvent } from '@app/types/events';
import { cc, getColorByName } from '@app/util/styles/styles.util';
import { format } from 'date-fns';
import { AddEventBtn } from '@app/components/buttons/AddEventBtn';

type EventItemsProps = {
  events: IEvent[];
  withDate: boolean;
  withAddEvent: boolean;
};

const EventItems: React.FC<EventItemsProps> = ({
  events,
  withDate,
  withAddEvent
}) => {
  return (
    <div className="__black-and-white">
      {events.map((ev, i) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * Math.floor(i) }}
            key={ev.id}
            className={cc([
              '',
              i < events.length - 1
                ? ' mb-8 border-b-2 pb-10 border-b-gray-200 dark:border-b-gray-800'
                : ''
            ])}
          >
            <div className="flex justify-between gap-3">
              <div className="max-w-[80%]">
                {withDate && (
                  <p className="text-[14px] text-gray-500 mb-3">
                    {format(new Date(ev.startTime), 'EEE do MMM yyyy')}
                  </p>
                )}
                <h2 className="text-xl md:text-2xl mb-1">{ev.title}</h2>
                <p className="text-sm  text-gray-500 mb-4">
                  {ev.description + ' @ ' + ev.location}
                </p>
                <h4 className="mb-2 text-[14px] text-gray-500">Attendants</h4>
                <div className="flex flex-wrap gap-4">
                  {ev?.attendants?.length
                    ? ev.attendants.map((att) => {
                        const firstLetter = att.charAt(0);
                        return (
                          <div
                            key={ev.id + att}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={cc([
                                'h-6 aspect-square rounded-full flex justify-center items-center ',
                                getColorByName(firstLetter)
                              ])}
                            >
                              {firstLetter}
                            </div>
                            <p className="text-[12px]">{att}</p>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
              <div>
                <div className="flex items-center whitespace-nowrap justify-end gap-2">
                  <div className="bg-green-400 dark:bg-green-300 h-2 w-2 rounded-lg" />
                  <p className="text-[12px] text-right flex-1 ">
                    {format(new Date(ev.startTime), 'kk:mm aaa')}
                  </p>
                </div>
                <div className="flex items-center whitespace-nowrap justify-end gap-2">
                  <div className="bg-red-400 dark:bg-red-400 h-2 w-2 rounded-lg" />
                  <p className="text-[12px] text-right  flex-1">
                    {format(new Date(ev.endTime), 'kk:mm aaa')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
      {withAddEvent && (
        <div className="flex justify-end mt-12">
          <AddEventBtn />
        </div>
      )}
    </div>
  );
};

export default EventItems;
