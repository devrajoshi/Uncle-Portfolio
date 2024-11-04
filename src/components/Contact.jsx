import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div
      name="contact"
      className="box-border w-full h-screen text-white px-4 lg:pl-20 py-20"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-400 inline-block">
            Let's Talk
          </p>
          <p className="py-4 font-bold text-yellow-300">
            Let's talk !? Send me a message!
          </p>
        </div>

        {/* Form Container with Background */}
        <div className="flex justify-center items-center">
          <div
            className="w-full sm:w-3/4 md:w-1/2 p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out"
          >
            <form
              action="https://getform.io/f/adryzvxa"
              method="POST"
              className="flex flex-col"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-yellow-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-yellow-300"
                required
              />
              <textarea
                name="message"
                rows={6}
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-yellow-300"
                placeholder="Enter your message"
                required
              ></textarea>
              <button className="text-white bg-gradient-to-r from-purple-700 to-indigo-800 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300 font-bold">
                Submit <RiSendPlaneFill size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
