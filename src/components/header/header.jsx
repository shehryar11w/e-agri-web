import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Download App', href: '#download' }
  ];

  return (
    <motion.header 
      className="header"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="header-container">
        <motion.a href="/" className="logo" whileHover={{ scale: 1.05 }}>
          <img src={logo} alt="E-Agri Logo" />
          <span>E-Agri</span>
        </motion.a>

        <nav className="nav-desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              variants={navItemVariants}
              whileHover={{ scale: 1.1, color: "var(--primary-color)" }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="header-actions">
          <motion.button 
            className="language-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGlobe />
            <span>EN</span>
          </motion.button>

          <motion.button 
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="nav-mobile"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                variants={navItemVariants}
                whileHover={{ x: 10, color: "var(--primary-color)" }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 