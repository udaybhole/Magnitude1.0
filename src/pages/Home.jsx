import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import trophyLogo from "../assets/trophy-star.png";
import { BsCalendar2Check, BsLightbulb, BsTrophy } from 'react-icons/bs';
import { FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import Footer from "../components/Footer";


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
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen">
      <div className="absolute inset-0" style={{ pointerEvents: 'auto', touchAction: 'auto' }}>
    <Spline 
      scene="https://prod.spline.design/zwQ3a8L0q3LE8qea/scene.splinecode"
      style={{ width: '100%', height: '100%' }}
    />
  </div>
        
  <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ pointerEvents: 'none' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center w-full max-w-4xl mx-auto"
      style={{ pointerEvents: 'auto' }}
    >
            <h1 className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative perspective-[1000px]">
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-white">
                  DYPCOE
                </span>
                <span className="absolute -inset-2 blur-xl" />
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
                      className="bg-gradient-to-r  from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent inline-block transform-gpu font-extrabold"
                      style={{
                        display: "inline-block",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
                <span className="text-3xl xs:text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-white">
                  2K
                  <motion.span
                    animate={controls}
                    onUpdate={(latest) => setCount(Math.round(latest.count || 0))}
                  >
                    {count}
                  </motion.span>
                </span>
              </div>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-black">

        <div className="max-w-5xl mx-auto py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={() => setShowUpdates(true)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>

            <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl text-purple-400 mb-2 tracking-wider font-bold font-['SpaceMission']">
                    UPDATES
                  </h2>
                  <p className="text-gray-300 font-['Arial'] font-bold">
                    Click to check latest announcements
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-purple-200/5 hover:bg-purple-400 rounded-full 
                    border border-purple-700 text-white transition-all duration-300 font-['Arial'] font-bold"
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
        className="relative bg-black/90 rounded-xl p-6 md:p-8 max-w-2xl w-full"
      >
        {/* Header Section */}
        <div className="relative bg-black/90 border-b border-white/100 pb-4">
          <h2 className="text-3xl font-['SpaceMission'] text-purple-700 tracking-wider">
            LATEST UPDATES
          </h2>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowUpdates(false)}
            className="absolute top-0 right-2 p-2 rounded-full bg-purple-200/5 hover:bg-purple-700 
                    border border-purple-700 text-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>

        {/* Updates Section (Scrollable) */}
        <div
          className="space-y-6 overflow-y-auto max-h-[50vh] mt-4 pr-4 
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-purple-400 pl-4 py-2"
            >
              <div className="text-purple-500 text-sm mb-1 font-['Arial'] font-extrabold">
                {update.date}
              </div>
              <h3 className="text-xl font-['Arial'] text-white mb-2 font-extrabold">
                {update.title}
              </h3>
              <p className="text-gray-300 font-['Arial']">{update.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto py-20 px-4">
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl font-extrabold sm:text-4xl md:text-5xl font-['SpaceMission'] text-center mb-16 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent"
            >
              EVENT TIMELINE
            </motion.h2>

            <div className="absolute left-4 md:left-1/2 h-full w-px bg-gradient-to-b from-purple-600 via-purple-300 to-purple-100" />



            <div className="space-y-16">
              {/* Phase 01 */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group pl-12 md:pl-0"
              >
                <div className="flex-1 md:text-left md:pr-8 font-['Arial'] font-bold">
                  <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:ml-auto md:w-[380px]">
                    <div className="flex  justify-start md:justify-start gap-3 mb-4">
                      <h3 className="text-3xl text-purple-400 tracking-wider font-['SpaceMission'] font-bold">
                        PHASE 01
                      </h3>
                      <BsCalendar2Check className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-['Arial'] text-white mb-2 font-extrabold">
                      Registration & Idea Submission
                    </h4>
                    <p className="text-gray-400 mb-3 font-['Arial']">
                      26th January - 15th February 2024
                    </p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li className="flex items-center md:justify-start gap-2 font-['Arial']">
                      <span className="text-purple-100">•</span>
                        <span>Team Formation & Registration</span>
                      </li>
                      <li className="flex items-center md:justify-start gap-2 font-['Arial']">
                      <span className="text-purple-100">•</span>
                        <span>Problem Statement Selection</span>
                       
                      </li>
                      <li className="flex items-center md:justify-start gap-2 font-['Arial']">
                      <span className="text-purple-100">•</span>
                        <span>Initial Proposal Submission</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 top-3 md:static md:my-0 z-10">
                  <div className="w-4 h-4 bg-purple-400 rounded-full" ></div>
                </div>

                <div className="flex-1 md:pl-8 md:invisible" />
              </motion.div>




              
              <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative flex flex-col md:flex-row-reverse items-start md:items-center md:justify-between group pl-12 md:pl-0"
>
  <div className="flex-1 md:text-left md:pl-8 font-['Arial'] font-bold">
    <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300  group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:mr-auto md:w-[380px]">
      <div className="flex items-center md:justify-start gap-3 mb-4">
        <h3 className="text-3xl text-purple-400 tracking-wider font-['SpaceMission'] font-bold">
          PHASE 02
        </h3>
        <BsLightbulb className="text-2xl text-blue-pale" />
      </div>
      <h4 className="text-xl font-['Arial'] text-white mb-2 font-extrabold">
        Online Evaluation
      </h4>
      <p className="text-gray-400 mb-3 font-['Arial']">
        20th February - 25th February 2024
      </p>
      <ul className="text-sm text-gray-400 space-y-1">
        <li className="flex items-center md:justify-start gap-2 font-['Arial']">
        <span className="text-purple-100">•</span>

          <span>Expert Review Process</span>
        </li>
        <li className="flex items-center md:justify-start gap-2 font-['Arial']">
        <span className="text-purple-100">•</span>

          <span>Shortlisting of Teams</span>
        </li>
        <li className="flex items-center md:justify-start gap-2 font-['Arial']">
        <span className="text-purple-100">•</span>

          <span>Feedback & Improvements</span>
        </li>
      </ul>
    </div>
  </div>

  <div className="absolute right-0 top-3 md:static md:my-0 z-10">
    <div className="w-4 h-4 bg-purple-400 rounded-full" ></div>
  </div>

  <div className="flex-1 md:pr-8 md:invisible" />
</motion.div>



              

              {/* Final Phase */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group pl-12 md:pl-0"
              >
                <div className="flex-1 md:text-right md:pr-8">
                  <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300  group-hover:shadow-[0_0_15px_rgba(147,197,253,0.15)] md:ml-auto md:w-[380px]">
                    <div className="flex items-center md:justify-end gap-3 mb-4">
                      <h3 className="text-3xl text-purple-400 tracking-wider font-bold font-['SpaceMIssion']">
                        FINAL PHASE
                      </h3>
                      <BsTrophy className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl text-white mb-2 font-['Arial'] font-extrabold">
                      Grand Finale
                    </h4>
                    <p className="text-gray-400 mb-3 font-['Arial']">
                      15th March 2024
                    </p>
                    <ul className="text-sm text-gray-400 space-y-1 font-['Arial']">
                      <li>• Final Presentations</li>
                      <li>• Project Exhibition</li>
                      <li>• Winners Announcement</li>
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 top-3 md:static md:my-0 z-10">
                  <div className="w-4 h-4 bg-purple-400 rounded-full" />
                </div>

                <div className="flex-1 md:pl-8 md:invisible" />
              </motion.div>
            </div>
          </div>
        </div>



    {/* Prize Pool Section */}
<div className="relative z-10 max-w-4xl mx-auto py-20 px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="mb-6 relative"
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
            className="text-3xl md:text-4xl font-['SpaceMission'] mb-4 text-yellow-500"
          >
            WIN PRIZE POOL OF
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
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
            className="relative text-5xl md:text-7xl font-['SpaceMission'] flex justify-center items-center"
          >
            <span className="text-[#FFD700]">₹</span>
            <motion.span
              animate={prizeControls}
              onUpdate={(latest) => setPrizeCount(Math.round(latest.count || 0))}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
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
            <FaMapMarkerAlt className="w-16 h-16 text-purple-500 opacity-80" />
          </motion.div>

          <h3 className="text-[40px] font-['SpaceMission'] text-purple-400 tracking-wider font-extrabold">
            VENUE
          </h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-['SpaceMission'] bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent font-extrabold"
          >
            DYPCOE, PUNE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white space-y-2 font-bold font-['Arial']"
          >
            <p>Dr. D.Y. Patil College of Engineering</p>
            <p>Sector 29, Nigdi Pradhikaran</p>
            <p>Akurdi, Pune - 411044</p>
          </motion.div>
        </motion.div>
      </div>
    </div>

    <Footer></Footer>

    
    </div>

  );
}

export default Home;
