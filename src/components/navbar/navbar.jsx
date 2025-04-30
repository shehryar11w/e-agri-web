import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-brand">
              <img src="/logo.png" alt={t('header.logoAlt')} className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              {t('nav.features')}
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              {t('nav.about')}
            </a>
            <a href="#partners" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              {t('nav.partners')}
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              {t('nav.contact')}
            </a>
            {children}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Language Selector for Mobile */}
            {children}
            
            {/* Mobile menu button */}
            <motion.button
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.features')}
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.about')}
          </a>
          <a
            href="#partners"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.partners')}
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.contact')}
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 