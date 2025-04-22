import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language-switcher/language-switcher';

import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.downloadApp'), href: '#download' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-900/30 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-900/50' : ''
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-8 flex items-center justify-between">
        <motion.a 
          href="/" 
          className="flex items-center gap-3 text-gray-900 dark:text-white hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt={t('header.logoAlt')} className="w-10 h-10 drop-shadow-md" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">
            E-Agri
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 font-medium relative py-1 group"
              variants={navItemVariants}
              whileHover={{ scale: 1.1, color: "#059669" }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button 
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </motion.button>

          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <motion.button 
            className="md:hidden text-gray-900 dark:text-white text-xl p-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
            ref={menuRef}
            className="fixed top-0 right-0 w-full md:w-[400px] bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-900/50 p-8 md:p-12 z-50 rounded-b-2xl"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex justify-between mb-8">
              <motion.button 
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </motion.button>
              <motion.button 
                className="text-gray-900 dark:text-white text-xl p-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes />
              </motion.button>
            </div>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-4 text-lg text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                variants={navItemVariants}
                whileHover={{ x: 10, color: "#059669" }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 