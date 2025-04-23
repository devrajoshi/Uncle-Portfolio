import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaChartBar,
} from "react-icons/fa";

const About = () => {
  const { ref, controls } = useScrollAnimation();

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Expertise areas
  const expertiseAreas = [
    {
      title: "Education",
      icon: <FaGraduationCap size={40} />,
      description:
        "Ph.D. in Education from Banaras Hindu University, M.Ed. in Mathematics Education from Tribhuvan University",
    },
    {
      title: "Teaching",
      icon: <FaChalkboardTeacher size={40} />,
      description:
        "Faculty member at Mahendra Ratna Campus Tahachal, Tribhuvan University, specializing in digital pedagogy",
    },
    {
      title: "Technical Skills",
      icon: <FaLaptopCode size={40} />,
      description:
        "Proficient in SPSS, JASP, AMOS, Mendeley, Zotero, Atlas.ti, and various teaching-learning applications",
    },
    {
      title: "Data Analysis",
      icon: <FaChartBar size={40} />,
      description:
        "Expert in quantitative research, item response theory (IRT), structural equation modeling (SEM), and machine learning",
    },
  ];

  return (
    <motion.div
      name="about"
      className="box-border w-full min-h-screen px-4 lg:px-20 py-20 bg-gradient-to-b from-black to-gray-900"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-white">
        {/* Section Title */}
        <motion.div className="pb-12 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold border-b-4 border-gray-400 inline-block">
            About Me
          </h2>
          <p className="py-6 text-yellow-300 font-bold text-xl">
            Know who I am and what I do
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="w-full md:w-4/5 lg:w-3/4 bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-2xl backdrop-blur-sm mb-16"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I am a faculty member at Mahendra Ratna Campus Tahachal, Tribhuvan
            University, Nepal. I completed my Ph.D. in education from Banaras
            Hindu University, India, and my M.Ed. in mathematics education from
            Tribhuvan University. My research interests include educational
            technology, digital pedagogy, applied mathematics, quantitative
            research, item response theory (IRT), structural equation modeling
            (SEM), machine learning, and various issues related to digital
            pedagogy.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I also work with structural equation modeling tools like AMOS,
            referencing tools like Mendeley and Zotero, qualitative data
            analysis tools like Atlas.ti, academic/scientific writing, and other
            teaching-learning and research-related software and applications.
            Additionally, I have substantial experience in curriculum
            development, report writing, data analysis, thesis supervision,
            research project development, monitoring and evaluation of research
            projects, and test item writing.
          </motion.p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.h3
          className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Areas of Expertise
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5 lg:w-3/4"
          variants={containerVariants}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900 to-gray-800 rounded-xl p-6 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-4 rounded-full text-white">
                  {area.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-gray-300">{area.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg inline-block"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
