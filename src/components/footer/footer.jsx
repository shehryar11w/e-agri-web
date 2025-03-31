import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';

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

  const supportLinks = [
    { name: 'Terms of Service', href: 'https://elixirflare.com/terms-and-conditions/' },
    { name: 'Privacy Policy', href: 'https://elixirflare.com/privacy-policy/' },
  ];

  return (
    <motion.footer 
      className="bg-gray-900 dark:bg-gray-950 text-white pt-24 pb-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600" />
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,204,113,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div className="max-w-xs" variants={itemVariants}>
            <motion.a 
              href="/" 
              className="flex items-center gap-3 mb-6 text-white hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="E-Agri Logo" className="w-10 h-10 drop-shadow-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-emerald-200 dark:from-emerald-200 dark:to-emerald-400 bg-clip-text text-transparent">
                E-Agri
              </span>
            </motion.a>
            <motion.p className="text-gray-300 dark:text-gray-400 text-base leading-relaxed mb-6" variants={itemVariants}>
              Empowering Pakistani farmers with cutting-edge technology and data-driven insights for sustainable and profitable agriculture.
            </motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors relative overflow-hidden group"
                aria-label="Facebook" 
                whileHover="hover" 
                variants={socialLinkVariants}
              >
                <FaFacebookF className="relative z-10" />
                <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors relative overflow-hidden group"
                aria-label="Twitter" 
                whileHover="hover" 
                variants={socialLinkVariants}
              >
                <FaTwitter className="relative z-10" />
                <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors relative overflow-hidden group"
                aria-label="Instagram" 
                whileHover="hover" 
                variants={socialLinkVariants}
              >
                <FaInstagram className="relative z-10" />
                <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors relative overflow-hidden group"
                aria-label="LinkedIn" 
                whileHover="hover" 
                variants={socialLinkVariants}
              >
                <FaLinkedinIn className="relative z-10" />
                <div className="absolute inset-0 bg-emerald-500 dark:bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 className="text-lg font-semibold mb-6 relative inline-block group" variants={itemVariants}>
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-emerald-500 dark:bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.h3>
            <motion.ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          

          {/* Support Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 className="text-lg font-semibold mb-6 relative inline-block group" variants={itemVariants}>
              Support
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-emerald-500 dark:bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.h3>
            <motion.ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          
        </div>
      </div>

      <motion.div 
        className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 dark:text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p>© {new Date().getFullYear()} E-Agri. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 