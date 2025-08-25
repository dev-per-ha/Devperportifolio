import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import MoreProjects from "./components/More";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
       <Works/>
       <MoreProjects/>
      <Skills/>
      <Contact/>
      {/* other sections here */}
    </div>
  );
}

export default App;
