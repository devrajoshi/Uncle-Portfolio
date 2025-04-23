import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaQuoteLeft, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import publicationImage1 from "../assets/publications/business.png";
import publicationImage2 from "../assets/publications/digitalSEO.jpg";
import publicationImage3 from "../assets/publications/eCommerce.png";
import publicationImage4 from "../assets/publications/facebook.png";
import publicationImage5 from "../assets/publications/healthCare.png";
import publicationImage6 from "../assets/publications/teamCollaborating.png";

const Publication = () => {
  const { ref, controls } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState(null);

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

  const articles = [
    {
      id: 1,
      publishedYear: 2024,
      publishedBy:
        "International Journal of Technology Enhanced Learning (IJTEL)",
      type: "Journal Article",
      title:
        "The Impact of Digital Pedagogy on Mathematics Learning in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students...",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
      image: publicationImage1,
    },
    {
      id: 2,
      publishedYear: 2023,
      publishedBy: "Journal of Educational Technology & Society",
      type: "Journal Article",
      title:
        "Evaluating the Effectiveness of Blended Learning Approaches in STEM Education",
      href: "https://www.google.com",
      abstract:
        "This study investigates the impact of blended learning methodologies on student engagement and performance in STEM subjects...",
      keywords: [
        "Blended Learning",
        "STEM Education",
        "Student Engagement",
        "Educational Technology",
      ],
      citations: 8,
      doi: "10.2307/jeductechsoci.26.1.45",
      image: publicationImage2,
    },
    {
      id: 3,
      publishedYear: 2023,
      publishedBy: "Computers & Education",
      type: "Journal Article",
      title:
        "Data-Driven Decision Making in Educational Policy: A Case Study from Nepal",
      href: "https://www.google.com",
      abstract:
        "This research explores how data analytics can inform educational policy decisions in developing countries, with a focus on Nepal's education system...",
      keywords: [
        "Data Analytics",
        "Educational Policy",
        "Nepal",
        "Decision Making",
      ],
      citations: 12,
      doi: "10.1016/j.compedu.2023.104529",
      image: publicationImage3,
    },
    {
      id: 4,
      publishedYear: 2022,
      publishedBy: "International Journal of Educational Research",
      type: "Journal Article",
      title:
        "Predictive Modeling for Student Success: Early Intervention Strategies in Higher Education",
      href: "https://www.google.com",
      abstract:
        "This paper presents a predictive model for identifying at-risk students and implementing targeted intervention strategies to improve retention rates...",
      keywords: [
        "Predictive Modeling",
        "Student Success",
        "Higher Education",
        "Intervention Strategies",
      ],
      citations: 15,
      doi: "10.1016/j.ijer.2022.101832",
      image: publicationImage4,
    },
    {
      id: 5,
      publishedYear: 2022,
      publishedBy: "Journal of Learning Analytics",
      type: "Journal Article",
      title:
        "Analyzing Student Engagement Patterns in Online Learning Environments",
      href: "https://www.google.com",
      abstract:
        "This study examines patterns of student engagement in online learning platforms and identifies factors that contribute to successful learning outcomes...",
      keywords: [
        "Learning Analytics",
        "Online Education",
        "Student Engagement",
        "Educational Data Mining",
      ],
      citations: 7,
      doi: "10.18608/jla.2022.15.1.4",
      image: publicationImage5,
    },
    {
      id: 6,
      publishedYear: 2021,
      publishedBy: "Educational Technology Research and Development",
      type: "Journal Article",
      title:
        "The Role of Artificial Intelligence in Personalizing Mathematics Education",
      href: "https://www.google.com",
      abstract:
        "This research investigates how AI-driven adaptive learning systems can personalize mathematics instruction to meet individual student needs...",
      keywords: [
        "Artificial Intelligence",
        "Adaptive Learning",
        "Mathematics Education",
        "Personalized Learning",
      ],
      citations: 20,
      doi: "10.1007/s11423-021-09988-1",
      image: publicationImage6,
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div
      name="publications"
      className="bg-gradient-to-b from-black to-gray-900 h-fit w-full text-white px-4 lg:px-20 py-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div className="pb-12 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Publications
          </h2>
          <p className="py-6 font-bold text-yellow-300 text-xl">
            A collection of published articles and research papers that showcase
            expertise in data science and analytics.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Publication Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={`Cover image for ${article.title}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-blue-600 px-2 py-1 rounded text-white">
                      {article.publishedYear}
                    </span>
                    <span className="bg-yellow-600 px-2 py-1 rounded text-white">
                      Citations: {article.citations}
                    </span>
                  </div>
                </div>
              </div>

              {/* Publication Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-400 mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {article.title}
                </h3>

                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-400">{article.type}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-300 line-clamp-3">
                    <FaQuoteLeft
                      className="inline-block mr-2 text-blue-400"
                      size={12}
                    />
                    {article.abstract}
                  </p>
                </div>

                {expandedId === article.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <p className="text-sm text-gray-400 mb-2">
                      Published By: {article.publishedBy}
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      DOI: <span className="text-blue-400">{article.doi}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {article.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between items-center mt-4">
                  <motion.button
                    onClick={() => toggleExpand(article.id)}
                    className="text-sm text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedId === article.id ? "Show Less" : "Show More"}
                  </motion.button>

                  <motion.a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={12} />
                    View
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Publication;
