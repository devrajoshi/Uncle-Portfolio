import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import BackToTop from "./assets/common/BackToTop";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingSpinner from "./assets/common/LoadingSpinner";

// Use React.lazy to lazy load components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const CarouselTransition = lazy(() => import("./components/Gallery"));
const Publications = lazy(() => import("./components/Publications"));
const Publication = lazy(() => import("./components/Publication"));
const MyWorks = lazy(() => import("./components/MyWorks"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));

// Create a wrapper component to conditionally render SocialLinks
const AppContent = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if current path is home page
    setIsHomePage(location.pathname === "/");
  }, [location]);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <NavBar />

      {/* Suspense provides a fallback while loading lazy components */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<CarouselTransition />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/my-works" element={<MyWorks />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      {/* Only render SocialLinks if not on the home page */}
      {!isHomePage && <SocialLinks />}
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
