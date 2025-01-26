import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What Will Be The Team Size?",
    answer: "The Team Size For The Hackathon Is Between 2-4 Members.",
  },
  {
    question: "Can participants join more than one team?",
    answer:
      "No, participants are allowed to join only one team to ensure fairness.",
  },
  {
    question: "Are cross-college teams allowed?",
    answer:
      "Yes, teams with members from different colleges are welcome and encouraged.",
  },
  {
    question: "Are there any restrictions on team names?",
    answer:
      "Yes, team names must be unique and must not include the names of institutes.",
  },
  {
    question: "How will shortlisted teams be notified?",
    answer:
      "Nominated team leaders will receive an email notification with further details.",
  },
  {
    question: "Who will participate in the online quiz?",
    answer:
      "Only the team leader is expected to participate in the quiz.",
  },
  {
    question: "When will the problem statement be released?",
    answer:
      "The problem statement will be released 3 hours before the start of the Grand Finale.",
  },
  
  {
    question: "Will food and accommodation be provided?",
    answer:
      "Yes, food and accommodation will be provided for all participants during the hackathon.",
  },
  {
    question: "Who will evaluate the ideas?",
    answer:
      "Industry experts will evaluate the ideas to ensure fairness and unbiased judgment.",
  },{
    question: " What should I do if I encounter issues during registration?",
    answer:
      "For any registration issues, you can email udaybhole3104@gmail.com for assistance.",
  },
];

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="pt-32 pb-16 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4 ">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-black/30 border border-purple-500/30 rounded-lg overflow-hidden hover:purple-blue-500/50 transition-colors duration-300"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-500/10 transition-colors duration-300"
              >
                <span className="text-lg font-['Arial'] text-purple-500 font-extrabold">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-300 font-['Arial'] font-semibold">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default FAQ;
