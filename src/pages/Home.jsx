import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import trophyLogo from '../assets/trophy-star.png';

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

    prizeControls.start({
      count: 100000,
      transition: {
        duration: 2.5,
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
        delayChildren: 0.2
      }
    }
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
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h1 className="flex flex-col items-center gap-6">
            <span className="text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light">
              DYPCOE
            </span>
            <div className="relative perspective-[1000px]">
              <span className="absolute -inset-2 bg-blue-light/20 blur-xl" />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative text-7xl md:text-[8rem] font-['SpaceMission'] leading-none my-4 px-4 flex overflow-hidden"
              >
                {magnitudeText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent inline-block transform-gpu"
                    style={{ 
                      display: 'inline-block',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <span className="text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light flex items-center">
              2K
              <motion.span
                animate={controls}
                onUpdate={latest => setCount(Math.round(latest.count || 0))}
              >
                {count}
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-space-shards text-center mb-16 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent">
          Event Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-light via-blue-bright to-blue-pale"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {/* Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center md:justify-between"
            >
              <div className="flex-1 md:text-right md:pr-8">
                <h3 className="text-3xl font-space-shards text-blue-light mb-2">01</h3>
                <h4 className="text-xl font-space-shards mb-2">Problem Statement Submission</h4>
                <p className="text-gray-400 font-space-shards">Submit your innovative solutions</p>
              </div>
              <div className="w-4 h-4 bg-blue-light rounded-full relative z-10 my-4 md:my-0"></div>
              <div className="flex-1 md:pl-8 md:invisible"></div>
            </motion.div>

            {/* Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center md:justify-between"
            >
              <div className="flex-1 md:invisible"></div>
              <div className="w-4 h-4 bg-blue-bright rounded-full relative z-10 my-4 md:my-0"></div>
              <div className="flex-1 md:pl-8">
                <h3 className="text-3xl font-space-shards text-blue-bright mb-2 md:text-left">02</h3>
                <h4 className="text-xl font-space-shards mb-2 md:text-left">Online Evaluation</h4>
                <p className="text-gray-400 font-space-shards md:text-left">Expert review and selection process</p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center md:justify-between"
            >
              <div className="flex-1 md:text-right md:pr-8">
                <h3 className="text-3xl font-space-shards text-blue-pale mb-2">03</h3>
                <h4 className="text-xl font-space-shards mb-2">Grand Finale</h4>
                <p className="text-gray-400 font-space-shards">Final presentation and awards ceremony</p>
              </div>
              <div className="w-4 h-4 bg-blue-pale rounded-full relative z-10 my-4 md:my-0"></div>
              <div className="flex-1 md:pl-8 md:invisible"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Prize Pool Section */}
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
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
          className="text-3xl md:text-4xl font-space-shards mb-4 text-white"
        >
          WIN PRIZE POOL OF
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative text-5xl md:text-7xl font-space-shards"
        >
          <span className="text-[#FFD700]">₹</span>
          <motion.span
            animate={prizeControls}
            onUpdate={latest => setPrizeCount(Math.round(latest.count || 0))}
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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-space-shards text-center mb-16 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent"
        >
          About Us
        </motion.h2>

        <div className="space-y-12">
          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-space-shards text-blue-light mb-4">
              D. Y. Patil College of Engineering
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              D. Y. Patil College of Engineering, Pune, established in 1984, is a premier engineering institution 
              known for its excellence in technical education. The college offers various undergraduate and 
              postgraduate programs in engineering and technology, fostering innovation and academic excellence. 
              With state-of-the-art infrastructure and experienced faculty, DYPCOE has been consistently 
              producing industry-ready professionals.
            </p>
          </motion.div>

          {/* Magnitude Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-space-shards text-blue-light mb-4">
              Magnitude Hackathon
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              MAGNITUDE 2K25 is an innovative hackathon that brings together creative minds to solve real-world 
              challenges. This 24-hour coding marathon provides a platform for participants to showcase their 
              technical prowess, problem-solving abilities, and innovative thinking. With exciting problem 
              statements, mentorship opportunities, and substantial prizes, Magnitude aims to foster innovation 
              and technological advancement among young engineers.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center px-6 py-4 bg-blue-darker rounded-lg"
              >
                <h4 className="text-blue-light font-space-shards text-xl mb-2">24 Hours</h4>
                <p className="text-gray-400">Non-Stop Innovation</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center px-6 py-4 bg-blue-darker rounded-lg"
              >
                <h4 className="text-blue-light font-space-shards text-xl mb-2">Expert Mentors</h4>
                <p className="text-gray-400">Industry Guidance</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center px-6 py-4 bg-blue-darker rounded-lg"
              >
                <h4 className="text-blue-light font-space-shards text-xl mb-2">Real Problems</h4>
                <p className="text-gray-400">Practical Solutions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home; 