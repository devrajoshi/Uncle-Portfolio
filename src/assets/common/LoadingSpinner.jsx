import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white dark:bg-black">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="ml-4 text-lg font-medium text-gray-800 dark:text-gray-200">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;