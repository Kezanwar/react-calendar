import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// pages
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';

// config
import { PATH_HOME, PATH_SEARCH } from '../constants/paths.constants';

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  const elements = useRoutes([
    {
      path: PATH_HOME,
      element: <Home />
    },
    {
      path: PATH_SEARCH,
      element: <Search />
    },

    { path: '*', element: <Home /> }
  ]);
  const location = useLocation();
  if (!elements) return null;
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(elements, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Router;
