import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../animations/variants';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;