import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transform Your Agriculture with Smart Solutions</h1>
          <p>Empower your farming business with cutting-edge technology and data-driven insights. Join thousands of farmers who are already reaping the benefits.</p>
          <div className="hero-buttons">
            <a href="#get-started" className="primary-button">Get Started Free</a>
            <a href="#demo" className="secondary-button">Watch Demo</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/hero-image.png" alt="E-Agri Platform Preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
