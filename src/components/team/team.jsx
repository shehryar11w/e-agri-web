import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import ceoImage from '../../assets/ceo.png';
import cooImage from '../../assets/coo.png';
import kamranAhsan from '../../assets/kamranAhsan.jpg';
const teamData = [
  {
    name: 'Adnan Syed',
    role: 'CEO & Chairman',
    image: ceoImage,
    bio: 'Tech entrepreneur with 25+ years of experience in scaling innovative ventures across the U.S. returns to Pakistan to combine technical expertise with strategic vision to transform agriculture.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Shehzad Makhani',
    role: 'COO',
    image: cooImage,
    bio: 'Tech innovator passionate about making agriculture more efficient and sustainable.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Prof. Dr. Kamran Ahsan',
    role: 'Advisory Board Member',
    image: kamranAhsan,
    bio: 'Dean of Engineering at MiTE, PhD from Stafford University UK, distinguished Computer Scientist with multiple patents and a farmer with a passion for agriculture.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
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

const Team = () => {

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8F5E9_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,#1B4332_0%,transparent_50%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The passionate individuals behind our success
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              variants={itemVariants}
            >
              <div className="relative w-full pt-[100%] overflow-hidden group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-900/80 dark:bg-emerald-950/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full text-emerald-600 dark:text-emerald-400 text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full text-emerald-600 dark:text-emerald-400 text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white"
                    >
                      <FaTwitter />
                    </a>
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full text-emerald-600 dark:text-emerald-400 text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  {member.role}
                </span>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 