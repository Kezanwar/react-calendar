import React from 'react';

import { motion } from 'framer-motion';

import { useResponsive } from '@app/hooks/useResponsive';
import { Logo } from '@app/components/elements/Logo';
import { cndClass } from '@app/utilities/styles/styles.utilities';

const Home: React.FC = () => {
  const [isMobile, isTablet] = useResponsive();
  console.log({ isMobile, isTablet });
  console.log(
    cndClass([
      'default classes',
      isMobile ? 'mobile' : '',
      isTablet ? 'tablet' : ''
    ])
  );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Home"
    >
      <Logo />
      <h1>{isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}</h1>
    </motion.main>
  );
};

export default Home;
