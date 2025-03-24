import React from 'react';
import { FaDownload, FaPhone } from 'react-icons/fa';
import './cta.css';

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to Transform Your Farming?
        </h2>
        <p className="cta-description">
          Join thousands of farmers who are already using E-Agri to modernize their agricultural operations and increase their yields.
        </p>
        <div className="cta-buttons">
          <a href="#download" className="cta-button primary-button">
            <FaDownload />
            <span>Download App Now</span>
          </a>
          <a href="#contact" className="cta-button secondary-button">
            <FaPhone />
            <span>Contact Sales</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA; 