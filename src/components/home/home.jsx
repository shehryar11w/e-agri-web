import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaLeaf, FaTractor, FaSeedling, FaHandshake } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Dashboard from '../../assets/Dashboard.png';
import HeroBkg from '../../assets/HeroBkg.png';

const Hero = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center py-12 sm:py-16 md:py-24 relative overflow-hidden"
      id="home"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={HeroBkg} 
          alt={t('hero.backgroundAlt')} 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/80" />
      </div>

      {/* Additional gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-30 pointer-events-none" />

      {/* Agricultural elements overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-emerald-500/20 dark:text-emerald-400/20 transform rotate-12">
          <FaLeaf className="w-24 h-24" />
        </div>
        <div className="absolute bottom-40 right-10 text-emerald-500/20 dark:text-emerald-400/20 transform -rotate-12">
          <FaTractor className="w-32 h-32" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-emerald-500/20 dark:text-emerald-400/20">
          <FaSeedling className="w-16 h-16" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-emerald-500/20 dark:text-emerald-400/20">
          <FaHandshake className="w-20 h-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        {/* Dashboard Image */}
        <motion.div 
          className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] mx-auto order-2 md:order-1"
          style={{
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
            <img 
              src={Dashboard} 
              alt={t('hero.dashboardAlt')} 
              className="w-full h-full object-contain drop-shadow-2xl"
              loading="eager"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-brand/10 blur-3xl transform -translate-y-4" />
            
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="flex flex-col gap-6 sm:gap-8 order-1 md:order-2 text-center md:text-left"
          style={{ y: titleY }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
            <span className="relative inline-block group">
              <span className="text-brand relative z-10 px-1">{t('hero.technology')}</span>
              {/* Animated underline with gradient */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand/40 via-brand to-brand/40 
                             transform origin-left transition-all duration-300 ease-out
                             scale-x-0 group-hover:scale-x-100
                             after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r 
                             after:from-transparent after:via-white/20 after:to-transparent
                             after:translate-x-[-100%] group-hover:after:translate-x-[100%]
                             after:transition-transform after:duration-700 after:ease-in-out" />
              {/* Subtle glow effect */}
              <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 
                             rounded-lg blur-sm transition-all duration-300 ease-out" />
            </span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto md:mx-0"
            style={{ y: descriptionY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#features" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-medium shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.getStarted')} <FaArrowRight className="text-sm" />
            </motion.a>
            <motion.a 
              href="#about" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.learnMore')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 