import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Priya S.',
    text: 'Absolutely loved my custom blouse! The fit and finish were perfect.'
  },
  {
    name: 'Anjali R.',
    text: 'Professional, timely, and beautiful work on my kurtis. Highly recommend!'
  },
  {
    name: 'Meera D.',
    text: 'Great consultation and attention to detail. My lehenga was stunning.'
  }
];

const TestimonialsSection: React.FC = () => (
  <section className="testimonials-section">
    <h2 className="testimonials-title">Testimonials</h2>
    <div className="testimonials-list">
      {testimonials.map((t) => (
        <div className="testimonial-card" key={t.name}>
          <p className="testimonial-text">“{t.text}”</p>
          <div className="testimonial-name">- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
