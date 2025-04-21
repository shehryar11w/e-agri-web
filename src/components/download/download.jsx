import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Download = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            {t('download.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('download.description')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            {/* Play Store Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.eagri.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGooglePlay className="w-8 h-8 text-brand" />
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('download.buttons.getItOn')}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{t('download.buttons.googlePlay')}</div>
              </div>
            </motion.a>

            {/* App Store Button */}
            <motion.a
              href="https://apps.apple.com/app/e-agri/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaApple className="w-8 h-8 text-brand" />
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('download.buttons.downloadOnThe')}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{t('download.buttons.appStore')}</div>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download; 