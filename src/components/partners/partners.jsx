import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import euronet from '../../assets/partners/euronet.png';
import cma from '../../assets/partners/cma.svg';
import syngenta from '../../assets/partners/syngenta.svg';

const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    { name: 'Euronet', logo: euronet, url: 'https://euronetpakistan.com/' },
    { name: 'CMA', logo: cma },
    { name: 'Syngenta', logo: syngenta, url: 'https://www.syngenta.com/' },
  ];

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: [0, -1000],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  // Handle hover events
  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    startAnimation();
  };

  const renderPartnerLogo = (partner, index, suffix = '') => {
    const key = `${partner.name}-${index}${suffix}`;
    const content = (
      <img 
        src={partner.logo} 
        alt={`${partner.name} logo`}
        className="w-[140px] h-[80px] object-contain opacity-100"
      />
    );

    const containerContent = partner.url ? (
      <a 
        href={partner.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full"
      >
        {content}
      </a>
    ) : content;

    return (
      <motion.div
        key={key}
        className="flex items-center justify-center w-[200px] h-[120px] bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-md dark:backdrop-blur-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        {containerContent}
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('partners.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('partners.description')}
          </p>
        </motion.div>

        <div 
          className="relative w-full h-[180px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            className="absolute inset-0 flex items-center gap-8"
            animate={controls}
          >
            {/* First set of logos */}
            <div className="flex items-center gap-8 ml-8">
              {partners.map((partner, index) => renderPartnerLogo(partner, index))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-8">
              {partners.map((partner, index) => renderPartnerLogo(partner, index, '-duplicate'))}
            </div>

            {/* Second duplicate set for extra smoothness */}
            <div className="flex items-center gap-8">
              {partners.map((partner, index) => renderPartnerLogo(partner, index, '-duplicate-2'))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 