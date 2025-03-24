import React from 'react';
import { FaLeaf, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import './about.css';

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: 'Our Mission',
      description: 'To empower Pakistani farmers with cutting-edge technology and data-driven insights for sustainable and profitable agriculture.'
    },
    {
      icon: <FaChartLine />,
      title: 'Our Vision',
      description: "To transform Pakistan's agricultural sector into a modern, efficient, and sustainable industry that feeds the nation."
    },
    {
      icon: <FaUsers />,
      title: 'Our Team',
      description: 'A diverse team of agricultural experts, technologists, and farmers working together to revolutionize farming in Pakistan.'
    },
    {
      icon: <FaHandshake />,
      title: 'Our Impact',
      description: 'Helping thousands of farmers increase their yields, reduce costs, and make data-driven decisions for better farming outcomes.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            Transforming Agriculture in Pakistan
          </h2>
          <p className="about-description">
            E-Agri is revolutionizing farming in Pakistan by combining traditional agricultural knowledge with modern technology. Our platform helps farmers make informed decisions, optimize resources, and increase their yields while promoting sustainable farming practices.
          </p>
          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img 
            src="/images/about-farmers.jpg" 
            alt="Pakistani farmers using E-Agri app" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About; 