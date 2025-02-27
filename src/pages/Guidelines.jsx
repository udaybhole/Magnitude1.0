import { motion } from 'framer-motion';

function Guidelines() {
  const sections = [
    {
      title: "Team Formation",
      points: [
        "Each team would mandatorily comprise of minimum 2 and maximum of 4 members including the team leader.",
        "Participants are permitted to join only one team to ensure fairness.",
        "Teams comprising members from different colleges are welcome and encouraged"
      ]
    },
    {
      title: "Team Submission Process",
      points: [
        "The team leader is responsible for entering all team details. Once submitted, these details cannot be modified.",
        "Team names must be unique and should not contain institute names.",  
        "Registration Fee: ₹ 400/-",
        
      ]
    },
    {
      title: "Mode of Hackathon",
      points: [
        "Final Round:",
        "Held offline at DYPCOE on 22nd and 23rd February 2025.",
      ]
    },
    {
      title: "Hackathon Round",
      points: [
        "It will consist of a 24-hour offline hackathon, scheduled to take place at D.Y.Patil College of Engineering, Akurdi on 22-23 th February.",
        "The problem statement will be released 3 hours prior to the beginning of the hackathon.",
        "The hackathon will consist of three evaluation rounds, each round will assess specific aspects of the project, such as innovation, technical implementation and presentation.",
        "Each Round will consist of:",
"7 minutes for pitching the idea.",
"3 minutes for a Q&A session.",
        "Participants must manage their time effectively to meet deadlines for each round.",
        "The final submission should be completed within the 24-hour window.",
        "The final results will be announced after the completion of the hackathon."
      ]
    },
    {
      title: "Idea Evaluation Criteria",
      points: [
        "Ideas will be evaluated by industry experts to ensure fairness and unbiased judgment.",
        "Evaluation will be based on the following criteria:",
        "Complexity: The technical challenge and depth of the idea.",
        "Clarity : Precision and coherence in the team’s presentation and Q&A.",
        "Feasibility : Practicality and ease of implementation.",
        "Practicability : Real-world applicability of the proposed solution.",
        "Sustainability : Long-term viability and environmental impact.",
        "Impact Scale : Potential to create significant positive outcomes.",
        "User Experience : Ease of use and accessibility for end users.",
        "Future Potential : Scalability and adaptability for future advancements."
      ]
    },
    {
      title: "Rules and Regulations",
      points: [
        "Misbehavior: Any form of misbehavior or misconduct during the hackathon will not be tolerated. Teams involved will be disqualified immediately.",
        "Prebuilt Projects: Submitting prebuilt or previously developed projects is strictly prohibited. Only original work created during the hackathon will be accepted.",
        "Plagiarism: Plagiarism of any kind is not allowed. Teams found copying or using unoriginal content will face immediate disqualification.",
        "Disqualification: If a team is caught violating any of the above rules, they will be directly disqualified without further discussion."
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
        <h1 className="pt-10 text-4xl md:text-5xl font-extrabold font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent">
          GuideLines
        </h1>
       
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
              <h2 className="text-3xl font-['SpaceMission'] text-purple-600 mb-4 font-extrabold">
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
