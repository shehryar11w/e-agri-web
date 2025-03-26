import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Dashboard from '../../assets/Dashboard.png';


const Hero = () => {
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
      className="min-h-screen flex items-center py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          className="relative w-full max-w-[500px] mx-auto"
          style={{
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src={Dashboard} 
            alt="Agriculture Technology" 
            className="w-full h-auto backdrop-opacity-0"
          />
        </motion.div>

        <motion.div 
          className="flex flex-col gap-8"
          style={{ y: titleY }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Agriculture with
            <span className="relative inline-block group">
              <span className="text-brand dark:text-brand relative z-10 px-1">Technology</span>
              {/* Animated underline with gradient */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand/40 via-brand to-brand/40 
                             dark:from-brand/30 dark:via-brand dark:to-brand/30
                             transform origin-left transition-all duration-300 ease-out
                             scale-x-0 group-hover:scale-x-100
                             after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r 
                             after:from-transparent after:via-white/20 after:to-transparent
                             after:translate-x-[-100%] group-hover:after:translate-x-[100%]
                             after:transition-transform after:duration-700 after:ease-in-out" />
              {/* Subtle glow effect */}
              <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 
                             dark:group-hover:bg-brand/10
                             rounded-lg blur-sm transition-all duration-300 ease-out" />
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            style={{ y: descriptionY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering farmers with cutting-edge solutions for sustainable and profitable farming.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#features" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-medium shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FaArrowRight className="text-sm" />
            </motion.a>
            <motion.a 
              href="#about" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand text-gray-900 dark:text-white font-medium hover:bg-brand/10 dark:hover:bg-brand/20 hover:text-brand dark:hover:text-brand transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 