import React, { useRef } from 'react';
import './ContactUsSection.css';

const storeAddress = 'Ashok Rajpath Rd, Katra Bazar, Deedarganj, Patna, Bihar 800008';
const plusCode = 'H7H3+65 Patna, Bihar';
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`;

const ActionButton: React.FC<React.ComponentProps<'a'> & { children: React.ReactNode }> = ({ children, className = '', ...props }) => (
  <a
    className={`contactus-action-btn ${className}`.trim()}
    {...props}
  >
    {children}
  </a>
);

const ContactUsSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // Prevent default form submission and clear form (no backend handling)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    // Optionally, show a toast or alert for UX
    alert('Thank you for your request! We will contact you soon.');
  };

  return (
    <section className="contactus-section" id="contact">
      <h2 className="contactus-title">Contact Us</h2>
      <div className="contactus-content">
        <div className="contactus-form-block">
          <h3 className="contactus-subtitle">Book an Appointment</h3>
          <form className="contactus-form" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="Your Name" name="name" required />
            <input type="email" placeholder="Your Email" name="email" required />
            <input type="tel" placeholder="Phone Number" name="phone" pattern="[0-9\-\+\s]*" />
            <textarea placeholder="What would you like to get tailored?" name="message" required />
            <button type="submit" className="contactus-action-btn">Send Request</button>
          </form>
          <div className="contactus-links">
            <a href="tel:+911234567890">Call Us</a> |
            <a href="mailto:info@tailor.com">Email</a> |
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="contactus-location-block">
          <h3 className="contactus-subtitle">Visit Our Store</h3>
          <div className="contactus-map-container">
            <iframe
              title="Ranjana Boutique Location"
              src="https://www.google.com/maps?q=H7H3%2B65+Patna%2C+Bihar&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ActionButton
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: '1.2rem' }}
          >
            Find Us: {plusCode}
          </ActionButton>
          <p className="contactus-address">Location of visit store: {storeAddress}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
