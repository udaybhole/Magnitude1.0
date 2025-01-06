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
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center w-full max-w-7xl mx-auto"
      >
        <h1 className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light">
            DYPCOE
          </span>
          <div className="relative perspective-[1000px] w-full">
            <span className="absolute -inset-2 bg-blue-light/20 blur-xl" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-['SpaceMission'] leading-none my-2 sm:my-3 md:my-4 px-2 sm:px-3 md:px-4 flex justify-center overflow-hidden"
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
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['SpaceMission'] tracking-[0.2em] text-blue-light">
            2K25
          </span>
        </h1>

        {/* Decorative elements that scale with viewport */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-1/4 aspect-square bg-blue-light/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-4 w-1/4 aspect-square bg-blue-light/5 rounded-full blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home; 