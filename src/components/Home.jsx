import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.uncle.png";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import facebookIcon from "../assets/social icons/facebook.svg";
import xIcon from "../assets/social icons/x.svg";
import linkedinIcon from "../assets/social icons/linkedin.svg";

const Home = () => {
  return (
    <div name="home" className="box-border h-screen w-full px-4 lg:pl-20">
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-0 md:gap-16">
        {/* Hero Image Section */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={heroImage}
            alt="profile"
            className="w-48 md:h-auto object-cover rounded-md shadow-[10px_10px_20px_5px_rgba(3,43,226,0.6)] transition-shadow duration-300 ease-in-out"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left text-white">
          <h4 className="text-2xl text-yellow-400">HELLO!</h4>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              I'm{" "}
              <span className="font-heading bg-gradient-to-r from-pink-600 via-violet-600 to-blue-500 inline-block text-transparent bg-clip-text">
                Dr. Dirgharaj Joshi
              </span>
            </h2>
          </div>

          {/* Type Animation */}
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
            className="text-2xl font-caption font-semibold text-orange-400 mt-2"
            repeat={Infinity}
          />

          <p className="text-sm md:text-base mt-4 leading-relaxed max-w-lg mx-auto md:mx-0">
            Data analyst with 4 years' experience in data cleaning, analysis,
            and visualization (Excel, SPSS, R, Python), focused on transforming
            data into actionable insights for informed decision-making.
          </p>

          {/* Social Links Section */}
          <div className="flex justify-center md:justify-start items-center gap-4 my-4">
            <a
              href="https://www.linkedin.com/in/dr-dirgha-raj-joshi-570464129/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 hover:scale-110 duration-200"
              />
            </a>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={xIcon}
                alt="X (formerly Twitter)"
                className="w-10 h-10 hover:scale-110 duration-200"
              />
            </a>
            <a
              href="https://www.facebook.com/DrDirgha"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-10 h-10 hover:scale-110 duration-200"
              />
            </a>
          </div>

          {/* buttons to redirect to the projects section and downloading resume */}
          <div className="flex justify-center md:justify-normal gap-4">
            <Link to="/my_works">
              <button className="group bg-blue-800 hover:bg-blue-700 text-white font-bold px-4 py-2 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-blue-700 hover:to-cyan-500 duration-300">
                My Works
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
