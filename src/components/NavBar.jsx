import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Gallery",
    },
    {
      id: 4,
      link: "Publications",
    },
    {
      id: 5,
      link: "Projects",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 bg-black text-white fixed">
      <div>
        <h1 className="font-signature text-2xl whitespace-nowrap">
          Dr. Dirgha Raj Joshi
        </h1>
      </div>
      {/* Desktop Menu */}
      <div flex justify-evenly>
        <ul className="hidden md:!flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium capitalize text-gray-400 hover:text-yellow-400 duration-200 relative group"
            >
              <span className="relative inline-block">
                {link}
                {/* Underline span */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 z-10 cursor-pointer text-gray-400 hover:scale-105 hover:text-yellow-400 duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-yellow-400"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
