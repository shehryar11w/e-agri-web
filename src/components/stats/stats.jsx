import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaLeaf, FaChartLine, FaHandshake } from 'react-icons/fa';
import './stats.css';

const Stats = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

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

  const stats = [
    {
      icon: <FaUsers />,
      number: 50000,
      label: "Active Farmers",
      suffix: "+"
    },
    {
      icon: <FaLeaf />,
      number: 100000,
      label: "Acres Covered",
      suffix: "+"
    },
    {
      icon: <FaChartLine />,
      number: 30,
      label: "Yield Increase",
      suffix: "%"
    },
    {
      icon: <FaHandshake />,
      number: 1000,
      label: "Partners",
      suffix: "+"
    }
  ];

  return (
    <motion.section 
      className="stats"
      id="stats"
      style={{ opacity, y }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="stats-container">
        <motion.div 
          className="stats-header"
          variants={itemVariants}
        >
          <h2 className="stats-title">Our Impact</h2>
          <p className="stats-description">
            Empowering farmers with technology and data-driven insights
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="stat-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="stat-number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats; 