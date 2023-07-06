import React from 'react';
import { motion } from 'framer-motion';

const Search: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    ></motion.main>
  );
};

export default Search;
