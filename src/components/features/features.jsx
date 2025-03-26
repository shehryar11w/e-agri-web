import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaChartLine, FaTint, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

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
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      id="features"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our platform can transform your farming experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg dark:shadow-gray-900/30 transition-all duration-300 cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/50"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: isDarkMode ? "0 20px 40px rgba(0, 0, 0, 0.3)" : "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              onClick={() => openModal(feature)}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 text-2xl transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
              <motion.button 
                className="px-6 py-2 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-full font-medium hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 transition-all duration-300"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-2xl w-[90%] relative shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 text-3xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {selectedFeature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">{selectedFeature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{selectedFeature.details}</p>
              <motion.button 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Features; 