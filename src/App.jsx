import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;
