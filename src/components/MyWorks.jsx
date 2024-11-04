import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Jokes and Quotes App",
    description:
      "A vibrant app that displays random jokes and quotes, featuring animated UI components and shareable content on social media.",
    link: "https://bestjokesandquotes.netlify.app",
  },
  {
    title: "BidBazaar Auction System",
    description:
      "An online auction platform that enables users to place bids and list items with user authentication and admin management.",
    link: "https://github.com/devrajoshi/BidBazaar-An-Online-Auction-Platform/tree/main",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio showcasing projects, skills, and services, with a modern UI design and seamless navigation.",
    link: "https://joshidevraj.netlify.app",
  },
];

const Projects = () => {
  return (
    <div name="projects" className="box-border w-full px-4 lg:pl-20 py-20">
      <div className="flex flex-col items-center justify-center text-white">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-gray-400 inline-block">
            Projects
          </h2>
          <p className="py-6 text-yellow-300 font-bold">
            Some of my recent works
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-blue-700 hover:to-cyan-500 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-center text-white mb-2">
                {project.title}
              </h3>
              <p className="text-center text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md flex items-center gap-2 transition duration-300"
                >
                  View Project
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
