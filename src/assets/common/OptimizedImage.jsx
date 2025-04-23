import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { imageReveal } from '../../animations/variants';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  loading = "lazy",
  reveal = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  
  useEffect(() => {
    // Create new image to preload
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={reveal ? "hidden" : "visible"}
      animate={isLoaded && reveal ? "visible" : "hidden"}
      variants={imageReveal}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={`w-full h-full object-cover ${className}`}
          {...props}
        />
      ) : (
        <div 
          className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
    </motion.div>
  );
};

export default OptimizedImage;