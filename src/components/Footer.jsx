import React from 'react'
import './Footer.scss'
import {FaGithub, FaInstagram, FaWhatsapp, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <Footer className='footer'>
        <div className="footer-icons">
            <FaGithub/><FaInstagram/>
            <FaWhatsapp/><FaTwitter/>
        </div>
      <p class="copyright">Magic Moments © 2022</p>
    </Footer>
  )
}

export default Footer