import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contacts from "./components/Contacts";
import { ThemeArea } from "./context/ThemeContext";
import { LanguageArea } from "./context/LanguageContext";

function App() {
  return (
    <ThemeArea>
      <LanguageArea>
        <Navbar />
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Contacts />
        <Footer />
      </LanguageArea>
    </ThemeArea>
  );
}

export default App;
