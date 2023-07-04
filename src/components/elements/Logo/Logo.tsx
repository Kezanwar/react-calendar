import React from 'react';

import './Logo.module.scss';
import { Link } from 'react-router-dom';
import { PATH_HOME } from '../../../constants/paths.constants';

type Props = {};

const Logo: React.FC<Props> = () => {
  return (
    <Link to={PATH_HOME}>
      <h1 className="Logo  text-4xl tracking-tighter font-extrabold dark:text-white">
        React{' '}
        <span className="text-transparent   bg-clip-text  bg-gradient-to-r from-rose-600 to-teal-300 ">
          Calendar.
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
