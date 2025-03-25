import React from 'react';
import { motion } from 'framer-motion';
import './partners.css';

import mite from '../../assets/partners/mite.png';
import euronet from '../../assets/partners/euronet.png';
import faysalBank from '../../assets/partners/faysalBank.svg';


const Partners = () => {
  const partners = [
    { name: 'MiTe', logo: mite },
    { name: 'Euronet', logo: euronet },
    { name: 'Faysal Bank', logo: faysalBank },
    { name: 'MiTe', logo: mite },
    { name: 'Euronet', logo: euronet },
    { name: 'Faysal Bank', logo: faysalBank },
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <motion.div 
          className="partners-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="partners-title">Our Partners</h2>
          <p className="partners-description">
            Collaborating with industry leaders to revolutionize agriculture
          </p>
        </motion.div>

        <div className="ticker-container">
          <div className="ticker">
            <div className="ticker-wrapper">
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="partner-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="partner-logo"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 