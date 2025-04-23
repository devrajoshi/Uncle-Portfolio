import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Jokes and Quotes App",
    description:
      "A vibrant app that displays random jokes and quotes, featuring animated UI components and shareable content on social media.",
    link: "https://bestjokesandquotes.netlify.app",
    github: "https://github.com/devrajoshi/jokes-quotes-app",
    category: "web",
    technologies: ["React", "CSS", "API Integration"],
  },
  {
    id: 2,
    title: "BidBazaar Auction System",
    description:
      "An online auction platform that enables users to place bids and list items with user authentication and admin management.",
    link: "https://github.com/devrajoshi/BidBazaar-An-Online-Auction-Platform/tree/main",
    github:
      "https://github.com/devrajoshi/BidBazaar-An-Online-Auction-Platform",
    category: "fullstack",
    technologies: ["Node.js", "MongoDB", "Express", "React"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio showcasing projects, skills, and services, with a modern UI design and seamless navigation.",
    link: "https://joshidevraj.netlify.app",
    github: "https://github.com/devrajoshi/portfolio",
    category: "web",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

const MyWorks = () => {
  const { ref, controls } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Filter categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "fullstack", name: "Full Stack" },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <motion.div
      name="projects"
      className="box-border w-full min-h-screen px-4 lg:px-20 py-20 bg-black"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-white">
        {/* Section Title */}
        <motion.div className="pb-12 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold border-b-4 border-gray-400 inline-block">
            My Works
          </h2>
          <p className="py-6 text-yellow-300 font-bold text-xl">
            Check out some of my recent projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative h-48 bg-blue-900 bg-opacity-50 overflow-hidden">
                {/* Project Preview Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-600 bg-opacity-90 p-4 rounded-full"
                  >
                    <FaSearch size={24} />
                  </motion.div>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 h-24 overflow-hidden">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View</span>
                    <FaExternalLinkAlt />
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Code</span>
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.a
            href="https://github.com/devrajoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg inline-block"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MyWorks;
