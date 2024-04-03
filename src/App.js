import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import me from './assets/me.jpg'

function App() {
  return (
    <div className="App">
      <div className='left-side'>
        <div className='about-container'>
          <img src={me} className="about-image" alt="Leeann"/>
          <h1>Leeann Saengsavang</h1>
          <p>Full-Stack Developer</p>
        </div>
        <Navbar />
      </div>

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
