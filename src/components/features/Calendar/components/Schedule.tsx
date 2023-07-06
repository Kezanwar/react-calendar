import React, { Suspense, useMemo } from 'react';
import { format, isBefore, isSameDay } from 'date-fns';
import { TbChecklist } from 'react-icons/tb';
import { motion } from 'framer-motion';

import { AddEventBtn } from '@app/components/buttons/AddEventBtn';
import { LoadingSpinner } from '@app/components/elements/LoadingSpinner';
import { EventItems } from '@app/components/features/EventItems';
import { useGetAllEventsQuery } from '../../../../store/services/events.services';
import { capitalizeWord } from '../../../../util/strings/strings.util';

type Props = {
  selectedDay: Date;
};

const iStyle = { fontSize: '18px', marginLeft: '-3px' };

const Title: React.FC<Props> = ({ selectedDay }) => {
  return (
    <div>
      <p className="text-gray-500 text-[14px] mb-1 flex items-center gap-1">
        <TbChecklist style={iStyle} /> Schedule for
      </p>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[1.6rem] md:text-3xl lg:text-4xl border-b-2 border-b-gray-200 dark:border-b-gray-800 pb-3 mb-12"
      >
        {format(selectedDay, 'EEEE do MMM yyyy')}
      </motion.h3>
    </div>
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

const LoadingSchedule: React.FC = () => {
  return (
    <div className="flex items-center py-4 gap-2">
      <LoadingSpinner />
      <p className="__black-and-white text-[14px]">Loading schedule...</p>
    </div>
  );
};

const Schedule: React.FC<Props> = ({ selectedDay }) => {
  const { data: events } = useGetAllEventsQuery();

  const thisDayEvents = useMemo(() => {
    return events
      ? events
          .filter((ev) => isSameDay(new Date(ev.startTime), selectedDay))
          .sort((a, b) =>
            isBefore(new Date(a.startTime), new Date(b.startTime)) ? -1 : 1
          )
      : [];
  }, [selectedDay, events]);

  return (
    <div className="__black-and-white pb-16">
      <Title selectedDay={selectedDay} />
      <Suspense fallback={<LoadingSchedule />}>
        {!thisDayEvents?.length ? (
          <NoEventsMessage />
        ) : (
          <EventItems
            withAddEvent={false}
            withDate={false}
            events={thisDayEvents}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Schedule;
