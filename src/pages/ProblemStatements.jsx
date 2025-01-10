import React, { useState } from 'react';
import Spline from "@splinetool/react-spline";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

const ProblemStatements = () => {

  const [selectedProblem, setSelectedProblem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 6;

  const problems = [
    {
      id: 1,
      track: "MAG2K25001",
      title: "Smart Healthcare Monitoring",
      description: "Design an AI-powered system for real-time patient health monitoring and early disease detection using wearable devices.",
      objectives: [
        "Implement machine learning algorithms for health data analysis",
        "Create real-time monitoring dashboard",
        "Develop alert system for critical conditions",
        "Ensure data privacy and security",
      ],
    },
    {
      id: 2,
      track: "MAG2K25002",
      title: "Decentralized Education Credentials",
      description: "Build a blockchain-based platform for storing and verifying academic credentials and certificates.",
      objectives: [
        "Smart contract implementation",
        "Secure credential verification system",
        "Institution dashboard",
        "Integration with existing systems",
      ],
    },
    {
      id: 3,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 4,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 5,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 6,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 7,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 8,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },

    {
      id: 9,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 10,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 11,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },{
      id: 12,
      track: "MAG2K25003",
      title: "Smart Campus Energy Management",
      description: "Develop an IoT solution for efficient energy management and conservation in educational institutions.",
      objectives: [
        "Real-time energy consumption monitoring",
        "Automated control systems",
        "Data analytics dashboard",
        "Energy optimization algorithms",
      ],
    },
  ];

  const totalPages = Math.ceil(problems.length / problemsPerPage);

  // Calculate problems to display for the current page
  const startIndex = (currentPage - 1) * problemsPerPage;
  const currentProblems = problems.slice(startIndex, startIndex + problemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div>
      <div className="relative pt-24">
        <Spline
          scene="https://prod.spline.design/mTwLiP3zC9zAz7Zm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent font-extrabold"
          >
            PROBLEM STATEMENTS
            
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl md:text-2xl font-['Arial'] text-purple-200 font-extrabold"
          >
            Innovation begins where challenges meet creativity.
          </motion.p>
        </div>

        <div className="pt-8 mt-8 border-t border-purple-400/30 text-center font-['Arial'] font-extrabold text-xl ">
  Each problem statement is a gateway to revolutionizing industries and solving real-world challenges.
  <br />
  Pick your track, dive into the problem, and let your ideas make an impact!
</div>
      </div>





      <div className="py-8 px-4 bg-dark-blue">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-x-auto shadow-md rounded-3xl">
            <table className="w-full text-left table-fixed">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="p-6 w-1/4 text-center text-purple-500 font-extrabold font-['Arial']">Sr No.</th>
                  <th className="p-6 w-1/4 text-center text-purple-500 font-extrabold font-['Arial']">Track ID</th>
                  <th className="p-6 w-1/4 text-center text-purple-500 font-extrabold font-['Arial']">Problem Title</th>
                  <th className="p-6 w-1/4 text-center text-purple-500 font-extrabold font-['Arial']">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {currentProblems.map((problem, index) => (
                  <tr
                    key={problem.id}
                    className="bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <td className="p-6 text-center font-bold">{startIndex + index + 1}</td>
                    <td className="p-6 text-center font-bold">{problem.track}</td>
                    <td className="p-6 text-center font-bold">{problem.title}</td>
                    <td className="p-6 text-center font-bold">
                      <button
                        onClick={() => setSelectedProblem(problem)}
                        className="px-6 py-2 bg-black text-white rounded-full hover:bg-purple-700 transition-colors"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>



          <div className="flex justify-center items-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded-full ${
                  currentPage === index + 1
                    ? "bg-purple-700 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProblem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProblem(null)}
        >
          <div
            className="bg-gray-900 border border-purple-500 rounded-lg max-w-2xl w-full transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative ">
              <button
                onClick={() => setSelectedProblem(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-4  ">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400 text-purple-400 text-sm mb-2">
                  {selectedProblem.track}
                </span>
                <h2 className="text-3xl text-purple-700 font-extrabold mb-4">
                  {selectedProblem.title}
                </h2>
                <p className="text-gray-300 mb-6">{selectedProblem.description}</p>
              </div>

              <div>
                <h3 className="text-white font-bold font-['Arial'] mb-3 text-lg
                ">Key Objectives:</h3>
                <ul className="space-y-2">
                  {selectedProblem.objectives.map((objective, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-purple-400">•</span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemStatements;