import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <div className="header-container">
      <span className="header-logo">Ranjana Boutique</span>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
