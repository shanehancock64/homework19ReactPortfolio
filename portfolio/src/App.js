import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project, { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div> 
    
  );
}

export default App;
