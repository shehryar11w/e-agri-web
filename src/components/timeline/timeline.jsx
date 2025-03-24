import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSeedling, FaTractor, FaChartLine, FaHandshake } from 'react-icons/fa';
import './timeline.css';

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
    <section className="timeline" ref={sectionRef}>
      <div className="timeline-container">
        <motion.div
          className="timeline-header"
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Journey</h2>
          <p>Milestones that shaped our growth and success</p>
        </motion.div>

        <motion.div
          className="timeline-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
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
              <div className="timeline-icon">
                <item.icon />
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < timelineData.length - 1 && (
                <motion.div 
                  className="timeline-connector"
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