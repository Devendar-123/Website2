import React from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DuoIcon from '@mui/icons-material/Duo';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.css'


const Contact = () => {
  return (
    <div className='container'>

      <div className="contact">
        <div className="info">
          <PhoneEnabledIcon className='data'/> Phone: +91 88990 99908 <br />
          <BusinessCenterIcon className='data'/> Office: +995 322 12 00 20 <br />
          <MailOutlineIcon className='data'/> travel@timetotravel <br />
          <LocationOnIcon className='data'/> str. 8, Road no: 6, Banjara Hills, Hyderabad, India <br />
          <DuoIcon className='data'/> itstimetotravel <br /> 
          <WhatsAppIcon className='data'/> Whatsapp: +995 551 188 003
        </div>
      </div>

      <div className="gmap">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.9631578156802!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1335b41%3A0x5045675218ce7e33!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1618865801567!5m2!1sen!2sus"></iframe>
        </div>
      </div>

      <form>
        <textarea placeholder='Message*'/> <br />
        <input type='text' placeholder="Your Name*" required/> <br />
        <input type='email' placeholder='Your Email*' required/> <br />
        <div className="btn">
          <button>send</button>
        </div>
      </form>

    </div>
  )
}

export default Contact
