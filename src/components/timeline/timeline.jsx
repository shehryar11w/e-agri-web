import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSeedling, FaTractor, FaChartLine, FaHandshake } from 'react-icons/fa';


const timelineData = [
  {
    year: '2020',
    title: 'Platform Launch',
    description: 'Successfully launched our e-agri platform with core features for farmers.',
    icon: FaSeedling,
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Expanded our services to cover over 10,000 acres of farmland.',
    icon: FaTractor,
  },
  {
    year: '2022',
    title: 'Growth',
    description: 'Achieved 50% increase in farmer productivity through our platform.',
    icon: FaChartLine,
  },
  {
    year: '2023',
    title: 'Partnerships',
    description: 'Formed strategic partnerships with major agricultural organizations.',
    icon: FaHandshake,
  },
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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for the header
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Scale effect for timeline items
  const itemScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const itemOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Connector animation
  const connectorScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" ref={sectionRef}>
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
            Milestones that shaped our growth and success
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              variants={itemVariants}
              style={{
                scale: itemScale,
                opacity: itemOpacity,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-2xl transition-all duration-300 group-hover:rotate-360">
                <item.icon />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
              {index < timelineData.length - 1 && (
                <motion.div 
                  className="absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-500 dark:bg-emerald-400 opacity-30 transform -translate-y-1/2"
                  style={{
                    scaleX: connectorScale,
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 