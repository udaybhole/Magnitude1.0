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
        <h1 className="text-4xl md:text-6xl font-['SpaceMission'] text-blue-light tracking-wider mb-4">
          PROBLEM STATEMENTS
        </h1>
        <p className="text-xl font-['SpaceShards'] text-blue-pale">
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
            
            <div className="relative bg-black p-6 rounded-xl border border-blue-light/20 h-full">
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
                <h4 className="text-blue-light font-['PrinceofpersiaRegular'] mb-3">
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProblemStatements; 