import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What Will Be The Team Size?",
    answer: "The Team Size For The Hackathon Is Between 2-4 Members.",
  },
  {
    question: "Will Accommodation Be Provided?",
    answer:
      "No, Participants Will Have To Look For Accommodations On Their Own.",
  },
  {
    question: "What Do I Need To Carry With Me?",
    answer:
      "Participants need to bring their laptops, chargers, student ID cards, and any other necessary development tools.",
  },
  {
    question: "Can We Apply For Multiple Tracks?",
    answer:
      "Yes, teams can apply for multiple tracks but will need to choose one track for the final hackathon.",
  },
  {
    question: "How Will You Choose The Top 3 Teams Per Track?",
    answer:
      "Teams will be evaluated based on innovation, technical complexity, practical implementation, and presentation quality.",
  },
  {
    question: "What Is A Hackathon?",
    answer:
      "A hackathon is a coding event where participants collaborate in teams to create innovative solutions within a specified timeframe.",
  },
  {
    question: "What Will Be The Registration Cost?",
    answer:
      "Registration costs and payment details will be announced on our website and social media channels.",
  },
  {
    question: "How do I Know My Registration Is Confirmed?",
    answer:
      "You will receive a confirmation email once your registration and payment are successfully processed.",
  },
  {
    question: "Will You Be Providing Meals?",
    answer:
      "Yes, meals will be provided for all registered participants throughout the hackathon.",
  },
  {
    question: "How Are The Winners Decided?",
    answer:
      "Winners are selected by a panel of expert judges based on innovation, technical implementation, and presentation quality.",
  },
];

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="pt-32 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-space-shards text-center mb-12 bg-gradient-to-r from-blue-light via-blue-bright to-blue-pale bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-black/30 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-500/10 transition-colors duration-300"
              >
                <span className="text-lg font-space-shards text-blue-light">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-blue-light"
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
                <p className="px-6 pb-4 text-gray-300 font-space-grotesk">
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
