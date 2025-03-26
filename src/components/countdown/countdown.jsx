import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Countdown = () => {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const launchDate = new Date(new Date().getFullYear(), 3, 22, 17, 0, 0); // April 22, 17:00
      
      // If the date has passed this year, set to next year
      if (launchDate < now) {
        launchDate.setFullYear(launchDate.getFullYear() + 1);
      }
      
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <section className="py-24 bg-gradient-to-r from-brand to-brand/80 dark:from-brand/90 dark:to-brand/70 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-white/10 px-8 py-4 rounded-full inline-block backdrop-blur-sm">
            Launching Soon
          </h2>
          <p className="text-lg opacity-90 dark:opacity-80 max-w-2xl mx-auto">
            Join us in revolutionizing agriculture in Pakistan. Be the first to experience the future of farming.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="bg-white/10 p-8 rounded-2xl min-w-[140px] backdrop-blur-sm shadow-lg dark:shadow-gray-900/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{unit}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 text-lg font-semibold text-brand bg-white dark:bg-gray-900 rounded-full shadow-lg dark:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:hover:shadow-gray-900/50"
          >
            Get Early Access
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown; 