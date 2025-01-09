import { motion } from 'framer-motion';

function Guidelines() {
  const sections = [
    {
      title: "Team Formation",
      points: [
        "Each team would mandatorily comprise of minimum 2 and maximum of 4 members including the team leader.",
        "Students can be members of one team only.",
        "Intercollege teams are also allowed."
      ]
    },
    {
      title: "Team Submission Process",
      points: [
        "Team leader must enter all team details. Once entered, details cannot be altered.",
        "Team names must be unique and should not contain institute names.",
        
        "Registration Fee: ₹ 400/-",
        "International teams must email udaybhole3104@gmail.com before registration.",
        "Multiple idea submissions allowed with separate registrations and fees.",
      ]
    },
    {
      title: "Evaluation Criteria",
      points: [
        "Novelty of the idea to address the problem",
        "Approach to Explore Idea",
        "Feasibility & Complexity",
        "Approach towards implementing the System and Future Use cases",
        "Clarity & details in the presentation as a team and Q & A",
      ]
    },
    {
      title: "Idea Nomination Process",
      points: [
        "Only 30 teams will be shortlisted for further rounds.",
        "Nominated team leaders will receive email notifications.",
        "No requests entertained after deadline."
      ]
    },
    {
      title: "Idea Selection Criteria",
      points: [
        "Ideas evaluated by industry experts",
        "Evaluation based on: novelty, complexity, clarity, feasibility, practicability, sustainability, impact scale, user experience, and future potential."
      ]
    },
    {
      title: "Mode of Hackathon",
      points: [
        "Pre-final rounds will be held online (Last Week of January/First Week of February 2025)",
        "Final round will be offline (Last week of February/First week of March 2025)",
        "Selected teams will be notified via portal, DYPCOE website, and email"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="pt-8 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['SpaceMission'] text-purple-700 tracking-wider mb-2 sm:mb-4">
          GUIDELINES
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-['Arial'] text-white font-extrabold">
          Essential Information For Participants!
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-8 px-6"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            
            <div className="relative bg-black p-8 rounded-3xl border border-blue-light/20">
              <h2 className="text-2xl font-['SpaceMission'] text-purple-700 mb-4 font-extrabold">
                {section.title}
              </h2>
              <ul>
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 font-['Arial'] font-semibold">
                    <span className="text-purple-300 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Guidelines;
