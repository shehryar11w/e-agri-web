import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSeedling, FaTractor, FaChartLine, FaHandshake, FaLightbulb, FaFlask, FaWarehouse, FaLeaf, FaRocket } from 'react-icons/fa';

const timelineData = [
  {
    year: 'September 2024',
    title: 'Inception',
    description: 'Initial idea and concept development of E-Agri platform.',
    icon: FaLightbulb,
  },
  {
    year: 'October 2024',
    title: 'Research',
    description: 'Comprehensive market research and stakeholder analysis.',
    icon: FaFlask,
  },
  {
    year: 'November 2024',
    title: 'Initial Framework',
    description: 'Development of core platform architecture and framework.',
    icon: FaChartLine,
  },
  {
    year: 'December 2024',
    title: 'POC',
    description: 'Proof of Concept development and initial testing.',
    icon: FaSeedling,
  },
  {
    year: 'January 2025',
    title: 'Commerce Platform',
    description: 'Launch of the e-commerce platform for agricultural products.',
    icon: FaTractor,
  },
  {
    year: 'February 2025',
    title: 'Warehouse & BPR',
    description: 'Warehouse designs and Business Process Reengineering implementation.',
    icon: FaWarehouse,
  },
  {
    year: 'March 2025',
    title: 'Precision Farming',
    description: 'Implementation of precision farming and diagnostics modules.',
    icon: FaLeaf,
  },
  {
    year: 'April 2025',
    title: 'Official Launch',
    description: 'Official platform launch with comprehensive features.',
    icon: FaRocket,
  },
  {
    year: 'Current',
    title: 'Expansion Phase',
    description: 'Onboarding banks, vendors, farmers and expanding our team of experts for national integrations with all stakeholders.',
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

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The roadmap to revolutionizing agriculture in Pakistan
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