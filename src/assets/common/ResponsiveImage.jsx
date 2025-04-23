import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResponsiveImage = ({ 
  src, 
  webpSrc, 
  alt, 
  className, 
  width, 
  height,
  loading = "lazy",
  variants,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`img-${alt.replace(/\s+/g, '-')}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [alt]);
  
  return (
    <motion.div
      id={`img-${alt.replace(/\s+/g, '-')}`}
      className={`relative ${className || ''}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ width, height }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={isInView ? src : ''}
          alt={alt}
          className={`${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          aria-label={alt}
        />
      </picture>
    </motion.div>
  );
};

export default ResponsiveImage;