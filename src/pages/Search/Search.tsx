import React, { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { SearchEventsInput } from '@app/components/form/SearchEventsInput';
import { useDebounce } from '@app/hooks/useDebounce';
import useEventsState from '@app/hooks/redux/useEventsState';
import { IEvent } from '@app/types/events';
import { EventItems } from '../../components/features/EventItems';
import { isBefore } from 'date-fns';
import { ErrorLottie } from '../../components/elements/ErrorLottie';

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

  const { events, loading, error } = useEventsState();

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
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="is-container">
        <div className="flex items-center justify-center pt-8">
          <SearchEventsInput
            onChange={handleOnSearchChange}
            value={searchValue}
            loading={inputLoading}
          />
        </div>
        <div className="md:w-[80%]  lg:w-[50%] mx-auto py-16">
          {noResults && <NoResults />}

          {!noResults && (
            <EventItems withDate={true} withAddEvent={false} events={results} />
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default Search;
