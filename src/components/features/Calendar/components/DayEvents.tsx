import React, { useMemo } from 'react';
import { format, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';
import { RootState } from '@app/types/store';

import { AddEventBtn } from '@app/components/buttons/AddEventBtn';

import { IEvent } from '@app/types/events';
import { cc } from '@app/util/styles/styles.util';

type Props = {
  selectedDay: Date;
};

const Title: React.FC<Props> = ({ selectedDay }) => {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-4xl border-b-2 border-b-gray-200 dark:border-b-gray-800 pb-3 mb-12"
    >
      {format(selectedDay, 'EEEE do MMM yyyy')}
    </motion.h3>
  );
};

const NoEventsMessage: React.FC = () => {
  return (
    <motion.div
      className="min-h-[30vh]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-gray-400 dark:text-gray-600">
        You haven't got any events for this day yet...
      </p>
      <AddEventBtn className="mt-6" />
    </motion.div>
  );
};

type EventItemsProps = {
  events: IEvent[];
};

const EventItems: React.FC<EventItemsProps> = ({ events }) => {
  return (
    <motion.div className="">
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
            <div className="flex justify-between">
              <div className="max-w-[80%]">
                <h2 className="text-2xl mb-1">{ev.title}</h2>
                <p className="text-sm  text-gray-500 mb-4">{ev.description}</p>
                <h4 className="mb-2 text-[14px] text-gray-500">Attendants</h4>
                <div className="flex flex-wrap gap-4">
                  {ev?.attendants?.length
                    ? ev.attendants.map((att) => {
                        return (
                          <div className="flex items-center gap-2">
                            <img
                              className="h-6 aspect-square rounded-full"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <p className="text-[12px]">{att}</p>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
              <div>
                <p className="text-[12px] text-right dark:font-semibold mb-2 bg-green-50 dark:bg-green-200 p-1 rounded-md text-green-800">
                  {format(new Date(ev.startTime), 'kk:mm aaa')}
                </p>
                <p className="text-[12px] text-right dark:font-semibold bg-red-50 dark:bg-red-300 p-1 rounded-md text-red-800">
                  {format(new Date(ev.endTime), 'kk:mm aaa')}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
      <div className="flex justify-end mt-12">
        <AddEventBtn />
      </div>
    </motion.div>
  );
};

const DayEvents: React.FC<Props> = ({ selectedDay }) => {
  const { events } = useSelector((state: RootState) => state.events);

  const thisDayEvents = useMemo(() => {
    return events
      ? events.filter((ev) => isSameDay(new Date(ev.startTime), selectedDay))
      : [];
  }, [selectedDay, events]);

  return (
    <div className="__text pb-16">
      <Title selectedDay={selectedDay} />

      {!thisDayEvents?.length ? (
        <NoEventsMessage />
      ) : (
        <EventItems events={thisDayEvents} />
      )}
    </div>
  );
};

export default DayEvents;
