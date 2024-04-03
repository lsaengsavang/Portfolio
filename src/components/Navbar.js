import React from 'react';
import '../css/Navbar.css';
import me from '../assets/me.jpg'; // Import the image here

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <div className='about-container'>
        <img src={me} className="about-image" alt="Leeann"/>
        <h1>Leeann Saengsavang</h1>
        <p>Full-Stack Developer</p>
      </div>
      <div className='nav-buttons'>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;

