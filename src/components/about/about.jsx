import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

import Homescreen from '../../assets/HomeScreen.png';

const About = () => {

  
  const features = [
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: 'Our Mission',
      description: 'To empower farmers with cutting-edge technology and data-driven insights for sustainable and profitable agriculture.'
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: 'Our Vision',
      description: "To transform Pakistan's agricultural sector into a modern, efficient, and sustainable industry that feeds the globe."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Our Team',
      description: 'A diverse team of agricultural experts, technologists, and farmers working together to revolutionize farming in Pakistan.'
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: 'Our Impact',
      description: 'Helping thousands of farmers increase their yields, reduce costs, and make data-driven decisions for better farming outcomes.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" id="about">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transforming Agriculture in Pakistan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            E-Agri is revolutionizing farming in Pakistan by combining traditional agricultural knowledge with modern technology. Our platform helps farmers make informed decisions, optimize resources, and increase their yields while promoting sustainable farming practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/80 dark:bg-gray-800/40 backdrop-blur-md dark:backdrop-blur-lg border border-white/20 dark:border-gray-700/50 hover:border-brand/50 dark:hover:border-brand/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 dark:bg-brand/20 flex items-center justify-center text-brand dark:text-brand">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={Homescreen} 
                alt="Pakistani farmers using E-Agri app" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 