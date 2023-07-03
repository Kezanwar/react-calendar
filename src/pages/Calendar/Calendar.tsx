import React from 'react';
import { motion } from 'framer-motion';

import { Logo } from '@app/components/elements/Logo';
import { IntroSection } from '../../components/sections/IntroSection';

const Calendar: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <IntroSection />
    </motion.main>
  );
};

export default Calendar;
