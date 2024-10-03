import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

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
    // {
    //   id: 4,
    //   link: "portfolio",
    //   path: "/portfolio",
    // },
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

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-50">
      <div>
        <h1 className="font-signature text-2xl whitespace-nowrap">
          Dr. Dirgha Raj Joshi
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:!flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
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
              <span className="left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </span>
          </li>
        ))}
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
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 lg:hidden">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
