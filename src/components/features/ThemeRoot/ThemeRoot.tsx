import React, { ReactNode } from 'react';

import { RootState } from '@app/types/store';
import { useSelector } from 'react-redux';

type Props = {
  children: ReactNode;
};

const ThemeRoot: React.FC<Props> = ({ children }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <div className={`${mode || 'dark'} `}>
      <div
        className={`min-h-[100vh] ${
          mode !== 'dark'
            ? 'bg-gradient-to-r from-rose-50/40 via-purple-50/40 to-blue-50/40'
            : 'dark:bg-gray-950'
        }    `}
      >
        {children}
      </div>
    </div>
  );
};

export default ThemeRoot;
