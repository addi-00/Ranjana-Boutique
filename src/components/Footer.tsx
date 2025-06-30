import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>&copy; {new Date().getFullYear()} Timeless Elegance Tailoring. All rights reserved.</span>
      <span className="footer-links">
        <a href="#about">About</a> |
        <a href="#services">Services</a> |
        <a href="#gallery">Gallery</a> |
        <a href="#contact">Contact</a>
      </span>
      <div className="footer-contact">
        Call: <a href="tel:+917783867171">7783867171</a> |
        Email: <a href="mailto:info@ranjanaboutique14@gmail.com">info@ranjanaboutique14@gmail.com</a> |
        WhatsApp: <a href="https://wa.me/917783867171" target="_blank" rel="noopener noreferrer">7783867171</a>
      </div>
    </div>
  </footer>
);

export default Footer;
