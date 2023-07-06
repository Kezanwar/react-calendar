import React, { ChangeEvent } from 'react';
import { LuCalendarSearch } from 'react-icons/lu';
import { LoadingSpinner } from '@app/components/elements/LoadingSpinner';

interface InputProps {
  value?: string | number;
  error?: boolean;
  disabled?: boolean;
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchEventsInput: React.FC<InputProps> = ({ loading, ...rest }) => {
  return (
    <div className="w-full max-w-[500px]">
      <p className="text-gray-500 text-[14px] mb-3 flex items-center gap-1">
        <LuCalendarSearch /> Search your calendar by event name, description or
        attendees
      </p>
      <div className="shadow-md  rounded-md dark:bg-gray-900 flex">
        <input
          placeholder="Start typing..."
          {...rest}
          className="w-full py-3 px-3 bg-transparent dark:text-white outline-none dark:placeholder:text-white placeholder:transition-all transition-all focus:placeholder:opacity-0"
        />
        <div className="w-[50px] flex items-center justify-center">
          {loading && <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
};

export default SearchEventsInput;
