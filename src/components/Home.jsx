import React, { useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/heroImage.uncle.png";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import facebookIcon from "../assets/social icons/facebook.svg";
import xIcon from "../assets/social icons/x.svg";
import linkedinIcon from "../assets/social icons/linkedin.svg";

const Home = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Start animations when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    initial: {
      x: -100,
      opacity: 0,
      rotateY: 45,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      rotate: -3,
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const socialIconVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 1.2 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 1.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const arrowVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 90,
      x: 5,
      transition: { duration: 0.3 },
    },
  };

  const backgroundCircleVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500 dark:bg-blue-700 filter blur-[100px] -z-10"
          variants={backgroundCircleVariants}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500 dark:bg-purple-700 filter blur-[100px] -z-10"
          variants={backgroundCircleVariants}
        />

        <div ref={ref} className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left side - Content */}
            <motion.div
              className="w-full lg:w-3/5 order-2 lg:order-1 text-center lg:text-left"
              initial="initial"
              animate={controls}
              variants={itemVariants}
            >
              <motion.h4
                className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-yellow-400 mb-2"
                variants={itemVariants}
              >
                HELLO THERE!
              </motion.h4>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-white"
                variants={itemVariants}
              >
                I'm{" "}
                <span className="font-heading bg-gradient-to-r from-pink-600 via-violet-600 to-blue-500 inline-block text-transparent bg-clip-text">
                  Dr. Dirgharaj Joshi
                </span>
              </motion.h2>

              <motion.div className="h-16 mb-4" variants={itemVariants}>
                <TypeAnimation
                  sequence={[
                    "Data Analyst",
                    1000,
                    "Report Writer",
                    1000,
                    "Mentor",
                    1000,
                  ]}
                  wrapper="h3"
                  className="text-2xl sm:text-3xl font-caption font-semibold text-orange-400 mt-2"
                  repeat={Infinity}
                  cursor={true}
                  speed={50}
                />
              </motion.div>

              <motion.p
                className="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
                variants={itemVariants}
              >
                Data analyst with 4 years' experience in data cleaning,
                analysis, and visualization (Excel, SPSS, R, Python), focused on
                transforming data into actionable insights for informed
                decision-making.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start items-center gap-6 mb-8"
                variants={itemVariants}
              >
                {[
                  {
                    icon: linkedinIcon,
                    url: "https://www.linkedin.com/in/dr-dirgha-raj-joshi-570464129/",
                    alt: "LinkedIn",
                  },
                  {
                    icon: xIcon,
                    url: "https://www.twitter.com/yourprofile",
                    alt: "X (formerly Twitter)",
                  },
                  {
                    icon: facebookIcon,
                    url: "https://www.facebook.com/DrDirgha",
                    alt: "Facebook",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    custom={index}
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="transform transition-all duration-300 hover:shadow-lg rounded-full p-2 bg-white dark:bg-gray-800"
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                variants={itemVariants}
              >
                <Link to="/my-works" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>My Works</span>
                    <motion.span
                      variants={arrowVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <MdOutlineKeyboardArrowRight size={25} />
                    </motion.span>
                  </motion.button>
                </Link>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>Download CV</span>
                    <FaDownload />
                  </motion.button>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="w-full lg:w-2/5 order-1 mt-32 lg:mt-12 lg:order-2 flex justify-center lg:justify-end"
              initial="initial"
              animate={controls}
              variants={itemVariants}
            >
              <motion.div
                className="relative"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -rotate-6 scale-105 z-0"
                  animate={{
                    rotate: [-6, -4, -6],
                    scale: [1.05, 1.07, 1.05],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                />
                <motion.img
                  src={heroImage}
                  alt="Dr. Dirgharaj Joshi"
                  className="relative z-10 w-64 sm:w-80 md:w-96 rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5 },
                  }}
                />

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.2,
                      type: "spring",
                      stiffness: 200,
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  PhD
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.4,
                      type: "spring",
                      stiffness: 200,
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Data Expert
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
