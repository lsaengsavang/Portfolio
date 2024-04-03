import React from 'react'
import '../css/Skills.css'

function Skills() {
  return (
    <div className='skills'>
        <h2 className='page-title'>Skills</h2>
        <div className='skills-container'>
          <div className='skill-card'>
            <i class="devicon-html5-plain"></i>
            <p>HTML 5</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-css3-plain"></i>
            <p>CSS</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-javascript-plain"></i>
            <p>JavaScript</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-python-plain"></i>
            <p>Python</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-react-original"></i>
            <p>React</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-express-original"></i>
            <p>Express</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-nodejs-plain"></i>
            <p>NodeJS</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-mysql-original"></i>
            <p>MySQL</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-postgresql-plain"></i>
            <p>PostgreSQL</p>
          </div>

          <div className='skill-card'>
            <i class="devicon-mongodb-plain"></i>
            <p>MongoDB</p>
          </div>

        </div>
    </div>

  )
}

export default Skills