import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/store';
import { fetchEventsAction } from '../../store/slices/events/events.actions';
import { Calendar } from '../../components/features/Calendar';

const Home: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Calendar />
    </motion.main>
  );
};

export default Home;
