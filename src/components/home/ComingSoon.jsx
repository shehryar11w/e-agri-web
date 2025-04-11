import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaGraduationCap, FaNewspaper, FaMicroscope, FaUsers, FaRobot, FaShoppingCart, FaPhoneAlt, FaThermometerHalf, FaPlane } from 'react-icons/fa';

const ComingSoon = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingFeatures = [
    {
      title: 'E Learn',
      description: 'Interactive agricultural learning platform',
      icon: <FaGraduationCap className="w-8 h-8" />
    },
    {
      title: 'Community Classifieds',
      description: 'Buy, sell, and trade within the farming community',
      icon: <FaShoppingCart className="w-8 h-8" />
    },
    {
      title: 'Agri Phone',
      description: 'Direct communication with agricultural experts',
      icon: <FaPhoneAlt className="w-8 h-8" />
    },
    {
      title: 'IoT Soil Sensors',
      description: 'Real-time soil monitoring and analysis',
      icon: <FaThermometerHalf className="w-8 h-8" />
    },
    {
      title: 'Drone Services',
      description: 'Aerial monitoring and spraying services',
      icon: <FaPlane className="w-8 h-8" />
    },
    {
      title: 'Latest News',
      description: 'Stay updated with agricultural news',
      icon: <FaNewspaper className="w-8 h-8" />
    },
    {
      title: 'New Research',
      description: 'Access to latest agricultural research',
      icon: <FaMicroscope className="w-8 h-8" />
    },
    {
      title: 'Community Connections',
      description: 'Connect with fellow farmers and experts',
      icon: <FaUsers className="w-8 h-8" />
    },
    {
      title: 'Agentic AI',
      description: 'AI-powered farming assistance and recommendations',
      icon: <FaRobot className="w-8 h-8" />
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
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exciting new features coming to enhance your farming experience
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
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
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