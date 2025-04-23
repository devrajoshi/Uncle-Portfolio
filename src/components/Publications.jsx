import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { staggerContainer, fadeInUp } from "../animations/variants";
import {
  FaQuoteLeft,
  FaSearch,
  FaExternalLinkAlt,
  FaRegFilePdf,
  FaQuoteRight,
  FaFilter,
} from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";

const Publications = () => {
  const { ref, controls } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("all");

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
        "This paper examines the role of digital pedagogy in enhancing mathematics education among undergraduate students. Using a mixed-methods approach, we analyzed data from 250 students across three universities to determine the effectiveness of digital tools in improving mathematical understanding and engagement. Results indicate a significant improvement in conceptual understanding and problem-solving abilities when digital pedagogical approaches are integrated into traditional teaching methods.",
      keywords: [
        "Digital Pedagogy",
        "Mathematics Education",
        "Higher Education",
        "Quantitative Research",
      ],
      citations: 10,
      doi: "10.1504/IJTEL.2024.139793",
    },
    {
      id: 2,
      publishedYear: 2023,
      publishedBy: "Journal of Educational Technology & Society",
      type: "Journal Article",
      title:
        "Structural Equation Modeling in Educational Research: Applications and Challenges",
      href: "https://www.google.com",
      abstract:
        "This study explores the application of Structural Equation Modeling (SEM) in educational research contexts. We review 120 studies that employed SEM techniques to analyze complex educational phenomena, identifying best practices, common pitfalls, and methodological innovations. The paper provides recommendations for researchers seeking to apply SEM in educational settings and highlights emerging trends in the field.",
      keywords: [
        "Structural Equation Modeling",
        "Educational Research",
        "Statistical Methods",
        "Research Methodology",
      ],
      citations: 15,
      doi: "10.2307/jeductechsoci.2023.26.2.15",
    },
    {
      id: 3,
      publishedYear: 2023,
      publishedBy: "International Conference on Mathematics Education",
      type: "Conference Paper",
      title:
        "Integrating Machine Learning Concepts in Secondary Mathematics Curriculum",
      href: "https://www.google.com",
      abstract:
        "This paper presents a framework for introducing basic machine learning concepts within the secondary mathematics curriculum. We developed and tested a series of instructional modules that connect algebraic concepts, statistics, and data analysis to fundamental machine learning principles. Pilot implementation in 12 classrooms showed increased student engagement and improved understanding of both mathematical concepts and their real-world applications.",
      keywords: [
        "Mathematics Education",
        "Machine Learning",
        "Secondary Education",
        "Curriculum Development",
      ],
      citations: 8,
      doi: "10.1109/ICME.2023.47892",
    },
    {
      id: 4,
      publishedYear: 2022,
      publishedBy: "Journal of Research in Mathematics Education",
      type: "Journal Article",
      title:
        "Item Response Theory Applications in Mathematics Assessment Development",
      href: "https://www.google.com",
      abstract:
        "This research demonstrates the application of Item Response Theory (IRT) in developing and validating mathematics assessments. We applied various IRT models to analyze test data from 1,200 students, identifying optimal item parameters and test characteristics. The study provides a practical framework for educators and researchers to develop more reliable and valid mathematics assessments using IRT principles.",
      keywords: [
        "Item Response Theory",
        "Mathematics Assessment",
        "Psychometrics",
        "Test Development",
      ],
      citations: 22,
      doi: "10.5951/jresematheduc.53.4.0275",
    },
    {
      id: 5,
      publishedYear: 2021,
      publishedBy: "Educational Technology Research and Development",
      type: "Journal Article",
      title:
        "Digital Tools for Mathematics Visualization: Impact on Spatial Reasoning",
      href: "https://www.google.com",
      abstract:
        "This study investigates how digital visualization tools affect spatial reasoning abilities in undergraduate mathematics students. Through a quasi-experimental design involving 180 participants, we measured changes in spatial reasoning skills after exposure to various digital visualization tools in calculus and geometry courses. Results show significant improvements in mental rotation, spatial visualization, and conceptual understanding of abstract mathematical concepts.",
      keywords: [
        "Mathematics Visualization",
        "Spatial Reasoning",
        "Educational Technology",
        "Undergraduate Mathematics",
      ],
      citations: 17,
      doi: "10.1007/s11423-021-09988-1",
    },
    {
      id: 6,
      publishedYear: 2020,
      publishedBy: "Asia-Pacific Journal of Teacher Education",
      type: "Journal Article",
      title: "Teacher Preparation for Digital Mathematics Instruction in Nepal",
      href: "https://www.google.com",
      abstract:
        "This paper examines the current state of teacher preparation programs in Nepal regarding digital mathematics instruction. Through surveys and interviews with 85 teacher educators and 150 pre-service teachers, we identified significant gaps in technological pedagogical content knowledge and infrastructure limitations. The study proposes a comprehensive framework for enhancing digital competencies in mathematics teacher education programs specific to developing country contexts.",
      keywords: [
        "Teacher Education",
        "Digital Mathematics",
        "Nepal",
        "TPACK Framework",
      ],
      citations: 12,
      doi: "10.1080/1359866X.2020.1789908",
    },
  ];

  // Get unique years for filter
  const years = [
    "all",
    ...new Set(articles.map((article) => article.publishedYear)),
  ].sort((a, b) => b - a);

  // Filter articles based on search term and year
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesYear =
      filterYear === "all" || article.publishedYear.toString() === filterYear;

    return matchesSearch && matchesYear;
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle year filter change
  const handleYearChange = (e) => {
    setFilterYear(e.target.value);
  };

  // Toggle expanded state
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      name="publications"
      className="w-full min-h-screen px-4 lg:px-20 py-20 bg-gradient-to-b from-black to-gray-900 text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        {/* Section Title */}
        <motion.div className="pb-12 text-center" variants={fadeInUp}>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Publications
          </h2>
          <p className="py-6 text-yellow-300 font-bold text-xl">
            A collection of published articles and research papers that showcase
            expertise in education and data science.
          </p>
        </motion.div>

        {/* Search and Filter */}
        {/* <motion.div
          className="mb-8 flex flex-col md:flex-row gap-4"
          variants={fadeInUp}
        >
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, keywords, or content..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="relative flex items-center">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              className="pl-10 pr-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              value={filterYear}
              onChange={handleYearChange}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year === "all" ? "All Years" : year}
                </option>
              ))}
            </select>
          </div>
        </motion.div> */}

        {/* Publications List */}
        <motion.div className="w-full grid gap-6" variants={containerVariants}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border-l-4 border-blue-600"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-blue-300 text-sm mb-2 md:mb-0">
                      <BiBookOpen />
                      <span>{article.type}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-yellow-400 font-medium">
                        {article.publishedYear}
                      </span>
                      <div className="flex items-center gap-1 text-green-400">
                        <FaQuoteRight />
                        <span>{article.citations} citations</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                      <a
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2"
                      >
                        <FaQuoteLeft className="text-blue-500 flex-shrink-0 mt-1" />
                        <span>{article.title}</span>
                      </a>
                    </h3>
                  </div>

                  {/* Journal/Publisher */}
                  <div className="mb-4 text-gray-300 italic">
                    {article.publishedBy}
                  </div>

                  {/* Preview of Abstract */}
                  <div className="mb-4 text-gray-300">
                    {expandedId === article.id
                      ? article.abstract
                      : `${article.abstract.substring(0, 150)}...`}
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === article.id && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={expandVariants}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        {/* DOI */}
                        <div className="mb-4">
                          <p className="text-sm flex items-center gap-2">
                            <span className="text-gray-400">DOI:</span>
                            <a
                              href={`https://doi.org/${article.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline flex items-center gap-1"
                            >
                              {article.doi}
                              <FaExternalLinkAlt size={12} />
                            </a>
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={article.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                          >
                            <span>View Publication</span>
                            <FaExternalLinkAlt />
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                          >
                            <span>Download PDF</span>
                            <FaRegFilePdf />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExpand(article.id)}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                  >
                    {expandedId === article.id ? "Show Less" : "Show More"}
                    <motion.span
                      animate={{ rotate: expandedId === article.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-10 text-gray-400"
              variants={fadeInUp}
            >
              No publications match your search criteria.
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Publications;
