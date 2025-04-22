import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.about'), href: '#about' },
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
            <img src={logo} alt={t('header.logoAlt')} className="h-8" />
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
                <FaPhone className="text-brand" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-brand" />
                <span>{t('footer.email')}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="text-brand" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand hover:text-white dark:hover:bg-brand dark:hover:text-white transition-colors"
                  variants={socialLinkVariants}
                  whileHover="hover"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 