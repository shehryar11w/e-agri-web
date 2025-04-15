import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import mite from '../../assets/partners/mite.png';
import euronet from '../../assets/partners/euronet.png';
import faysalBank from '../../assets/partners/faysalBank.svg';
import cma from '../../assets/partners/cma.svg';
const Partners = () => {

  const partners = [
    { name: 'MiTe', logo: mite },
    { name: 'Euronet', logo: euronet },
    { name: 'Faysal Bank', logo: faysalBank },
    { name: 'CMA', logo: cma },
  ];

  const controls = useAnimation();

  useEffect(() => {
    // Start the animation
    controls.start({
      x: [0, -1000],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }
    });
  }, [controls]);

  // Handle focus events
  const handleFocus = () => {
    controls.stop();
  };

  const handleBlur = () => {
    controls.start({
      x: [0, -1000],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }
    });
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to revolutionize agriculture
          </p>
        </motion.div>

        <div 
          className="relative w-full h-[180px] overflow-hidden"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <motion.div 
            className="absolute inset-0 flex items-center gap-8"
            animate={controls}
          >
            {/* First set of logos */}
            <div className="flex items-center gap-8 ml-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center w-[200px] h-[120px] bg-white/80 dark:bg-gray-800/40 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 transition-all duration-300 cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/50 backdrop-blur-md dark:backdrop-blur-lg border border-white/20 dark:border-gray-700/50 hover:border-brand/50 dark:hover:border-brand/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-[140px] h-[80px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </motion.div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}-duplicate`}
                  className="flex items-center justify-center w-[200px] h-[120px] bg-white/80 dark:bg-gray-800/40 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 transition-all duration-300 cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/50 backdrop-blur-md dark:backdrop-blur-lg border border-white/20 dark:border-gray-700/50 hover:border-brand/50 dark:hover:border-brand/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-[140px] h-[80px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </motion.div>
              ))}
            </div>

         

            {/* Second duplicate set for extra smoothness */}
            <div className="flex items-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}-duplicate-2`}
                  className="flex items-center justify-center w-[200px] h-[120px] bg-white/80 dark:bg-gray-800/40 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 transition-all duration-300 cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/50 backdrop-blur-md dark:backdrop-blur-lg border border-white/20 dark:border-gray-700/50 hover:border-brand/50 dark:hover:border-brand/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-[140px] h-[80px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 