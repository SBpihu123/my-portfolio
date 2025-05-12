import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects /> 
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
