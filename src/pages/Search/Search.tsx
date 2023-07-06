import React, { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { motion } from 'framer-motion';

import { SearchEvents } from '@app/components/features/SearchEvents';

const Search: React.FC = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SearchEvents />
    </motion.main>
  );
};

export default Search;
