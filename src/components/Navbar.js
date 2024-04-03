import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='nav-buttons'>
      <a href="#projects"><button>Projects</button></a>
      <a href="#skills"><button>Skills</button></a>
      <a href="#contact"><button>Contact</button></a>
    </div>
  );
}

export default Navbar;
