import { motion } from 'framer-motion';

function Guidelines() {
  const sections = [
    {
      title: "Team Formation",
      points: [
        "Each team would mandatorily comprise of minimum 4 and maximum of 5 members including the team leader.",
        "Students can be members of one team only.",
        "Intercollege teams are also allowed."
      ]
    },
    {
      title: "Team Submission Process",
      points: [
        "Team leader must enter all team details. Once entered, details cannot be altered.",
        "Team names must be unique and should not contain institute names.",
        "Registration Date extended: 16 December 2024",
        "Registration Fee: ₹ 500/-",
        "International teams must email architashiledar@gmail.com before registration.",
        "Multiple idea submissions allowed with separate registrations and fees.",
        "Registered teams can participate in Impetus and Concepts 2025 subevents free of charge (separate registration required)."
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
        "Time constraint: 10 min presentation + 5 min QnA (Total 15 min per team)"
      ]
    },
    {
      title: "Idea Nomination Process",
      points: [
        "Only 100 teams will be shortlisted for further rounds.",
        "Nominated team leaders will receive email notifications.",
        "Submission deadline: Last week of December (tentative).",
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
        "Pre-final rounds will be held online (Last Week of December/First Week of January 2025)",
        "Final round will be offline (Last week of January/First week of February 2025)",
        "Selected teams will be notified via portal, PICT website, and email"
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
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-['SpaceMission'] text-blue-light tracking-wider mb-4">
          GUIDELINES
        </h1>
        <p className="text-xl font-['SpaceShards'] text-blue-pale">
          Essential information for participants
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
            
            <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-light/20">
              <h2 className="text-2xl font-['PrinceofpersiaRegular'] text-blue-pale mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 font-['SpaceShards']">
                    <span className="text-blue-light mt-1">•</span>
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