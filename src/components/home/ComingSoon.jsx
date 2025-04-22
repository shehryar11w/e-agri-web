import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  FaChevronLeft, FaChevronRight, FaGraduationCap, FaNewspaper, FaMicroscope, 
  FaUsers, FaRobot, FaShoppingCart, FaPhoneAlt, FaThermometerHalf, FaPlane, 
  FaFingerprint, FaNetworkWired, FaFlask, FaBook, FaVideo, FaChartLine, 
  FaHandshake, FaCloud, FaSatellite, FaLeaf, FaSeedling, 
  FaSearch, FaDatabase, FaLightbulb, FaGlobe, FaUserFriends, FaComments,
  FaBrain, FaChartBar, FaCog, FaUtensils, FaTruck, FaWarehouse, FaClipboardCheck
} from 'react-icons/fa';
import DroneSvg from '../../assets/modulesLogos/camera-drone 1 (1).svg';

const ComingSoon = () => {
  const { t } = useTranslation();

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
      icon: <img src={DroneSvg} alt="Drone" className=" h-8" />,
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

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      <FaChevronRight className="text-gray-600 dark:text-gray-300" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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

        <div className="relative px-4 py-8">
          <Slider {...settings} className="coming-soon-slider">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="px-4 py-2"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="text-brand mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[3em] line-clamp-2">
                    {feature.description}
                  </p>
                  
                  {feature.capabilities && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        {t('comingSoon.keyFeatures')}:
                      </h4>
                      <div className="flex flex-col gap-2">
                        {feature.capabilities.map((capability, idx) => (
                          <motion.div 
                            key={idx}
                            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                          >
                            <span className="text-brand">{capability.icon}</span>
                            <span className="text-gray-700 dark:text-gray-300">{capability.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .coming-soon-slider .slick-dots {
          bottom: -20px;
        }
        .coming-soon-slider .slick-dots li button:before {
          color: #9CA3AF;
          opacity: 0.5;
        }
        .coming-soon-slider .slick-dots li.slick-active button:before {
          color: #22C55E;
          opacity: 1;
        }
        .coming-soon-slider .slick-track {
          display: flex;
          align-items: stretch;
          padding: 1rem 0;
        }
        .coming-soon-slider .slick-slide {
          height: auto;
        }
        .coming-soon-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default ComingSoon; 