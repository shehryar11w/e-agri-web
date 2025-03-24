import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './team.css';

const teamData = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Agricultural technology expert with 15+ years of experience in sustainable farming.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Tech innovator passionate about making agriculture more efficient and sustainable.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Product strategist focused on creating user-friendly agricultural solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Emma Davis',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Full-stack developer with expertise in building scalable agricultural platforms.',
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
    <section className="team">
      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Meet Our Team</h2>
          <p>The passionate individuals behind our success</p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              variants={itemVariants}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="member-social">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 