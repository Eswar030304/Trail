// src/pages/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
