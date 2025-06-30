import React from 'react';
import './WhyChooseUsSection.css';

const points = [
  {
    icon: '💎',
    title: 'Premium Fabrics',
    description: 'We use only the finest materials for comfort and style.'
  },
  {
    icon: '✂️',
    title: 'Custom Fit',
    description: 'Every piece is tailored to your unique measurements.'
  },
  {
    icon: '⏰',
    title: 'On-Time Delivery',
    description: 'We value your time and always deliver as promised.'
  },
  {
    icon: '🤝',
    title: 'Personal Consultation',
    description: 'Get expert advice and design suggestions for every order.'
  }
];

const WhyChooseUsSection: React.FC = () => (
  <section className="whychoose-section">
    <h2 className="whychoose-title">Why Choose Us?</h2>
    <div className="whychoose-list">
      {points.map((point) => (
        <div className="whychoose-card" key={point.title}>
          <div className="whychoose-icon">{point.icon}</div>
          <h3>{point.title}</h3>
          <p>{point.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUsSection;
