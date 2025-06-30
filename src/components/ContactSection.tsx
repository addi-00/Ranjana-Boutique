import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => (
  <section className="contact-section" id="contact">
    <h2 className="contact-title">Book an Appointment</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <input type="tel" placeholder="Phone Number" />
      <textarea placeholder="What would you like to get tailored?" required />
      <button type="submit">Send Request</button>
    </form>
    <div className="contact-links">
      <a href="tel:+911234567890">Call Us</a> |
      <a href="mailto:info@tailor.com">Email</a> |
      <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  </section>
);

export default ContactSection;
