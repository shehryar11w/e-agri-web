import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './countdown.css';

const Countdown = () => {
  // Set launch date to 22 April of the current year
  const launchDate = new Date(new Date().getFullYear(), 3, 22); // Note: Months are 0-indexed, so 3 represents April
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate - now;
      
      // If the date has passed this year, set to next year
      if (difference < 0) {
        launchDate.setFullYear(launchDate.getFullYear() + 1);
      }
      
      const updatedDifference = launchDate - now;

      if (updatedDifference > 0) {
        setTimeLeft({
          days: Math.floor(updatedDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((updatedDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((updatedDifference / 1000 / 60) % 60),
          seconds: Math.floor((updatedDifference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="countdown" id="countdown">
      <div className="countdown-container">
        <motion.div 
          className="countdown-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="countdown-title">Launching Soon</h2>
          <p className="countdown-description">
            Get ready for the future of agriculture. Our platform launches in:
          </p>
        </motion.div>

        <div className="countdown-timer">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="countdown-unit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="countdown-value"
                key={unit.value} // Force re-render on value change
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {String(unit.value).padStart(2, '0')}
              </motion.div>
              <div className="countdown-label">{unit.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="countdown-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact" className="countdown-button">
            Get Notified
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown; 