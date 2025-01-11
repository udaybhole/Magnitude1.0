import React, { useState } from 'react';
import Spline from "@splinetool/react-spline";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import VantaBackground from '../components/Vanat';
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


      <div className="relative  bg-black w-full h-screen">

      <Spline scene="https://prod.spline.design/mTwLiP3zC9zAz7Zm/scene.splinecode" 
              className="w-full h-full"
      />

<div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0px -100px 50px rgba(0, 0, 0, 1)", // Bottom shadow
        }}
      />
   

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl flex justify-center pt-14 font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent font-extrabold"
          >
            PROBLEM STATEMENTS
            
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl md:text-2xl font-['Arial'] text-purple-200 font-extrabold"
          >
          </motion.p>
        </div>

        <div className="pt-3 mt-3 border-t border-purple-400 text-center font-['Arial']  ">
  
</div>
      </div>





      <div className="py-8 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="relative overflow-x-auto shadow-md rounded-3xl">
      <table className="w-full text-left table-fixed">
        <thead className="bg-gray-800 text-gray-200">
          <tr>
            <th className="p-2 md:p-6 w-[15%] text-center text-purple-500 font-extrabold font-['Arial'] text-sm md:text-base">Sr. No</th>
            <th className="p-2 md:p-6 w-[25%] text-center text-purple-500 font-extrabold font-['Arial'] text-sm md:text-base">Track ID</th>
            <th className="p-2 md:p-6 w-[35%] text-center text-purple-500 font-extrabold font-['Arial'] text-sm md:text-base">Title</th>
            <th className="p-2 md:p-6 w-[25%] text-center text-purple-500 font-extrabold font-['Arial'] text-sm md:text-base">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {currentProblems.map((problem, index) => (
            <tr
              key={problem.id}
              className="bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <td className="p-5 md:p-6 text-center font-bold text-sm md:text-base">
                {startIndex + index + 1}
              </td>
              <td className="p-2 md:p-6 text-center font-bold text-sm md:text-base truncate">
                {window.innerWidth < 768 ? problem.track.split('-')[0] : problem.track}
              </td>
              <td className="p-3 md:p-6 text-center font-bold text-sm md:text-base truncate">
                {problem.title}
              </td>
              <td className="p-2 md:p-6 text-center font-bold">
                <button
                  onClick={() => setSelectedProblem(problem)}
                  className="px-3 md:px-6 py-1 md:py-2 text-sm md:text-base bg-black text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-center items-center mt-6 flex-wrap gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-3 md:px-4 py-1 md:py-2 mx-1 rounded-full text-sm md:text-base ${
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
            className="bg-gray-900 border  border-purple-500 rounded-3xl max-w-2xl w-full transform transition-all"
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
                <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400 text-purple-00 text-sm mb-2">
                  {selectedProblem.track}
                </span>
                <h2 className="text-3xl text-purple-500 font-extrabold mb-4 fonr-['Arial']">
                  {selectedProblem.title}
                </h2>
                <p className="text-gray-300 mb-6 font-bold">{selectedProblem.description}</p>
              </div>

              <div>
                <h3 className="text-white font-bold font-['Arial'] mb-3 text-lg
                ">Key Objectives:</h3>
                <ul className="space-y-2 font-['Arial']">
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