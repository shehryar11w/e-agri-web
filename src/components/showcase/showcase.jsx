import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './showcase.css';

const Showcase = () => {
  const features = [
    'User-friendly interface in Urdu and English',
    'Offline functionality for remote areas',
    'Real-time weather updates and alerts',
    'Crop disease detection using AI',
    'Smart irrigation scheduling',
    'Market price tracking and analysis'
  ];

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-container">
        <div className="section-title">
          <h2>Download E-Agri App</h2>
          <p>Get started with smart farming today. Download our app and transform your agricultural operations.</p>
        </div>

        <div className="showcase-grid">
          <div className="showcase-content">
            <h3 className="showcase-title">
              Everything You Need for Smart Farming
            </h3>
            <p className="showcase-description">
              Our mobile app brings all the power of E-Agri to your fingertips. Access your farm data, receive alerts, and make informed decisions from anywhere.
            </p>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="app-badges">
              <a href="#" className="app-badge">
                <FaDownload />
                <span>Download for Android</span>
              </a>
              <a href="#" className="app-badge">
                <FaDownload />
                <span>Download for iOS</span>
              </a>
            </div>
          </div>
          <div className="showcase-image">
            <img 
              src="/images/app-showcase.png" 
              alt="E-Agri Mobile App Interface" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase; 