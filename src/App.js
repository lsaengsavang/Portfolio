import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
