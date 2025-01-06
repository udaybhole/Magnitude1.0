import { motion } from 'framer-motion';

function Home() {
  const magnitudeText = "MAGNITUDE";

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
    <div className="relative min-h-screen flex items-center justify-center">
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
          <span className="text-4xl md:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light">
            2K25
          </span>
        </h1>
      </motion.div>
    </div>
  );
}

export default Home; 