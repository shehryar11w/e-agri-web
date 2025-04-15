import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloud, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';


import ELoan from '../../assets/mockups/E-Loan.png';

import EMundi from '../../assets/modulesLogos/market.png';
import EAdvisor from '../../assets/modulesLogos/AI.png';
import EMarket from '../../assets/modulesLogos/market.png';
import EWarehouse from '../../assets/modulesLogos/warehouse.png';
import EPlantDoctor from '../../assets/modulesLogos/PlantDr.png';
import EAuction from '../../assets/modulesLogos/money.png';
import EOrders from '../../assets/modulesLogos/orders.png';
import ERental from '../../assets/modulesLogos/tractor.png';
import ETransport from '../../assets/modulesLogos/truck.png';
import EFoodSupply from '../../assets/modulesLogos/A.png';
import EMunshi from '../../assets/modulesLogos/register.png';
import ESettlements from '../../assets/modulesLogos/deal.png';
import EAnimalFeed from '../../assets/modulesLogos/feed.png';


const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDarkMode } = useTheme();

  const MockupFeatures = [
    { 
      icon: EAdvisor,
      title: "E-Advisor",
      description: "AI-powered agricultural intelligence",
      details: "Our E-Advisor system leverages advanced AI to provide personalized farming recommendations. Get real-time insights on crop health, pest detection, and optimal planting times. Make data-driven decisions with confidence.",
      mockup: ELoan,
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: EMarket,
      title: "E-Market",
      description: "Digital marketplace for agricultural products",
      details: "Connect with buyers and sellers in our digital marketplace. Access real-time market prices, manage inventory, and execute seamless transactions. Expand your market reach and optimize your sales strategy.",
      mockup: ELoan,
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: EPlantDoctor,
      title: "Plant Doctor",
      description: "Smart crop health monitoring",
      details: "Diagnose plant diseases instantly with our AI-powered image recognition system. Get detailed treatment recommendations and preventive measures to protect your crops and maximize yields with expert guidance.",
      mockup: ELoan,
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: EWarehouse,
      title: "E-Warehouse",
      description: "Smart storage management",
      details: "Optimize your storage operations with our digital warehouse management system. Track inventory levels, manage storage conditions, and streamline logistics. Ensure optimal product quality while reducing storage cost.",
      mockup: ELoan,
      color: "from-white to-white dark:from-white dark:to-white"
    },
    { 
      icon: EAuction,
      title: "E-Auction",
      description: "Digital auction platform",
      details: "Participate in transparent digital auctions for agricultural products. Set reserve prices, place bids, and track auction status in real-time. Get fair market value for your produce through competitive bidding.",
      mockup: ELoan,
      color: "from-white to-white dark:from-white dark:to-white"
    },
    { 
      icon: EAuction,
      title: "E-Loan",
      description: "Agricultural financing solutions",
      details: "Access quick and flexible agricultural loans through our digital platform. Get competitive interest rates, simplified application process, and transparent terms. Secure funding for your farming operations with ease.",
      mockup: ELoan,
      color: "from-white to-white dark:from-white dark:to-white"
    },
  ];

  // Auto-swipe functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MockupFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [MockupFeatures.length]);

  const features = [
    {
      icon: EMundi,
      title: "E-Orders",
      description: "Streamlined order management",
      details: "Manage your agricultural orders efficiently with our digital platform. Track order status, handle bulk orders, and automate order processing. Reduce errors and improve customer satisfaction.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      key: 'eRental',
      icon: ERental,
      title: "E-Rental",
      description: "Equipment rental marketplace",
      details: "Access a wide range of agricultural equipment through our rental platform. Find available machinery, compare rates, and manage rentals digitally. Optimize equipment costs and improve operational efficiency.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      key: 'eTransport',
      icon: ETransport,
      title: "E-Transport",
      description: "Smart logistics management",
      details: "Streamline your agricultural logistics with our transport management system. Track shipments, optimize routes, and manage delivery schedules. Ensure timely and cost-effective product delivery.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      key: 'eFoodSupply',
      icon: EFoodSupply,
      title: "E-Food Supply",
      description: "Supply chain management",
      details: "Optimize your food supply chain with our digital platform. Track product flow, manage suppliers, and ensure quality control. Build a reliable and efficient supply network.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      key: 'eMunshi',
      icon: EMunshi,
      title: "E-Munshi",
      description: "Digital record keeping",
      details: "Maintain accurate digital records of your agricultural operations. Track transactions, manage documentation, and generate reports. Stay organized and compliant with digital record-keeping.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      key: 'settlements',
      icon: ESettlements,
      title: "Settlements",
      description: "Automated payment processing",
      details: "Process payments and settlements efficiently with our digital platform. Handle multiple payment methods, track transactions, and manage financial records. Ensure smooth and secure financial operations.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      key: 'animalFeed',
      icon: EAnimalFeed,
      title: "Animal Feed",
      description: "Feed management system",
      details: "Manage your animal feed inventory and distribution digitally. Track feed quality, monitor consumption, and optimize feed schedules. Ensure proper nutrition and cost-effective feed management.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: <FaCloud />,
      title: "Backend Feature",
      description: "Real-time weather data and forecasts",
      details: "Get accurate weather forecasts and alerts specific to your farm location. Plan activities based on weather conditions and protect your crops from adverse weather events.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: <FaCloud />,
      title: "Backend Feature",
      description: "Real-time weather data and forecasts",
      details: "Get accurate weather forecasts and alerts specific to your farm location. Plan activities based on weather conditions and protect your crops from adverse weather events.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: <FaCloud />,
      title: "Backend Feature",
      description: "Real-time weather data and forecasts",
      details: "Get accurate weather forecasts and alerts specific to your farm location. Plan activities based on weather conditions and protect your crops from adverse weather events.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
    {
      icon: <FaCloud />,
      title: "Backend Feature",
      description: "Real-time weather data and forecasts",
      details: "Get accurate weather forecasts and alerts specific to your farm location. Plan activities based on weather conditions and protect your crops from adverse weather events.",
      color: "from-white to-white dark:from-white dark:to-white"
    },
  ];

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % MockupFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + MockupFeatures.length) % MockupFeatures.length);
  };

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
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
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

        {/* Feature Carousel */}
        <div className="relative h-auto max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row min-h-[400px]"
            >
              {/* Mockup Image */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex items-center justify-center">
                <motion.img
                  src={MockupFeatures[currentSlide].mockup}
                  alt={MockupFeatures[currentSlide].title}
                  className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-none object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>

              {/* Feature Description */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center md:text-left"
                >
                  <motion.div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0 mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${MockupFeatures[currentSlide].color} rounded-full text-white text-2xl sm:text-3xl shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <img src={MockupFeatures[currentSlide].icon} alt={MockupFeatures[currentSlide].title} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                    {MockupFeatures[currentSlide].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                    {MockupFeatures[currentSlide].description}
                  </p>
                  <motion.button 
                    className="px-4 sm:px-6 py-2 border-2 m-4 border-brand text-brand rounded-full text-sm sm:text-base font-medium hover:bg-brand hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(MockupFeatures[currentSlide])}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-all duration-300 z-10"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-all duration-300 z-10"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {MockupFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-brand w-4'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-brand/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center shadow-lg dark:shadow-gray-900/30 transition-all duration-300 cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/50 relative overflow-hidden group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setCurrentSlide(index);
                openModal(feature);
              }}
            >
              {/* Pulse animation background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent rounded-2xl"
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
              />
              
              {/* Click indicator */}
              <motion.div 
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </motion.div>
              
              <motion.div 
                className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-full text-white text-xl transition-all duration-300 shadow-lg`}
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <img src={feature.icon} alt={feature.title} className="w-6 h-6 object-contain" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              
              {/* Click to view text */}
              <motion.div 
                className="mt-4 text-xs text-brand font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Click to learn more
              </motion.div>
            </motion.div>
          ))}
        </div>

        
      </div>

      {/* Modal */}
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
                className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${selectedFeature.color} rounded-full text-white text-3xl shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {typeof selectedFeature.icon === 'string' ? (
                  <img src={selectedFeature.icon} alt={selectedFeature.title} className="w-10 h-10 object-contain" />
                ) : (
                  selectedFeature.icon
                )}
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