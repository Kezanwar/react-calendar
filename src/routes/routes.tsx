import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// guards

// layouts

// pages
import Home from '../pages/Home/Home';
import { PATH_ADD_EVENT, PATH_HOME } from '../constants/paths.constants';

// config

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  const elements = useRoutes([
    {
      path: PATH_HOME,
      element: <Home />
    },
    {
      path: PATH_ADD_EVENT,
      element: <Home />
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
