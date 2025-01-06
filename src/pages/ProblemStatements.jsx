import { motion } from 'framer-motion';

function ProblemStatements() {
  const problems = [
    {
      id: 1,
      track: "AI/ML Track",
      title: "Smart Healthcare Monitoring",
      description: "Design an AI-powered system for real-time patient health monitoring and early disease detection using wearable devices.",
      objectives: [
        "Implement machine learning algorithms for health data analysis",
        "Create real-time monitoring dashboard",
        "Develop alert system for critical conditions",
        "Ensure data privacy and security"
      ]
    },
    {
      id: 2,
      track: "Web3/Blockchain",
      title: "Decentralized Education Credentials",
      description: "Build a blockchain-based platform for storing and verifying academic credentials and certificates.",
      objectives: [
        "Smart contract implementation",
        "Secure credential verification system",
        "Institution dashboard",
        "Integration with existing systems"
      ]
    },
    {
      id: 3,
      track: "IoT Solutions",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms"
      ]
    }
  ];

  const registrationFormUrl = "https://your-google-form-url-here";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['SpaceMission'] text-blue-light tracking-wider mb-2 sm:mb-4">
          PROBLEM STATEMENTS
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-['SpaceShards'] text-blue-pale">
          Choose your challenge and innovate
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {problems.map((problem) => (
          <motion.div
            key={problem.id}
            variants={cardVariants}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            
            <div className="relative bg-black p-6 rounded-xl border border-blue-light/20 h-full flex flex-col">
              <div className="flex-grow">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-light/10 border border-blue-light/30 text-blue-light font-['SpaceShards'] text-sm mb-4">
                  {problem.track}
                </div>
                
                <h3 className="text-2xl font-['PrinceofpersiaRegular'] text-white mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-gray-300 mb-6 font-['SpaceShards']">
                  {problem.description}
                </p>
                
                <div>
                  <h4 className="text-blue-light font-['VerminVibesV'] mb-3 tracking-wide">
                    Key Objectives:
                  </h4>
                  <ul className="space-y-2">
                    {problem.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                        <span className="text-blue-light">•</span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl
                  bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale
                  text-black font-['SpaceShards'] font-semibold
                  transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-light/25
                  active:scale-[0.98]"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Register Here
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-2xl mx-auto"
      >
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
          
          <a 
            href="/ideatemplate.pptx" 
            download
            className="relative block bg-black p-8 rounded-xl border border-blue-light/20"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-blue-light/10 rounded-full flex items-center justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-blue-light"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-['SpaceShards'] text-blue-light mb-2">
                  Download Template
                </h3>
                <p className="text-gray-300 font-['SpaceShards'] text-sm sm:text-base">
                  Get the official PPT template for your idea submission
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-blue-light/10 hover:bg-blue-light/20 rounded-full border border-blue-light/30 text-blue-pale transition-all duration-300"
              >
                Download PPT Template
              </motion.div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default ProblemStatements; 