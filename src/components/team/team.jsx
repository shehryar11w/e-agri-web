import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ceoImage from '../../assets/ceo.png';
import cooImage from '../../assets/coo.png';
import kamranAhsan from '../../assets/KA.jpg';
import abdulRehman from '../../assets/AbdulRehman.jpg';

const teamData = [
  {
    name: 'team.adnanSyed.name',
    role: 'team.adnanSyed.role',
    image: ceoImage,
    bio: 'team.adnanSyed.bio',
    social: {
      linkedin: '#' 
    },
  },
  {
    name: 'team.shehzadMakhani.name',
    role: 'team.shehzadMakhani.role',
    image: cooImage,
    bio: 'team.shehzadMakhani.bio',
    social: {
      linkedin: 'https://pk.linkedin.com/in/shm13041977'
    },
  },
  {
    name: 'team.kamranAhsan.name',
    role: 'team.kamranAhsan.role',
    image: kamranAhsan,
    bio: 'team.kamranAhsan.bio',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'team.abdulRehman.name',
    role: 'team.abdulRehman.role',
    image: abdulRehman,
    bio: 'team.abdulRehman.bio',
    social: {
      linkedin: 'https://www.linkedin.com/in/armahmood'
    },
  },
  {
    name: 'team.nasiraHoori.name',
    role: 'team.nasiraHoori.role',
    image: kamranAhsan,
    bio: 'team.nasiraHoori.bio',
    social: {
      linkedin: 'https://www.linkedin.com/in/nasira-hoori-65355a9',
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
  const { t } = useTranslation();

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
            {t('team.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('team.description')}
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
                  alt={t(member.name)}
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
                  
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{t(member.name)}</h3>
                <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  {t(member.role)}
                </span>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t(member.bio)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 