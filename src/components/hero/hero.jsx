import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight} from 'react-icons/fa';
import './hero.css';
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
    <section className="hero" ref={sectionRef}>
      <div className="hero-container">

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
          <img src={Dashboard} alt="Agriculture Technology" />
          
        </motion.div>
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

        
      </div>
    </section>
  );
};

export default Hero; 