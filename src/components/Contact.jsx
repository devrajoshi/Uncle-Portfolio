import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen py-20 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className="py-4 font-bold text-yellow-300">
            Wanna get in touch? Send me a message!
          </p>
        </div>

        {/* Form Container */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/adryzvxa"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows={6}
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
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
  );
};

export default Contact;
