import React from 'react';

import './Logo.module.scss';

type Props = {};

const Logo: React.FC<Props> = () => {
  return (
    <h1 className="Logo  text-4xl tracking-tighter font-extrabold dark:text-white">
      React{' '}
      <span className="text-transparent   bg-clip-text bg-gradient-to-r from-orange-600 to-pink-400 ">
        Calendar.
      </span>
    </h1>
  );
};

export default Logo;
