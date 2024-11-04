import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-white px-3 lg:pt-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className="py-6 font-bold text-yellow-300">
            Wanna get in touch? Send me a message!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/adryzvxa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="emamil"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows={8}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message"
              required
            ></textarea>
            <button className="text-white bg-gradient-to-r from-purple-700 to-indigo-800 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 font-bold">
              Submit <RiSendPlaneFill size={25} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
