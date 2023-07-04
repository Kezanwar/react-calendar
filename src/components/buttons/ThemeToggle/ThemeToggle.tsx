import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/types/store';
import { toggle } from '@app/store/slices/theme/theme.slice';

import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

import './ThemeToggle.module.scss';

const darkIconStyles = {
  color: 'black',
  fontSize: '1.5rem',
  marginBottom: '-0.05rem'
};
const lightIconStyles = {
  color: 'white',
  fontSize: '1.5rem',
  marginBottom: '-0.10rem'
};

const ThemeToggle: React.FC = (props) => {
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(toggle());

  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={toggleTheme}
      className="__text p-2 active:scale-75 transition-all flex items-center gap-2 "
    >
      {mode === 'light' ? (
        <>
          <MdOutlineDarkMode style={darkIconStyles} />
          <span className="hidden lg:inline">Dark mode</span>
        </>
      ) : (
        <>
          <MdOutlineWbSunny style={lightIconStyles} />
          <span className="hidden lg:inline">Light mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
