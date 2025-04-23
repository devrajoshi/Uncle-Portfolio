import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { staggerContainer, fadeInUp, scaleIn } from "../animations/variants";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaInfoCircle,
  FaExpand,
} from "react-icons/fa";

// Import your images
import uncle1 from "../assets/gallery/uncle1.jpg";
import uncle2 from "../assets/gallery/uncle2.jpg";
import uncle3 from "../assets/gallery/uncle3.jpg";
import uncle4 from "../assets/gallery/uncle4.jpg";
import uncle5 from "../assets/gallery/uncle5.jpg";
import uncle6 from "../assets/gallery/uncle6.jpg";
import uncle7 from "../assets/gallery/uncle7.jpg";
import uncle8 from "../assets/gallery/uncle8.jpg";
import uncle9 from "../assets/gallery/uncle9.jpg";
import uncle10 from "../assets/gallery/uncle10.jpg";

const Gallery = () => {
  const { ref, controls } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    {
      id: 1,
      src: uncle1,
      alt: "Professional event at Singha Durbar",
      caption:
        "Presenting research findings at the annual education conference",
      date: "March 15, 2022",
    },
    {
      id: 2,
      src: uncle2,
      alt: "Workshop with colleagues",
      caption: "Leading a workshop on data analysis techniques for educators",
      date: "June 22, 2022",
    },
    {
      id: 3,
      src: uncle3,
      alt: "University lecture",
      caption:
        "Guest lecture on educational technology at Tribhuvan University",
      date: "September 5, 2022",
    },
    {
      id: 4,
      src: uncle4,
      alt: "Research collaboration",
      caption: "Collaborative research meeting with international partners",
      date: "November 18, 2022",
    },
    {
      id: 5,
      src: uncle5,
      alt: "Conference presentation",
      caption:
        "Presenting at the International Education Technology Conference",
      date: "February 7, 2023",
    },
    {
      id: 6,
      src: uncle6,
      alt: "Community outreach",
      caption: "Educational outreach program in rural Nepal",
      date: "April 30, 2023",
    },
    {
      id: 7,
      src: uncle7,
      alt: "Award ceremony",
      caption:
        "Receiving recognition for contributions to educational research",
      date: "July 12, 2023",
    },
    {
      id: 8,
      src: uncle8,
      alt: "Panel discussion",
      caption: "Participating in panel discussion on digital pedagogy",
      date: "October 3, 2023",
    },
    {
      id: 9,
      src: uncle9,
      alt: "Curriculum development meeting",
      caption:
        "Leading curriculum development committee for mathematics education",
      date: "December 15, 2023",
    },
    {
      id: 10,
      src: uncle10,
      alt: "International collaboration",
      caption:
        "Meeting with international researchers on educational data analysis",
      date: "February 28, 2024",
    },
  ];

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  // Direction state for animations
  const [direction, setDirection] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    let interval;

    if (isAutoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoplay, images.length]);

  // Navigation functions
  const nextSlide = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoplay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      prevSlide();
    }
  };

  // Open lightbox
  const openLightbox = () => {
    setIsLightboxOpen(true);
    setIsAutoplay(false);
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <motion.div
      name="gallery"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20 text-white overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Gallery
          </h2>
          <p className="py-6 font-bold text-yellow-300 text-lg">
            Memorable moments from my professional journey
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto h-[70vh] overflow-hidden rounded-xl shadow-2xl"
          variants={fadeInUp}
        >
          {/* Carousel Container */}
          <div
            className="w-full h-full bg-gray-800 relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="relative w-full h-full">
                  {/* Image */}
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                  {/* Caption Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="flex items-center text-blue-300 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <span className="text-sm">
                        {images[currentIndex].date}
                      </span>
                    </div>

                    <div className="flex items-start text-white">
                      <FaInfoCircle className="mr-2 mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold">
                        {images[currentIndex].caption}
                      </h3>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <motion.button
                    className="absolute top-4 right-4 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-70 transition-all"
                    onClick={openLightbox}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View full size image"
                  >
                    <FaExpand />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white z-10"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              <FaChevronLeft size={24} />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white z-10"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              <FaChevronRight size={24} />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          className="mt-8 overflow-x-auto pb-4 hidden md:block"
          variants={fadeInUp}
        >
          <div className="flex space-x-4 min-w-max px-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer relative ${
                  index === currentIndex
                    ? "ring-4 ring-blue-500"
                    : "ring-2 ring-gray-700 hover:ring-gray-500"
                } rounded-md overflow-hidden transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-16 object-cover"
                  loading="lazy"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={lightboxVariants}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh]"
              variants={imageVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />

              <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-70 text-white">
                <p className="text-sm text-blue-300 mb-1">
                  {images[currentIndex].date}
                </p>
                <p className="text-lg font-bold">
                  {images[currentIndex].caption}
                </p>
              </div>

              {/* Lightbox Navigation */}
              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous image"
              >
                <FaChevronLeft size={24} />
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next image"
              >
                <FaChevronRight size={24} />
              </motion.button>

              {/* Close Button */}
              <motion.button
                className="absolute top-2 right-2 bg-red-600 px-2 rounded-full text-white"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close lightbox"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
