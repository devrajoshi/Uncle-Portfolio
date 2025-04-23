import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { staggerContainer, fadeInUp, scaleIn } from "../animations/variants";

const Skills = () => {
  const { ref, controls } = useScrollAnimation();
  
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: [
        { name: "Statistical Analysis", level: 95 },
        { name: "Data Visualization", level: 90 },
        { name: "Data Cleaning", level: 85 },
        { name: "Predictive Modeling", level: 80 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Excel/Spreadsheets", level: 95 },
        { name: "SPSS", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 80 }
      ]
    }
  ];
  
  return (
    <motion.div
      id="skills"
      className="w-full py-20 px-4 lg:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500 dark:border-blue-400">
            Skills & Expertise
          </h2>
          <p className="py-6 text-gray-600 dark:text-gray-300">
            My professional toolkit and areas of expertise
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              variants={scaleIn}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    initial={{ opacity: 0, width: 0 }}
                    animate={controls}
                    custom={skillIndex}
                    variants={{
                      visible: (i) => ({
                        opacity: 1,
                        transition: {
                          delay: i * 0.1 + categoryIndex * 0.2
                        }
                      })
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
