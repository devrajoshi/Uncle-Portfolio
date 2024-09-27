import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
// import Gallery from "./components/Gallery";
import CarouselTransition from "./components/Gallery";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Publications from "./components/Publications";

function App() {
  return (
    <div className="bg-black divide-x-*">
      <NavBar />
      <Home />
      <About />
      <CarouselTransition />
      <Publications />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
