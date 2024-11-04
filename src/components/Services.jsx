import React from "react";
import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

const servicesData = [
  {
    title: "Web Development",
    description:
      "I build responsive and dynamic web applications using the latest web technologies like React, Node.js, and more.",
    icon: <FaCode />,
  },
  {
    title: "Mobile Development",
    description:
      "Creating optimized mobile applications with responsive designs for Android and iOS using React Native and other modern frameworks.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Database Management",
    description:
      "Managing and optimizing databases for performance, scalability, and reliability using MongoDB, MySQL, and more.",
    icon: <FaDatabase />,
  },
  {
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights. I analyze trends, patterns, and customer behavior to support informed, data-driven decisions.",
    icon: <MdAnalytics />,
  },
];

const Services = () => {
  return (
    <div name="services" className="box-border w-full px-4 lg:pl-20 py-20">
      <div className="flex flex-col items-center justify-center text-white">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-gray-400 inline-block">
            Services
          </h2>
          <p className="py-6 text-yellow-300 font-bold">
            What I can do for you
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-gradient-to-r from-blue-800 via-violet-600 to-indigo-900 hover:from-indigo-900 hover:to-blue-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex justify-center text-white text-5xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center text-white mb-2">
                {service.title}
              </h3>
              <p className="text-center text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
