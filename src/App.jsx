import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Home />
      <div className="bg-black mx-3">
        <About />

        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
