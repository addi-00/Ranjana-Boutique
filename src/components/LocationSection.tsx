import React from 'react';
import './LocationSection.css';

const storeAddress = 'Ashok Rajpath Rd, Katra Bazar, Deedarganj, Patna, Bihar 800008';
const plusCode = 'H7H3+65 Patna, Bihar';
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`;

const LocationSection: React.FC = () => (
  <section className="location-section" id="location">
    <h2 className="location-title">Our Location</h2>
    <div className="location-map-container">
      <iframe
        title="Ranjana Boutique Location"
        src="https://www.google.com/maps?q=H7H3%2B65+Patna%2C+Bihar&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <p className="location-address">Location of visit store: {storeAddress}</p>
    <a
      className="get-location-btn"
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Find Us: {plusCode}
    </a>
  </section>
);

export default LocationSection;
