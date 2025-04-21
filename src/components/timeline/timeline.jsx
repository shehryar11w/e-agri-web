import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaSeedling, FaTractor, FaChartLine, FaHandshake, FaLightbulb, FaFlask, FaWarehouse, FaLeaf, FaRocket } from 'react-icons/fa';

const Timeline = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Function to format dates based on language
  const formatDate = (dateString) => {
    // If it's "Current", return the translated version
    if (dateString === 'Current') {
      return t('timeline.events.8.year');
    }

    // Parse the date string
    const [month, year] = dateString.split(' ');
    
    // For English, return as is
    if (i18n.language === 'en') {
      return dateString;
    }
    
    // For Urdu, use the translated month and year
    if (i18n.language === 'ur') {
      // Map English months to Urdu translations
      const monthMap = {
        'January': 'جنوری',
        'February': 'فروری',
        'March': 'مارچ',
        'April': 'اپریل',
        'May': 'مئی',
        'June': 'جون',
        'July': 'جولائی',
        'August': 'اگست',
        'September': 'ستمبر',
        'October': 'اکتوبر',
        'November': 'نومبر',
        'December': 'دسمبر'
      };
      
      return `${monthMap[month] || month} ${year}`;
    }
    
    // Default fallback
    return dateString;
  };

  const timelineData = [
    {
      year: formatDate('September 2024'),
      title: t('timeline.events.0.title'),
      description: t('timeline.events.0.description'),
      icon: FaLightbulb,
    },
    {
      year: formatDate('October 2024'),
      title: t('timeline.events.1.title'),
      description: t('timeline.events.1.description'),
      icon: FaFlask,
    },
    {
      year: formatDate('November 2024'),
      title: t('timeline.events.2.title'),
      description: t('timeline.events.2.description'),
      icon: FaChartLine,
    },
    {
      year: formatDate('December 2024'),
      title: t('timeline.events.3.title'),
      description: t('timeline.events.3.description'),
      icon: FaSeedling,
    },
    {
      year: formatDate('January 2025'),
      title: t('timeline.events.4.title'),
      description: t('timeline.events.4.description'),
      icon: FaTractor,
    },
    {
      year: formatDate('February 2025'),
      title: t('timeline.events.5.title'),
      description: t('timeline.events.5.description'),
      icon: FaWarehouse,
    },
    {
      year: formatDate('March 2025'),
      title: t('timeline.events.6.title'),
      description: t('timeline.events.6.description'),
      icon: FaLeaf,
    },
    {
      year: formatDate('April 2025'),
      title: t('timeline.events.7.title'),
      description: t('timeline.events.7.description'),
      icon: FaRocket,
    },
    {
      year: formatDate('Current'),
      title: t('timeline.events.8.title'),
      description: t('timeline.events.8.description'),
      icon: FaHandshake,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" id="timeline">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('timeline.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('timeline.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={containerRef}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:border-emerald-500 dark:hover:border-emerald-400"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{item.year}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 