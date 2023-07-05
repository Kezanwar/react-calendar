import React from 'react';

import { Logo } from '@app/components/elements/Logo';
import { ThemeToggle } from '@app/components/buttons/ThemeToggle';

import './Header.module.scss';

const Header: React.FC = (props) => {
  return (
    <header className="header">
      <div className="is-container flex justify-between items-center py-6 md:py-8">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
