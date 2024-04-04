import React from 'react';
import '../css/Projects.css';
import samplecode from '../assets/samplecode.jpg'
import AdventureGame from '../assets/AdventureGame.png'

function Projects() {
  return (
    <div className="projects">
        <h2 className='page-title'>Projects</h2>
        <div className='projects-container'>
          <div className='project-card'>
            <img src={samplecode} className='project-photo' alt='Project sneak peek'/>
            <div className='profile-info'>
              <h3>Project 1</h3>
              <p>Project Description</p>
            </div>
          </div>
          <div className='project-card'>
            <img src={samplecode} className='project-photo' alt='Project sneak peek'/>
            <div className='profile-info'>
              <h3>Project 2</h3>
              <p>Project Description</p>
            </div>
          </div>
          <div className='project-card'>
            <img src={samplecode} className='project-photo' alt='Project sneak peek'/>
            <div className='profile-info'>
              <h3>Project 3</h3>
              <p>Project Description</p>
            </div>
          </div>
          <div className='project-card'>
            <img src={AdventureGame} className='project-photo' alt='Project sneak peek'/>
            <div className='profile-info'>
              <a href='https://lsaengsavang.github.io/Milestone-1-Adventure-Game/'>Choose Your Own Adventure Game</a>
              <p>Basic JavaScript game</p>
              <p>Simple, but fun to play. It has 19 endings!</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Projects