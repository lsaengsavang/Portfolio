import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='nav-buttons'>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      <button onClick={() => scrollToSection('skills')}>Skills</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </div>
  );
}

export default Navbar;
