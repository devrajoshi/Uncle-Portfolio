import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

// Use React.lazy to lazy load components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const CarouselTransition = lazy(() => import("./components/Gallery"));
const Publications = lazy(() => import("./components/Publications"));
const MyWorks = lazy(() => import("./components/MyWorks"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound")); // Lazy load NotFound

function App() {
  return (
    <Router>
      <div className="bg-black divide-x-*">
        <NavBar />

        {/* Suspense provides a fallback while loading lazy components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<CarouselTransition />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/my_works" element={<MyWorks />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <SocialLinks />
      </div>
    </Router>
  );
}

export default App;
