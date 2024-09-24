import React from "react";
import home from "../assets/home.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-black pl-3 lg:pl-12">
      <div className="w-full columns-2 flex items-center justify-evenly h-full flex-row">
        <div className="w-full flex flex-col justify-center h-full text-white">
          <h4 className="text-2xl flex justify-centent text-center text-yellow-400">
            HELLO!
          </h4>
          <h2 className="text-3xl">
            I'm{" "}
            <span className="bg-gradient-to-r from-[#2b00ff] to-[#190654] bg-clip-text text-transparent font-heading font-semibold text-4xl">
              Dr. Dirgha Raj Joshi
            </span>
          </h2>
          <hr className="border-b" />
          <TypeAnimation
            sequence={[
              "Data Analyst",
              500,
              "Report Writer",
              500,
              "Mentor",
              500,
            ]}
            style={{ fontSize: "2em", fontWeight: "600", color: "orange"}}
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
        </div>
        <div>
          <img src={home} alt="my profile" className="h-4/5 w-2/5 md:w-full"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
