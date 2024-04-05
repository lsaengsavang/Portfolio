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
        <button className='contact-button' onClick={() => window.open('https://www.linkedin.com/in/leeann-saengsavang/', '_blank')} rel='noopener noreferrer'>
          <LinkedInIcon style={{ fontSize: '30px', marginRight: '10px' }} /> LinkedIn
        </button>
        <button className='contact-button' onClick={() => window.open('https://github.com/lsaengsavang', '_blank')} rel='noopener noreferrer'>
          <GitHubIcon style={{ fontSize: '30px', marginRight: '10px' }} /> GitHub
        </button>
        <button className='contact-button' onClick={() => window.location.href = 'mailto:leeann.saengsavang@gmail.com'}>
          <EmailIcon style={{ fontSize: '30px', marginRight: '10px' }} /> Email
        </button>
      </div>
    </div>
  );
}

export default Contact