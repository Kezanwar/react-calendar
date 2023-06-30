import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// guards

// layouts

// pages
import Home from '../pages/Home/Home';

// config

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  const elements = useRoutes([
    {
      path: '/',
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
