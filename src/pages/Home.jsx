import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import trophyLogo from "../assets/trophy-star.png";
import { BsCalendar2Check, BsLightbulb, BsTrophy } from 'react-icons/bs';
import { FaCode, FaMapMarkerAlt } from 'react-icons/fa';

function Home() {
  const magnitudeText = "MAGNITUDE";
  const [count, setCount] = useState(0);
  const [prizeCount, setPrizeCount] = useState(0);
  const controls = useAnimationControls();
  const prizeControls = useAnimationControls();
  const [showUpdates, setShowUpdates] = useState(false);

  useEffect(() => {
    controls.start({
      count: 25,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 0,
    },
    visible: {
      opacity: [0, 1, 1],
      y: [100, 0, 0],
      rotateX: [0, 1080, 1080],
      transition: {
        times: [0, 0.3, 1],
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const updates = [
    {
      date: "15 Jan 2024",
      title: "Registration Date Extended",
      description: "Registration deadline has been extended to 26th January 2024."
    },
    {
      date: "12 Jan 2024",
      title: "New Problem Statement Added",
      description: "A new problem statement in the AI/ML track has been added. Check the Problems page for details."
    },
    {
      date: "10 Jan 2024",
      title: "PPT Template Available",
      description: "The official presentation template is now available for download."
    },
    {
      date: "8 Jan 2024",
      title: "Mentorship Program",
      description: "Industry experts will be providing mentorship during the development phase."
    },
    // Add more updates as needed
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center w-full max-w-4xl mx-auto"
        >
          <h1 className="flex flex-col items-center gap-4 sm:gap-6">
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light">
              DYPCOE
            </span>
            <div className="relative perspective-[1000px]">
              <span className="absolute -inset-2 bg-blue-light/20 blur-xl" />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-['SpaceMission'] leading-none my-4 px-4 flex overflow-hidden"
              >
                {magnitudeText.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent inline-block transform-gpu"
                    style={{
                      display: "inline-block",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <span className="text-3xl xs:text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light flex items-center">
              2K
              <motion.span
                animate={controls}
                onUpdate={(latest) => setCount(Math.round(latest.count || 0))}
              >
                {count}
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Updates Section - Add this before Timeline */}
      <div className="max-w-5xl mx-auto py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
          onClick={() => setShowUpdates(true)}
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
          
          <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-['VerminVibesV'] text-blue-light mb-2 tracking-wider">
                  UPDATES
                </h2>
                <p className="text-gray-300 font-['SpaceShards']">
                  Click to check latest announcements
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-light/10 hover:bg-blue-light/20 rounded-full 
                  border border-blue-light/30 text-blue-pale transition-all duration-300"
              >
                Check Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Updates Modal */}
      <AnimatePresence>
        {showUpdates && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setShowUpdates(false)}
          >
            {/* Modal Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black/90 rounded-xl border border-blue-light/20 p-6 md:p-8 
                max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-light/20
                scrollbar-track-transparent"
            >
              <h2 className="text-3xl font-['VerminVibesV'] text-blue-light mb-6 sticky top-0 
                bg-black/90 py-2 border-b border-blue-light/20 tracking-wider">
                LATEST UPDATES
              </h2>

              <div className="space-y-6">
                {updates.map((update, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-blue-light/20 pl-4 py-2"
                  >
                    <div className="text-blue-pale font-['SpaceShards'] text-sm mb-1">
                      {update.date}
                    </div>
                    <h3 className="text-xl font-['SpaceShards'] text-blue-light mb-2">
                      {update.title}
                    </h3>
                    <p className="text-gray-300 font-['SpaceShards']">
                      {update.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUpdates(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-blue-light/10 
                  hover:bg-blue-light/20 text-blue-pale transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto py-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-['VerminVibesV'] text-center mb-16 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent"
        >
          EVENT TIMELINE
        </motion.h2>

        <div className="relative">
          {/* Vertical Line - Adjusted for mobile */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-gradient-to-b from-blue-light via-blue-bright to-blue-pale" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {/* Registration Phase */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group pl-12 md:pl-0"
            >
              <div className="flex-1 md:text-right md:pr-8">
                <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-light/20 transition-all duration-300 hover:border-blue-light/50 group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:ml-auto md:w-[380px]">
                  <div className="flex items-center md:justify-end gap-3 mb-4">
                    <h3 className="text-3xl font-['VerminVibesV'] text-blue-light tracking-wider">
                      PHASE 01
                    </h3>
                    <BsCalendar2Check className="text-2xl text-blue-pale" />
                  </div>
                  <h4 className="text-xl font-['SpaceShards'] text-blue-pale mb-2">
                    Registration & Idea Submission
                  </h4>
                  <p className="text-gray-400 mb-3">
                    26th January - 15th February 2024
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Team Formation & Registration</span>
                      <span className="text-blue-light">•</span>
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Problem Statement Selection</span>
                      <span className="text-blue-light">•</span>
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Initial Proposal Submission</span>
                      <span className="text-blue-light">•</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline Node - Without hover effect */}
              <div className="absolute left-0 top-3 md:static md:my-0 z-10">
                <div className="w-4 h-4 bg-blue-light rounded-full" />
              </div>

              <div className="flex-1 md:pl-8 md:invisible" />
            </motion.div>

            {/* Evaluation Phase */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group pl-12 md:pl-0"
            >
              <div className="flex-1 md:invisible" />

              {/* Timeline Node - Without hover effect */}
              <div className="absolute left-0 top-3 md:static md:my-0 z-10">
                <div className="w-4 h-4 bg-blue-bright rounded-full" />
              </div>

              <div className="flex-1 md:pl-8">
                <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-bright/20 transition-all duration-300 hover:border-blue-bright/50 group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:w-[380px]">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-['VerminVibesV'] text-blue-bright tracking-wider">
                      PHASE 02
                    </h3>
                    <BsLightbulb className="text-2xl text-blue-pale" />
                  </div>
                  <h4 className="text-xl font-['SpaceShards'] text-blue-pale mb-2">
                    Online Evaluation
                  </h4>
                  <p className="text-gray-400 mb-3">
                    20th February - 25th February 2024
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Expert Review Process</li>
                    <li>• Shortlisting of Teams</li>
                    <li>• Feedback & Improvements</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Development Phase */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group pl-12 md:pl-0"
            >
              <div className="flex-1 md:text-right md:pr-8">
                <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-pale/20 transition-all duration-300 hover:border-blue-pale/50 group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:ml-auto md:w-[380px]">
                  <div className="flex items-center md:justify-end gap-3 mb-4">
                    <h3 className="text-3xl font-['VerminVibesV'] text-blue-pale tracking-wider">
                      PHASE 03
                    </h3>
                    <FaCode className="text-2xl text-blue-pale" />
                  </div>
                  <h4 className="text-xl font-['SpaceShards'] text-blue-pale mb-2">
                    Development & Mentoring
                  </h4>
                  <p className="text-gray-400 mb-3">
                    1st March - 10th March 2024
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Prototype Development</li>
                    <li>• Mentor Guidance</li>
                    <li>• Progress Tracking</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Node - Without hover effect */}
              <div className="absolute left-0 top-3 md:static md:my-0 z-10">
                <div className="w-4 h-4 bg-blue-pale rounded-full" />
              </div>

              <div className="flex-1 md:pl-8 md:invisible" />
            </motion.div>

            {/* Final Phase */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group pl-12 md:pl-0"
            >
              <div className="flex-1 md:invisible" />

              {/* Timeline Node - Without hover effect */}
              <div className="absolute left-0 top-3 md:static md:my-0 z-10">
                <div className="w-4 h-4 bg-blue-light rounded-full" />
              </div>

              <div className="flex-1 md:pl-8">
                <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-light/20 transition-all duration-300 hover:border-blue-light/50 group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:w-[380px]">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-['VerminVibesV'] text-blue-light tracking-wider">
                      FINAL PHASE
                    </h3>
                    <BsTrophy className="text-2xl text-blue-pale" />
                  </div>
                  <h4 className="text-xl font-['SpaceShards'] text-blue-pale mb-2">
                    Grand Finale
                  </h4>
                  <p className="text-gray-400 mb-3">
                    15th March 2024
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Final Presentations</li>
                    <li>• Project Exhibition</li>
                    <li>• Winners Announcement</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Prize Pool Section */}
      <div className="max-w-4xl mx-auto section-padding container-padding text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          <img
            src={trophyLogo}
            alt="Trophy"
            className="w-24 h-24 mx-auto object-contain"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-space-shards mb-4 text-blue-light text-center"
        >
          WIN PRIZE POOL OF
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ 
            once: true,
            amount: 0.8
          }}
          onViewportEnter={() => {
            if (prizeCount === 0) {
              prizeControls.start({
                count: 100000,
                transition: {
                  duration: 2.5,
                  ease: "easeOut",
                },
              });
            }
          }}
          className="relative text-5xl md:text-7xl font-space-shards flex justify-center items-center"
        >
          <span className="text-[#FFD700]">₹</span>
          <motion.span
            animate={prizeControls}
            onUpdate={(latest) => setPrizeCount(Math.round(latest.count || 0))}
            className="bg-[#FFD700] bg-clip-text text-transparent"
          >
            {prizeCount.toLocaleString()}
          </motion.span>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 bg-[#FFD700]"
          />
        </motion.div>
        
      </div>

      {/* About Us Section */}
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-['SpaceMission'] text-center mb-16 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* DY Patil College Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-black p-6 rounded-xl border border-blue-light/20 h-full"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-light/10 border border-blue-light/30 text-blue-light font-['SpaceShards'] text-sm mb-4">
              Educational Excellence
            </div>
            <h3 className="text-2xl font-['PrinceofpersiaRegular'] text-white mb-4">
              D. Y. Patil College of Engineering
            </h3>
            <p className="text-gray-300 mb-6 font-['SpaceShards']">
              Established in 1984, DYPCOE is a premier engineering institution committed to academic excellence and innovation.
            </p>
            <div>
              <h4 className="text-blue-light font-['PrinceofpersiaRegular'] mb-3">
                Key Highlights:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  NAAC Accredited Institution
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  State-of-the-art Infrastructure
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Industry-aligned Curriculum
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Expert Faculty Members
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Magnitude Hackathon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-black p-6 rounded-xl border border-blue-light/20 h-full"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-light/10 border border-blue-light/30 text-blue-light font-['SpaceShards'] text-sm mb-4">
              Innovation Hub
            </div>
            <h3 className="text-2xl font-['PrinceofpersiaRegular'] text-white mb-4">
              Magnitude Hackathon 2K25
            </h3>
            <p className="text-gray-300 mb-6 font-['SpaceShards']">
              A 24-hour coding marathon that brings together innovative minds to solve real-world challenges through technology.
            </p>
            <div>
              <h4 className="text-blue-light font-['PrinceofpersiaRegular'] mb-3">
                Event Features:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  24-Hour Coding Challenge
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Industry Expert Mentoring
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Exciting Prize Pool
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Networking Opportunities
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Venue Section */}
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="flex justify-center"
          >
            <FaMapMarkerAlt className="w-16 h-16 text-blue-light opacity-80" />
          </motion.div>

          <h3 className="text-[40px] font-['SpaceShards'] text-blue-light tracking-wider">
            VENUE
          </h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-['SpaceMission'] bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent"
          >
            DYPCOE, PUNE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 space-y-2"
          >
            <p>Dr. D.Y. Patil College of Engineering</p>
            <p>Sector 29, Nigdi Pradhikaran</p>
            <p>Akurdi, Pune - 411044</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    
  );
}

export default Home;
