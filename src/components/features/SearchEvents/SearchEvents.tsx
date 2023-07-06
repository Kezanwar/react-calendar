import React, { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { isBefore } from 'date-fns';

import { IEvent } from '@app/types/events';

import { useDebounce } from '@app/hooks/useDebounce';
import { useGetAllEventsQuery } from '@app/store/services/events.services';

import { EventItems } from '@app/components/features/EventItems';
import { ErrorLottie } from '@app/components/elements/ErrorLottie';
import { SearchEventsInput } from './components';
import { LoadingSpinner } from '@app/components/elements/LoadingSpinner';

const LoadingEvents: React.FC = () => {
  return (
    <div className="flex items-center gap-3 justify-center">
      <LoadingSpinner />{' '}
      <p className="__black-and-white text-center">Fetching your events...</p>
    </div>
  );
};

const EventsError: React.FC = () => {
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
const NoResults: React.FC = () => {
  return (
    <div className="mt-[-1rem]">
      {' '}
      <ErrorLottie />{' '}
      <p className="__black-and-white text-center">No results found...</p>
    </div>
  );
};

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);
  const [results, setResults] = useState<IEvent[]>([]);

  const [transPending, transSet] = useTransition();

  const { isLoading, data: events, isError } = useGetAllEventsQuery();

  const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue.length === 0) {
      transSet(() => {
        setResults([]);
      });
    }
    if (debouncedValue.length > 0 && !!events?.length) {
      transSet(() => {
        const matches = events
          .filter(
            (ev) =>
              ev.description
                .toLowerCase()
                .includes(debouncedValue.toLowerCase()) ||
              ev.title.toLowerCase().includes(debouncedValue.toLowerCase()) ||
              ev.location
                .toLowerCase()
                .includes(debouncedValue.toLowerCase()) ||
              ev.attendants.some((att) =>
                att.toLowerCase().includes(debouncedValue.toLowerCase())
              )
          )
          .sort((a, b) =>
            isBefore(new Date(b.startTime), new Date(a.startTime)) ? -1 : 1
          );
        setResults(matches);
      });
    }
  }, [debouncedValue, events]);

  const noResults = !!(
    !transPending &&
    debouncedValue.length > 0 &&
    !results?.length
  );

  const inputLoading = !!(
    searchValue.length !== 0 && searchValue.length !== debouncedValue.length
  );

  return (
    <div className="is-container">
      <div className="flex items-center justify-center pt-8">
        {isLoading && <LoadingEvents />}
        {isError && <EventsError />}
        {!isLoading && !isError && (
          <SearchEventsInput
            onChange={handleOnSearchChange}
            value={searchValue}
            loading={inputLoading}
          />
        )}
      </div>
      <div className="md:w-[80%]  lg:w-[50%] mx-auto py-16">
        {noResults && <NoResults />}

        {!noResults && (
          <EventItems withDate={true} withAddEvent={false} events={results} />
        )}
      </div>
    </div>
  );
};

export default Search;
