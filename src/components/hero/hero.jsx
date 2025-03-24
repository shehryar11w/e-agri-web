import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight} from 'react-icons/fa';
import './hero.css';
import homeScreen from '../../assets/HomeScreen.png';



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

  // Stats animations
  const statsY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          style={{
            y: titleY,
          }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Agriculture with
            <span className="highlight"> Technology</span>
          </motion.h1>
          <motion.p 
            className="hero-description"
            style={{
              y: descriptionY,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering farmers with cutting-edge solutions for sustainable and profitable farming.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#features" 
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FaArrowRight />
            </motion.a>
            <motion.a 
              href="#about" 
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          style={{
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={homeScreen} alt="Agriculture Technology" />
          
        </motion.div>

        <motion.div 
          className="hero-stats"
          style={{
            y: statsY,
            opacity: statsOpacity,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Farmers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Acres Covered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30%</span>
            <span className="stat-label">Yield Increase</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Partners</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 