import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const links = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "about",
      path: "/about",
    },
    {
      id: 3,
      link: "gallery",
      path: "/gallery",
    },
    {
      id: 4,
      link: "services",
      path: "/services",
    },
    {
      id: 5,
      link: "publications",
      path: "/publications",
    },
    {
      id: 6,
      link: "contact",
      path: "/contact",
    },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-50"
    >
      <motion.div variants={itemVariants}>
        <h1 className="font-signature text-2xl whitespace-nowrap">
          Dr. Dirgha Raj Joshi
        </h1>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden lg:!flex">
        {links.map(({ id, link, path }) => (
          <motion.li
            key={id}
            variants={itemVariants}
            className="px-4 cursor-pointer font-medium capitalize text-gray-400 hover:text-yellow-400 duration-200 group"
          >
            <span className="relative inline-block">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-400 hover:text-yellow-400"
                }
              >
                {link}
              </NavLink>
              {/* Underline span */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </span>
          </motion.li>
        ))}

        {/* Theme Toggle Button */}
        <motion.li variants={itemVariants}>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-400" />
            )}
          </button>
        </motion.li>
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 z-10 cursor-pointer text-gray-400 hover:scale-105 hover:text-yellow-400 duration-200 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 lg:hidden"
        >
          {links.map(({ id, link, path }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-yellow-400"
            >
              <NavLink
                onClick={() => setNav(false)}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-400 hover:text-yellow-400"
                }
              >
                {link}
              </NavLink>
            </motion.li>
          ))}

          {/* Mobile Theme Toggle */}
          {/* <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: links.length * 0.1 }}
          >
            <button
              onClick={toggleTheme}
              className="mt-6 p-3 rounded-full hover:bg-gray-700 transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <FaSun size={24} className="text-yellow-400" />
              ) : (
                <FaMoon size={24} className="text-gray-400" />
              )}
            </button>
          </motion.li> */}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default NavBar;
