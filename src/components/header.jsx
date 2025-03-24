import React, { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span className="logo-icon">A</span>
            <span className="logo-text">E-Agri</span>
          </a>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#download">Download</a></li>
            <li className="language-toggle">
              <button onClick={toggleLanguage}>
                {language === 'en' ? 'اردو' : 'English'}
              </button>
            </li>
            <li className="cta-button">
              <a href="#try-free" className="pulse-button">Try Free</a>
            </li>
          </ul>
        </nav>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
