import React from "react";
import home from "../assets/home.png";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="box-border h-screen w-full pl-3 lg:pl-20"
    >
      <div className="w-full columns-2 flex items-center justify-center h-full flex-row">
        <div className="w-full flex flex-col justify-center h-full text-white">
          <h4 className="text-2xl flex justify-centent text-center sm:text-left text-yellow-400">
            HELLO!
          </h4>
          <h2 className="text-3xl">
            I'm{" "}
            <span className="font-heading font-semibold text-yellow-100 text-4xl">
              <u className="bg-gradient-to-r from-black to-blue-800 border-gray-500 border-r-4 rounded-md pr-2">
                Dr. Dirgha Raj Joshi
              </u>
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Data Analyst",
              500,
              "Report Writer",
              500,
              "Mentor",
              500,
            ]}
            style={{
              fontSize: "2em",
              fontWeight: "600",
              color: "orange",
              fontFamily: "animation",
            }}
            repeat={Infinity}
          />
          <p className="w-50%">
            I have 4 years of experience as a data analyst, specializing in data
            collection, cleaning, and analysis. I am proficient in statistical
            techniques, data visualization tools such as Excel and SPSS, and
            programming languages like R and Python. My focus is on transforming
            complex datasets into actionable insights to support business
            decisions and improve operational efficiency.
          </p>
          <div>
            {/* Add Link component to redirect to portfolio */}
            <Link to="/publications">
              <button className="group bg-blue-800 hover:bg-blue-700 text-white font-bold px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700">
                Publications
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={home}
            alt="my profile"
            className="h-3/5 md:h-full md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
