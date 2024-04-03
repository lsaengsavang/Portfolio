import React from 'react'
import '../css/Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (

    <div className='contact'>
      <div className='contact-container'>
        <h2 className='page-title'>Contact</h2>
        <a className='contact-link' href='https://www.linkedin.com/in/leeann-saengsavang/' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon style={{ fontSize: '30px' }} /> LinkedIn
        </a>
        <a className='contact-link' href='https://github.com/lsaengsavang' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon style={{ fontSize: '30px', marginRight: '5px'}} />GitHub</a>
        <a className='contact-link' href='mailto:leeann.saengsavang@gmail.com'>
        <EmailIcon style={{ fontSize: '30px'}} />Email</a>
    </div>
    </div>

  )
}

export default Contact