import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AdnanImg from '../../assets/Adnan.png';
import ShehzadImg from '../../assets/Shehzad.png';
import KamranImg from '../../assets/Kamran.png';
import AbdulRehmanImg from '../../assets/Abdul Rehman.png';
import NasiraImg from '../../assets/Nasira.png';
import NoumanImg from '../../assets/Nouman.png';
import ZulquarnainImg from '../../assets/Zulquarnain.png';
import MusharrafImg from '../../assets/musharraf.png';
const teamData = [
  {
    name: 'team.adnanSyed.name',
    role: 'team.adnanSyed.role',
    image: AdnanImg,
    bio: 'team.adnanSyed.bio',
    social: {
      linkedin: '#' 
    },
  },
  {
    name: 'team.shehzadMakhani.name',
    role: 'team.shehzadMakhani.role',
    image: ShehzadImg,
    bio: 'team.shehzadMakhani.bio',
    social: {
      linkedin: 'https://pk.linkedin.com/in/shm13041977'
    },
  },
  {
    name: 'Nouman Islam',
    role: 'VP - IT & Trading Platform',
    image: NoumanImg,
    bio: 'Nouman Islam, with nearly 20 years of experience in IT and capital markets, brings extensive expertise in leading complex technology initiatives - particularly in the design and development of trading platforms and enterprise systems that drive scalable, tech-enabled transformation. He played a crucial role in the successful launch and implementation of a trading system at the Pakistan Stock Exchange (PSX), replacing a legacy platform that had been in place for over two decades.',
    social: {
      linkedin: 'https://www.linkedin.com/in/noumanislam/',
    },
  },
  {
    name: 'Zulquarnain',
    role: 'Senior Lead II',
    image: ZulquarnainImg,
    bio: 'Zulquarnain brings over a decade of hands-on experience in software engineering, with deep expertise in cloud infrastructure, API design, fintech systems, and scalable backend services. Driven by a passion for innovation, he combines technical excellence with practical impact, playing a key role in advancing E-Agri’s mission to transform agriculture through technology.',
    social: {
      linkedin: 'https://www.linkedin.com/in/zulquarnain-9322139/',
    },
  },
  {
    name: 'Musharraf Hussain',
    role: 'Senior Lead I',
    image: MusharrafImg,
    bio: 'Seasoned Software Engineer with over two decades of experience spanning the full software development lifecycle. Specializes in Object-Oriented Design and Analysis, with a strong track record in Fintech and Trading Systems, including card payment processing, order management, and real-time market data integration. Recognized for delivering scalable, high-performance solutions and excelling in fast-paced environments. Demonstrates a proactive approach to innovation and a proven ability to tackle complex technical challenges with agility and precision.',
    social: {
      linkedin: 'https://www.linkedin.com/in/musharraf-hussain-932b3329/',
    },
  },
  {
    name: 'team.nasiraHoori.name',
    role: 'team.nasiraHoori.role',
    image: NasiraImg,
    bio: 'team.nasiraHoori.bio',
    social: {
      linkedin: 'https://www.linkedin.com/in/nasira-hoori-65355a9/',
    },
  },
  {
    name: 'team.kamranAhsan.name',
    role: 'team.kamranAhsan.role',
    image: KamranImg,
    bio: 'team.kamranAhsan.bio',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'team.abdulRehman.name',
    role: 'team.abdulRehman.role',
    image: AbdulRehmanImg,
    bio: 'team.abdulRehman.bio',
    social: {
      linkedin: '#',
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
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(member.name)}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                  {t(member.role)}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">{t(member.bio)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 