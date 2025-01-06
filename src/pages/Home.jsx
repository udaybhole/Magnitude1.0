import { motion, useAnimationControls } from "framer-motion";
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

          <h3 className="text-xl font-['SpaceShards'] text-blue-light tracking-wider">
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
