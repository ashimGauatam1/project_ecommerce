import React from 'react';
import '../Contact/Contact.css';
import Navbar from '../../Components/Navbar/Navbar';

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className='content-body'>
       <div className="contact-form">
    <h2>Contact Us</h2>
    <p>Have questions or feedback? Feel free to get in touch with us!</p>
    <form>
      <input type="text" name="name" placeholder="Your Name" required/>
      <input type="email" name="email" placeholder="Your Email" required/>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
  </div>
    </div>
  )
}

export default Contact
