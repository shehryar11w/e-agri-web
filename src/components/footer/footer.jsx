import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();
  
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


  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.contact'), href: '#contact' },
    // { name: t('nav.downloadApp'), href: '#download' }
  ];

  const supportLinks = [
    { name: t('footer.termsOfService'), href: 'https://elixirflare.com/terms-and-conditions/' },
    { name: t('footer.privacyPolicy'), href: 'https://elixirflare.com/privacy-policy/' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
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
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-brand" />
                <a 
                  href="mailto:info@e-agri.com.pk"
                  className="hover:text-brand dark:hover:text-brand transition-colors"
                >
                  info@e-agri.com.pk
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="text-brand" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} E-Agri. All rights reserved. Powered by{' '}
              <a 
                href="https://elixirflare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark transition-colors"
              >
                Elixir Flare
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 