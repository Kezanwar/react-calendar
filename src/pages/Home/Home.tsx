import React from 'react';
import { motion } from 'framer-motion';

import { Calendar } from '@app/components/features/Calendar';

const Home: React.FC = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Calendar />
    </motion.main>
  );
};

export default Home;
