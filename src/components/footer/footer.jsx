import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinkVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Download App', href: '#download' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Press', href: '#press' },
    { name: 'Partners', href: '#partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#help' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Contact Support', href: '#support' }
  ];

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-brand" variants={itemVariants}>
          <motion.a href="/" className="footer-logo" whileHover={{ scale: 1.05 }}>
            <img src={logo} alt="E-Agri Logo" />
            <span>E-Agri</span>
          </motion.a>
          <motion.p className="footer-description" variants={itemVariants}>
            Empowering Pakistani farmers with cutting-edge technology and data-driven insights for sustainable and profitable agriculture.
          </motion.p>
          <motion.div className="social-links" variants={itemVariants}>
            <motion.a href="#" className="social-link" aria-label="Facebook" whileHover="hover" variants={socialLinkVariants}>
              <FaFacebookF />
            </motion.a>
            <motion.a href="#" className="social-link" aria-label="Twitter" whileHover="hover" variants={socialLinkVariants}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#" className="social-link" aria-label="Instagram" whileHover="hover" variants={socialLinkVariants}>
              <FaInstagram />
            </motion.a>
            <motion.a href="#" className="social-link" aria-label="LinkedIn" whileHover="hover" variants={socialLinkVariants}>
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 variants={itemVariants}>Quick Links</motion.h3>
          <motion.ul className="footer-links">
            {quickLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <motion.a 
                  href={link.href}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 variants={itemVariants}>Company</motion.h3>
          <motion.ul className="footer-links">
            {companyLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <motion.a 
                  href={link.href}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 variants={itemVariants}>Support</motion.h3>
          <motion.ul className="footer-links">
            {supportLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <motion.a 
                  href={link.href}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 variants={itemVariants}>Contact Us</motion.h3>
          <motion.ul className="contact-info">
            <motion.li variants={itemVariants}>
              <FaPhone />
              <span>+92 300 1234567</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaEnvelope />
              <span>info@e-agri.pk</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaMapMarkerAlt />
              <span>123 Agriculture Street, Islamabad, Pakistan</span>
            </motion.li>
          </motion.ul>
          <motion.div className="newsletter-form" variants={itemVariants}>
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button 
              className="newsletter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} E-Agri. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 