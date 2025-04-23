import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
        {title}
      </h2>
      {subtitle && (
        <p className="py-6 text-yellow-300 font-bold">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;