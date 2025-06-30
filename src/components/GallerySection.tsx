import React from 'react';
import './GallerySection.css';

const GallerySection: React.FC = () => (
  <section className="gallery-section" id="gallery">
    <h2 className="gallery-title">Our Work</h2>
    <div className="gallery-grid">
      <div className="gallery-item"><img src="/public-sample-1.png" alt="Blouse Design" /></div>
      <div className="gallery-item"><img src="/public-sample-2.png" alt="Kurti Design" /></div>
      <div className="gallery-item"><img src="/public-sample-3.png" alt="Lehenga" /></div>
      <div className="gallery-item"><img src="/public-sample-4.png" alt="Alteration" /></div>
    </div>
    <p className="gallery-note">*Images are for demonstration. Replace with your own work for best results.</p>
  </section>
);

export default GallerySection;
