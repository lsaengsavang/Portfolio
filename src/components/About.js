import React from 'react'
import me from '../assets/me.jpg'

function About() {
  return (
    <div>
        <img src={me} className="about-image" alt="Leeann"/>
        <h1>Leeann Saengsavang</h1>
        <p>Full-Stack Developer</p>
    </div>
  )
}

export default About;