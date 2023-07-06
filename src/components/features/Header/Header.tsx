import React from 'react';

import { Logo } from '@app/components/elements/Logo';
import { ThemeToggle } from '@app/components/buttons/ThemeToggle';
import { SearchButton } from '../../buttons/SearchButton';

const Header: React.FC = (props) => {
  return (
    <header className="header">
      <div className="is-container flex justify-between items-center py-6 md:py-8">
        <Logo />
        <div className="flex items-center gap-3">
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
