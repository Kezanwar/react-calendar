import React, { ReactNode } from 'react';

import { RootState } from '@app/types/store';
import { useSelector } from 'react-redux';

import './ThemeRoot.module.scss';

type Props = {
  children: ReactNode;
};

const ThemeRoot: React.FC<Props> = ({ children }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <div className={`${mode || 'dark'} `}>
      <div className="min-h-[100vh] dark:bg-gray-950">{children}</div>
    </div>
  );
};

export default ThemeRoot;
