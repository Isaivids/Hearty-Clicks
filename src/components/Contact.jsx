import React from 'react'
import './Contact.scss'
import {FaWhatsapp, FaGithub, FaInstagram, FaTwitter, FaPortrait} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-card'>
        <p>Dilan Raj</p>
        <span>Web Developer</span><br/>
        <span>dilanraj1999@gmail.com</span>
        <div className='contact-icons'>
          <a rel="noreferrer" href='https://www.instagram.com/?hl=en' target="_blank"><FaInstagram/></a>
          <a rel="noreferrer" href='https://github.com/Isaivids' target="_blank"><FaGithub/></a>
          <a rel="noreferrer" href='https://portfolio-dilan.netlify.app/' target="_blank"><FaPortrait/></a>
          <a rel="noreferrer" href='https://twitter.com/i/flow/login' target="_blank"><FaTwitter/></a>
          <a rel="noreferrer" href='https://api.whatsapp.com/send/?phone=7868047686&text&app_absent=0' target="_blank"><FaWhatsapp/></a>
        </div>
      </div>
      <div className='contact-footer'>
        <span>Webpage developed using React Js | Third party API's used | Images are subjected to copyright | Developer contact: dilanraj1999@gmail.com</span>
      </div>
    </div>
  );
}

export default Contact;