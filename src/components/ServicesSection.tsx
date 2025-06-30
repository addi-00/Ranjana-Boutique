import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Blouse Stitching',
    description: 'Custom-fitted blouses with modern and traditional designs.'
  },
  {
    title: 'Kurti Design',
    description: 'Elegant kurtis tailored to your style and comfort.'
  },
  {
    title: 'Lehenga & Saree',
    description: 'Perfect fits for lehengas, saree fall/pico, and more.'
  },
  {
    title: 'Alterations',
    description: 'Expert adjustments for the perfect fit.'
  }
];

const ServicesSection: React.FC = () => (
  <section className="services-section" id="services">
    <h2 className="services-title">Our Services</h2>
    <div className="services-list">
      {services.map((service) => (
        <div className="service-card" key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
