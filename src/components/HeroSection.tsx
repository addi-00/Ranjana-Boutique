import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Ranjana Boutique</h1>
      <p className="hero-subtitle">Timeless Elegance, Tailored for You</p>
      <p className="hero-subtitle">Custom Indian Women’s Wear: Blouses, Kurtis & More</p>
      <a href="#contact" className="hero-cta">Book an Appointment</a>
    </div>
  </section>
);

export default HeroSection;
