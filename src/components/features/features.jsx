import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaChartLine, FaTint, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa';
import './features.css';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
    };
  }, [isModalOpen]);

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  const features = [
    {
      icon: <FaLeaf />,
      title: "Smart Farming",
      description: "AI-powered crop recommendations and disease detection",
      details: "Our smart farming system uses advanced AI algorithms to analyze soil conditions, weather patterns, and crop health. Get personalized recommendations for optimal planting times, fertilization schedules, and pest control measures."
    },
    {
      icon: <FaChartLine />,
      title: "Yield Analytics",
      description: "Data-driven insights for better crop management",
      details: "Track your farm's performance with detailed analytics. Monitor yield trends, resource usage, and cost efficiency. Make informed decisions based on historical data and predictive analytics."
    },
    {
      icon: <FaTint />,
      title: "Water Management",
      description: "Efficient irrigation and water conservation",
      details: "Optimize water usage with smart irrigation systems. Monitor soil moisture levels, weather forecasts, and crop water requirements. Reduce water waste and improve crop health."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Access",
      description: "Manage your farm from anywhere",
      details: "Access all farm management tools through our mobile app. Monitor field conditions, receive alerts, and make decisions on the go. Stay connected to your farm 24/7."
    },
    {
      icon: <FaCloud />,
      title: "Weather Integration",
      description: "Real-time weather data and forecasts",
      details: "Get accurate weather forecasts and alerts specific to your farm location. Plan activities based on weather conditions and protect your crops from adverse weather events."
    },
    {
      icon: <FaShieldAlt />,
      title: "Crop Protection",
      description: "Early disease and pest detection",
      details: "Detect crop diseases and pest infestations early with our AI-powered image recognition system. Get instant alerts and recommended treatment options to protect your yield."
    }
  ];

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

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="features"
      id="features"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="features-container">
        <motion.div 
          className="features-header"
          variants={itemVariants}
        >
          <h2 className="features-title">Our Features</h2>
          <p className="features-description">
            Discover how our platform can transform your farming experience
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              onClick={() => openModal(feature)}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <motion.button 
                className="feature-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(feature);
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedFeature && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className="modal-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {selectedFeature.icon}
              </motion.div>
              <h3 className="modal-title">{selectedFeature.title}</h3>
              <p className="modal-description">{selectedFeature.details}</p>
              <motion.button 
                className="modal-close"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Features; 