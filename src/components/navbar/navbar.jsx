import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-brand">
              E-Agri
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              Features
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              About
            </a>
            <a href="#partners" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              Partners
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand">
              Contact
            </a>
            {children}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#partners"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            Partners
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="px-3 py-2">
            {children}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 