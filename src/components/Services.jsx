import React, { useState } from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaArrowRight } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { staggerContainer, fadeInUp } from "../animations/variants";

const Services = () => {
  const { ref, controls } = useScrollAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "I build responsive and dynamic web applications using the latest web technologies like React, Node.js, and more.",
      icon: <FaCode />,
      color: "from-blue-600 to-indigo-800",
      shadowColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Creating optimized mobile applications with responsive designs for Android and iOS using React Native and other modern frameworks.",
      icon: <FaMobileAlt />,
      color: "from-purple-600 to-pink-700",
      shadowColor: "rgba(147, 51, 234, 0.5)",
    },
    {
      id: 3,
      title: "Database Management",
      description:
        "Managing and optimizing databases for performance, scalability, and reliability using MongoDB, MySQL, and more.",
      icon: <FaDatabase />,
      color: "from-green-600 to-teal-700",
      shadowColor: "rgba(16, 185, 129, 0.5)",
    },
    {
      id: 4,
      title: "Data Analysis",
      description:
        "Transform raw data into actionable insights. I analyze trends, patterns, and customer behavior to support informed, data-driven decisions.",
      icon: <MdAnalytics />,
      color: "from-yellow-500 to-orange-600",
      shadowColor: "rgba(245, 158, 11, 0.5)",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 0.6,
      },
    },
  };

  const backgroundBlobVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 0.2, 0.1],
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      name="services"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-8 text-white overflow-hidden relative"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-blue-600 filter blur-[100px] opacity-10 -z-10"
        variants={backgroundBlobVariants}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-purple-600 filter blur-[120px] opacity-10 -z-10"
        variants={backgroundBlobVariants}
      />

      <div className="max-w-screen-xl mx-auto">
        <motion.div className="text-center mb-8 sm:mb-12" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-400">
            Services
          </h2>
          <p className="py-4 sm:py-6 font-bold text-yellow-300 text-base sm:text-lg">
            What I can do for you
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="relative h-full"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`h-full rounded-xl overflow-hidden bg-gradient-to-br ${service.color} p-4 sm:p-6 md:p-8 flex flex-col`}
                initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                animate={{
                  boxShadow:
                    hoveredCard === service.id
                      ? `0px 10px 20px ${service.shadowColor}`
                      : "0px 5px 15px rgba(0,0,0,0.2)",
                  y: hoveredCard === service.id ? -5 : 0,
                  scale: hoveredCard === service.id ? 1.02 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className="bg-white/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-3xl mb-4 sm:mb-6 backdrop-blur-sm"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <motion.div
                  className="mt-auto flex items-center text-white/90 font-medium cursor-pointer group text-sm sm:text-base"
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: hoveredCard === service.id ? 1 : 0.8,
                  }}
                  whileHover={{ opacity: 1 }}
                >
                  <span>Learn more</span>
                  <motion.div
                    className="ml-2"
                    initial={{ x: 0 }}
                    animate={{
                      x: hoveredCard === service.id ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-10 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-bold text-base sm:text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
