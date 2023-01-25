import React from 'react'
import './Footer.css'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerLogo'>CabsLO</div>
        <div className='footerLinks'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/blog'>Blog</a>
            <a href='/faq'>FAQs</a>
            <a href='/contactus'>Contact Us</a>
        </div>
        <div className='footerSocial'>
            <div><AiOutlineTwitter /></div>
            <div><FaFacebookF /></div>
            <div><AiOutlineInstagram /></div>
        </div>
        <hr className='footerhr'/>
        <div className='footerBottom'>
            <a href='/tnc'>Terms & Condition</a>
            <a href='/privacyppolicy'>Privacy Policy</a>
            <a href='/returnpolicy'>Return Policy</a>
        </div>
    </div>
  )
}

export default Footer