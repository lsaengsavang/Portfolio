import React from 'react'
import '../css/Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
        <h2 className='page-title'>Contact</h2>
        <a className='contact-link' href='https://www.linkedin.com/in/leeann-saengsavang/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a className='contact-link' href='https://github.com/lsaengsavang' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a className='contact-link' href='mailto:leeann.saengsavang@gmail.com'>Email</a>
    </div>
  )
}

export default Contact