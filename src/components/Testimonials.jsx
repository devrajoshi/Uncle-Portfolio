import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { staggerContainer, fadeInUp, scaleIn } from "../animations/variants";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ResponsiveImage from "../assets/common/ResponsiveImage";

const Testimonials = () => {
  const { ref, controls } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Research Director, Data Science Institute",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Dr. Joshi's analytical skills and attention to detail are exceptional. His contributions to our research projects have been invaluable, particularly in statistical analysis and data visualization."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Department Chair, Computer Science",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "Working with Dr. Joshi has been a pleasure. His expertise in data analysis and machine learning algorithms helped our department develop more robust research methodologies."
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "CEO, DataTech Solutions",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "We hired Dr. Joshi as a consultant for our data analytics project, and his insights transformed our approach. His ability to communicate complex concepts to non-technical stakeholders is remarkable."
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <motion.div
      name="testimonials"
      className="w-full py-20 px-4 lg:px-20 bg-gradient-to-b from-black to-gray-900 text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Testimonials
          </h2>
          <p className="py-6 text-yellow-300 font-bold">
            What colleagues and clients say about my work
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            // Replace the regular img tag with ResponsiveImage
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <ResponsiveImage
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                  variants={scaleIn}
                />
                
                <div className="flex-1">
                  <FaQuoteLeft className="text-blue-400 mb-2" />
                  <p className="text-gray-300 italic mb-4">
                    {testimonials[currentIndex].text}
                  </p>
                  <FaQuoteRight className="text-blue-400 ml-auto" />
                  
                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-blue-600 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-blue-600 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;