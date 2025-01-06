import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Committees() {
  const [isOpen, setIsOpen] = useState(false);

  const committees = {
    faculty: [
      {
        name: "Dr. John Doe",
        role: "Head of Department",
        image: ".jpg",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      // Add more faculty members with their social links
    ],
    organizing: [
      {
        name: "Jane Smith",
        role: "Student Lead",
        year: "Final Year",
        image: "/committee/jane-smith.jpg",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      // Add more organizing committee members with their social links
    ],
    web: [
      {
        name: "Mike Johnson",
        role: "Web Developer",
        image: "/committee/mike-johnson.jpg",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      {
        name: "Dinesh Aher",
        role: "Web Developer",
        image: "/dinesh.jpg",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      {
        name: "Alex Chen",
        role: "Web Developer",
        image: "/committee/alex-chen.jpg",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      {
        name: "Emma Wilson",
        role: "Web Developer",
        image: "/committee/emma-wilson.jpg",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 2,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const CommitteeCard = ({ member, isLarge }) => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
      {
        icon: <FaGithub className="w-4 h-4" />,
        href: member.github || "#",
        color: "hover:bg-gray-800"
      },
      {
        icon: <FaLinkedin className="w-4 h-4" />,
        href: member.linkedin || "#",
        color: "hover:bg-blue-600"
      },
      {
        icon: <FaInstagram className="w-4 h-4" />,
        href: member.instagram || "#",
        color: "hover:bg-pink-600"
      }
    ];

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
        className={`group relative overflow-hidden rounded-xl mx-auto ${
          isLarge 
            ? 'h-[350px] sm:h-[400px] w-[240px] sm:w-[280px] md:w-[300px]' 
            : 'h-[300px] sm:h-[350px] w-[220px] sm:w-[240px] md:w-[260px]'
        } glass backdrop-blur-lg transition-all duration-500
          shadow-[0_8px_20px_rgba(0,0,0,0.3)]
          before:absolute before:inset-0 before:-z-10 before:translate-y-3 before:translate-x-3 
          before:bg-blue-light/10 before:rounded-xl before:blur-xl
          after:absolute after:inset-0 after:-z-20 after:translate-y-6 after:translate-x-6 
          after:bg-blue-deep/20 after:rounded-xl after:blur-xl
          group-hover:shadow-[0_15px_30px_rgba(24,144,255,0.4)]
          group-hover:before:translate-y-6 group-hover:before:translate-x-6
          group-hover:after:translate-y-8 group-hover:after:translate-x-8
          before:transition-transform after:transition-transform
          before:duration-500 after:duration-500
        `}
      >
        {/* Gradient border container - visible by default, enhanced on hover */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Card content container with inner border */}
        <div className="absolute inset-[1px] bg-blue-deep/90 rounded-xl overflow-hidden
          shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]
        ">
          {/* Full size image with dynamic zoom */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover scale-125 transform transition-transform duration-700
                group-hover:scale-[1.35]"
              style={{
                imageRendering: 'high-quality',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
          </div>

          {/* Multiple gradient overlays for depth - visible by default */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/50 via-transparent to-transparent opacity-30 group-hover:opacity-70 transition-all duration-300" />

          {/* Content with enhanced animations */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center transform transition-all duration-300 group-hover:translate-y-[-8px]">
            {/* Name without hover effect */}
            <h3 className={`${
              isLarge 
                ? 'text-xl sm:text-2xl mb-1' 
                : 'text-lg sm:text-xl mb-1'
            } font-medium text-white relative
              drop-shadow-[0_2px_4px_rgba(24,144,255,0.3)]`}>
              {member.name}
            </h3>

            {/* Role below name */}
            <p className="text-xs sm:text-sm text-blue-pale/90 mb-2 sm:mb-3 font-light tracking-wide
              drop-shadow-[0_2px_4px_rgba(24,144,255,0.2)]">
              {member.role}
            </p>

            {/* Additional info with fade-in effect */}
            {member.year && (
              <motion.p 
                className="text-blue-pale/60 text-sm mt-1 opacity-70 group-hover:opacity-100 transition-all duration-300
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              >
                {member.year}
              </motion.p>
            )}
          </div>

          {/* Top decorative gradient with enhanced glow */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-light/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        </div>

        {/* Social Media Menu - Positioned in bottom right of card */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-10">
          <div className="relative flex flex-col items-center">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-full mb-2 flex flex-col gap-2 items-center"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-2 rounded-full bg-blue-deep/90 backdrop-blur-sm 
                        text-blue-pale transition-all duration-300 
                        hover:shadow-lg hover:shadow-blue-light/20 
                        hover:text-white ${link.color}
                        w-8 h-8 flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className={`p-2 rounded-full bg-blue-deep/90 backdrop-blur-sm 
                text-blue-pale transition-all duration-300
                hover:shadow-lg hover:shadow-blue-light/20 
                hover:text-white hover:bg-blue-light/20
                ${isOpen ? 'bg-blue-light/20' : ''}
                w-8 h-8 flex items-center justify-center`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                rotate: isOpen ? 45 : 0
              }}
            >
              <FaPlus className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 px-4"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['SpaceMission'] text-blue-light tracking-wider mb-2 sm:mb-4">
            COMMITTEES
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-['SpaceShards'] text-blue-pale">
            Meet our team
          </p>
        </motion.div>

        {/* Faculty Coordinators */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['SpaceShards'] text-center mb-4 sm:mb-6 lg:mb-8 text-blue-light">
            Faculty Coordinators
          </h2>
          <div className="flex justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                justifyItems: 'center'
              }}
            >
              {committees.faculty.map((member, index) => (
                <CommitteeCard key={index} member={member} isLarge={true} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Organizing Committee */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['SpaceShards'] text-center mb-4 sm:mb-6 lg:mb-8 text-blue-light">
            Organizing Committee
          </h2>
          <div className="flex justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 w-full max-w-6xl"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, max-content))',
                justifyContent: 'center'
              }}
            >
              {committees.organizing.map((member, index) => (
                <CommitteeCard key={index} member={member} isLarge={false} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Web Committee */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['SpaceShards'] text-center mb-4 sm:mb-6 lg:mb-8 text-blue-light">
            Web Committee
          </h2>
          <div className="flex justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 w-full max-w-6xl"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, max-content))',
                justifyContent: 'center'
              }}
            >
              {committees.web.map((member, index) => (
                <CommitteeCard key={index} member={member} isLarge={false} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Committees; 