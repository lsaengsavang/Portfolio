import './App.css';
import './css/Navbar.css'
// import About from './components/About';
import Contact from './components/Contact';
// import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import me from './assets/me.jpg'

function App() {
  return (
    <div className="App">
      <div className='left-side'>
        <div className='about'>
          <img src={me} className="about-image" alt="Leeann"/>
          <h1>Leeann Saengsavang</h1>
          <p>Full-Stack Developer</p>
        </div>
        <div className='nav-buttons'>
          <a href="#projects"><button>Projects</button></a>
          <a href="#skills"><button>Skills</button></a>
          <a href="#contact"><button>Contact</button></a>
        </div>
      </div>


      <Projects id='projects' className='projects'/>
      <Skills id='skills'/>
      <Contact />
    </div>
  );
}

export default App;
