import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['SpaceMission'] text-blue-light tracking-wider mb-2 sm:mb-4">
          ABOUT US
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-['SpaceShards'] text-blue-pale">
          Learn more about Magnitude
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
            {/* Magnitude Hackathon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-black p-6 rounded-xl border border-blue-light/20 h-full"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-light/10 border border-blue-light/30 text-blue-light font-['SpaceShards'] text-sm mb-4">
              Innovation Hub
            </div>
            <h3 className="text-2xl font-['PrinceofpersiaRegular'] text-white mb-4">
              Magnitude Hackathon 2K25
            </h3>
            <p className="text-gray-300 mb-6 font-['SpaceShards']">
              A 24-hour coding marathon that brings together innovative minds to solve real-world challenges through technology.
            </p>
            <div>
              <h4 className="text-blue-light font-['PrinceofpersiaRegular'] mb-3">
                Event Features:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  24-Hour Coding Challenge
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Industry Expert Mentoring
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Exciting Prize Pool
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Networking Opportunities
                </li>
              </ul>
            </div>
          </motion.div>
          {/* DY Patil College Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-black p-6 rounded-xl border border-blue-light/20 h-full"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-light/10 border border-blue-light/30 text-blue-light font-['SpaceShards'] text-sm mb-4">
              Educational Excellence
            </div>
            <h3 className="text-2xl font-['PrinceofpersiaRegular'] text-white mb-4">
              D. Y. Patil College of Engineering
            </h3>
            <p className="text-gray-300 mb-6 font-['SpaceShards']">
              Established in 1984, DYPCOE is a premier engineering institution committed to academic excellence and innovation.
            </p>
            <div>
              <h4 className="text-blue-light font-['PrinceofpersiaRegular'] mb-3">
                Key Highlights:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  NAAC Accredited Institution
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  State-of-the-art Infrastructure
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Industry-aligned Curriculum
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-['SpaceShards']">
                  <span className="text-blue-light">•</span>
                  Expert Faculty Members
                </li>
              </ul>
            </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}

export default About;
