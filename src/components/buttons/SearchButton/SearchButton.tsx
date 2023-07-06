import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { PATH_SEARCH } from '@app/constants/paths.constants';

const iconStyles = {
  fontSize: '1.5rem',
  marginBottom: '-0.05rem'
};

const SearchButton: React.FC = () => {
  const location = useLocation();
  const isSearch = location.pathname === PATH_SEARCH;
  return (
    <Link
      to={PATH_SEARCH}
      className={`__black-and-white active:scale-75 p-2 ${
        isSearch ? 'text-rose-600 dark:text-teal-500' : ''
      }  transition-all`}
    >
      <FiSearch style={iconStyles} />
    </Link>
  );
};

export default SearchButton;
