import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaChevronLeft, FaChevronRight, FaGraduationCap, FaNewspaper, FaMicroscope, 
  FaUsers, FaRobot, FaShoppingCart, FaPhoneAlt, FaThermometerHalf, FaPlane, 
  FaFingerprint, FaNetworkWired, FaFlask, FaBook, FaVideo, FaChartLine, 
  FaHandshake, FaCloud, FaSatellite, FaLeaf, FaSeedling, FaTractor, 
  FaSearch, FaDatabase, FaLightbulb, FaGlobe, FaUserFriends, FaComments,
  FaBrain, FaChartBar, FaCog, FaUtensils, FaTruck, FaWarehouse, FaClipboardCheck
} from 'react-icons/fa';

const ComingSoon = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingFeatures = [
    {
      title: t('comingSoon.features.eLearn.title'),
      description: t('comingSoon.features.eLearn.description'),
      icon: <FaGraduationCap className="w-8 h-8" />,
      capabilities: [
        { icon: <FaBook className="w-5 h-5" />, text: t('comingSoon.features.eLearn.capabilities.interactiveCourses') },
        { icon: <FaVideo className="w-5 h-5" />, text: t('comingSoon.features.eLearn.capabilities.videoTutorials') },
        { icon: <FaChartLine className="w-5 h-5" />, text: t('comingSoon.features.eLearn.capabilities.progressTracking') }
      ]
    },
    {
      title: t('comingSoon.features.communityClassifieds.title'),
      description: t('comingSoon.features.communityClassifieds.description'),
      icon: <FaShoppingCart className="w-8 h-8" />,
      capabilities: [
        { icon: <FaHandshake className="w-5 h-5" />, text: t('comingSoon.features.communityClassifieds.capabilities.secureTransactions') },
        { icon: <FaSearch className="w-5 h-5" />, text: t('comingSoon.features.communityClassifieds.capabilities.advancedSearch') },
        { icon: <FaGlobe className="w-5 h-5" />, text: t('comingSoon.features.communityClassifieds.capabilities.localMarketplace') }
      ]
    },
    {
      title: t('comingSoon.features.agriPhone.title'),
      description: t('comingSoon.features.agriPhone.description'),
      icon: <FaPhoneAlt className="w-8 h-8" />,
      capabilities: [
        { icon: <FaFingerprint className="w-5 h-5" />, text: t('comingSoon.features.agriPhone.capabilities.fingerprintScanner') },
        { icon: <FaNetworkWired className="w-5 h-5" />, text: t('comingSoon.features.agriPhone.capabilities.loraWanConnectivity') },
        { icon: <FaFlask className="w-5 h-5" />, text: t('comingSoon.features.agriPhone.capabilities.soilAnalytics') }
      ]
    },
    {
      title: t('comingSoon.features.iotSoilSensors.title'),
      description: t('comingSoon.features.iotSoilSensors.description'),
      icon: <FaThermometerHalf className="w-8 h-8" />,
      capabilities: [
        { icon: <FaCloud className="w-5 h-5" />, text: t('comingSoon.features.iotSoilSensors.capabilities.cloudIntegration') },
        { icon: <FaDatabase className="w-5 h-5" />, text: t('comingSoon.features.iotSoilSensors.capabilities.dataAnalytics') },
        { icon: <FaChartBar className="w-5 h-5" />, text: t('comingSoon.features.iotSoilSensors.capabilities.trendVisualization') }
      ]
    },
    {
      title: t('comingSoon.features.droneServices.title'),
      description: t('comingSoon.features.droneServices.description'),
      icon: <FaPlane className="w-8 h-8" />,
      capabilities: [
        { icon: <FaSatellite className="w-5 h-5" />, text: t('comingSoon.features.droneServices.capabilities.aerialMapping') },
        { icon: <FaLeaf className="w-5 h-5" />, text: t('comingSoon.features.droneServices.capabilities.precisionSpraying') },
        { icon: <FaSeedling className="w-5 h-5" />, text: t('comingSoon.features.droneServices.capabilities.cropMonitoring') }
      ]
    },
    {
      title: t('comingSoon.features.latestNews.title'),
      description: t('comingSoon.features.latestNews.description'),
      icon: <FaNewspaper className="w-8 h-8" />,
      capabilities: [
        { icon: <FaGlobe className="w-5 h-5" />, text: t('comingSoon.features.latestNews.capabilities.globalUpdates') },
        { icon: <FaSearch className="w-5 h-5" />, text: t('comingSoon.features.latestNews.capabilities.customizedFeeds') },
        { icon: <FaLightbulb className="w-5 h-5" />, text: t('comingSoon.features.latestNews.capabilities.marketInsights') }
      ]
    },
    {
      title: t('comingSoon.features.newResearch.title'),
      description: t('comingSoon.features.newResearch.description'),
      icon: <FaMicroscope className="w-8 h-8" />,
      capabilities: [
        { icon: <FaDatabase className="w-5 h-5" />, text: t('comingSoon.features.newResearch.capabilities.researchDatabase') },
        { icon: <FaChartLine className="w-5 h-5" />, text: t('comingSoon.features.newResearch.capabilities.dataAnalysis') },
        { icon: <FaCog className="w-5 h-5" />, text: t('comingSoon.features.newResearch.capabilities.innovationTracking') }
      ]
    },
    {
      title: t('comingSoon.features.communityConnections.title'),
      description: t('comingSoon.features.communityConnections.description'),
      icon: <FaUsers className="w-8 h-8" />,
      capabilities: [
        { icon: <FaUserFriends className="w-5 h-5" />, text: t('comingSoon.features.communityConnections.capabilities.expertNetwork') },
        { icon: <FaComments className="w-5 h-5" />, text: t('comingSoon.features.communityConnections.capabilities.discussionForums') },
        { icon: <FaHandshake className="w-5 h-5" />, text: t('comingSoon.features.communityConnections.capabilities.collaborationTools') }
      ]
    },
    {
      title: t('comingSoon.features.agenticAI.title'),
      description: t('comingSoon.features.agenticAI.description'),
      icon: <FaRobot className="w-8 h-8" />,
      capabilities: [
        { icon: <FaBrain className="w-5 h-5" />, text: t('comingSoon.features.agenticAI.capabilities.smartRecommendations') },
        { icon: <FaChartBar className="w-5 h-5" />, text: t('comingSoon.features.agenticAI.capabilities.predictiveAnalytics') },
        { icon: <FaCog className="w-5 h-5" />, text: t('comingSoon.features.agenticAI.capabilities.automatedPlanning') }
      ]
    },
    {
      title: t('comingSoon.features.eFoodSupply.title'),
      description: t('comingSoon.features.eFoodSupply.description'),
      icon: <FaUtensils className="w-8 h-8" />,
      capabilities: [
        { icon: <FaTruck className="w-5 h-5" />, text: t('comingSoon.features.eFoodSupply.capabilities.logisticsTracking') },
        { icon: <FaWarehouse className="w-5 h-5" />, text: t('comingSoon.features.eFoodSupply.capabilities.inventoryManagement') },
        { icon: <FaClipboardCheck className="w-5 h-5" />, text: t('comingSoon.features.eFoodSupply.capabilities.qualityControl') }
      ]
    },
    {
      title: t('comingSoon.features.animalFeed.title'),
      description: t('comingSoon.features.animalFeed.description'),
      icon: <FaSeedling className="w-8 h-8" />,
      capabilities: [
        { icon: <FaDatabase className="w-5 h-5" />, text: t('comingSoon.features.animalFeed.capabilities.feedInventory') },
        { icon: <FaChartLine className="w-5 h-5" />, text: t('comingSoon.features.animalFeed.capabilities.consumptionTracking') },
        { icon: <FaClipboardCheck className="w-5 h-5" />, text: t('comingSoon.features.animalFeed.capabilities.nutritionPlanning') }
      ]
    }
  ];

  // Auto-swipe functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % upcomingFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [upcomingFeatures.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingFeatures.length) % upcomingFeatures.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('comingSoon.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('comingSoon.description')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {upcomingFeatures.slice(currentSlide, currentSlide + 3).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-brand mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    
                    {feature.capabilities && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          {t('comingSoon.keyFeatures')}:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {feature.capabilities.map((capability, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs"
                            >
                              <span className="text-brand">{capability.icon}</span>
                              <span className="text-gray-700 dark:text-gray-300">{capability.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {upcomingFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide
                    ? 'bg-brand'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon; 