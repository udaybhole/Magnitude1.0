import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen py-16 px-4 bg-black">
      {/* About Us Section */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl pt-8 xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['SpaceMission'] text-purple-700 tracking-wider mb-2 sm:mb-4 font-extrabold">
            ABOUT US
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">


            {/* Hackathon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32  overflow-hidden bg-blue-light/10 flex items-center justify-center flex-shrink-0">
                    <img src=" /collegelogo.png" alt="COllege Logo" className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <button className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                    border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold">
                      DYPCOE
                    </button>
                    <h3 className="text-2xl font-['SpaceMission'] text-yellow-500 mb-3">
                     Dr D Y Patil COllege Of Engineering
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify">
                    Dr. D. Y. Patil Prathishthan's, D.Y. Patil College of Engineering, was established in 1984 in Pimpri and later shifted to Akurdi complex in 2001, which is in the vicinity of Pimpri Chinchwad Industrial area, one of the biggest Industrial belts in Asia. The college spreads over 10 acres of land with seven Engineering disciplines. This Institute is approved by AICTE, New Delhi and is affiliated to the Savitribai Phule Pune University. D Y Patil College of Engineering has been granted Autonomous status from the Academic Year 2024-25.
                    </p>                  
                  </div>
                </div>
              </div>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32  overflow-hidden  flex items-center justify-center flex-shrink-0 ">
                    <img src="IIC.jpg" alt="DY Patil College" className=" object-fill h-20" />
                  </div>
                  <div className="flex-grow">
                    <button className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                    border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold">
                      IIC
                    </button>
                    <h3 className="text-2xl font-['SpaceMission'] text-yellow-500 mb-3">
                    Institution's Innovation Council
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold">
                      A premier engineering institution fostering innovation since 1984.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Clubs Section */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-['SpaceMission'] text-purple-700 tracking-wider mb-2 sm:mb-4 font-extrabold">
            TECHNICAL CLUBS
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            

            {/* cpmc Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex items-center gap-6">
                <div className="w-32 h-32 overflow-hidden flex items-start justify-center flex-shrink-0">
  <img src="CPMC.png" alt="CPMC Club" className="object-cover h-10" />
</div>

                  <div className="flex-grow">
                  <button className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                    border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold">
                      CPMC
                    </button>
                    <h3 className="text-1xl font-['SpaceMIssion'] text-yellow-500 mb-3">
                    Competitive Programming And MentorShip Club
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify">
                    The "Competitive Programming and Mentorship Club" (CPMC) is a student-driven initiative aimed at fostering critical thinking, problem-solving skills, and technical excellence through competitive programming. CPMC serves as a bridge between junior and senior students, enabling mentorship and collaboration to help students excel in technical fields.   </p>
                                      </div>
                </div>
              </div>
            </motion.div>
        
       
    
            {/* ITESA Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32  overflow-hidden  flex items-start justify-center flex-shrink-0">
                    <img src="ITESA.png" alt="ITESA Club" className="object-cover " />
                  </div>
                  <div className="flex-grow">
                  <button className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                    border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold">
                      ITESA
                    </button>
                    <h3 className="text-1xl font-['SpaceMIssion'] text-yellow-500 mb-3 h-10">
                    Information Technology Engineering Students Association 
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify">
                    The "Information Technology Engineering Students Association" (ITESA) at DY Patil College of Engineering is a dynamic club that provides a platform for IT students to develop their technical and non-technical skills. The club organizes workshops on trending topics like GitHub, LeetCode, and cybersecurity, as well as cultural events, open mic nights, and sports competitions.                    </p>
                                      </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Clubs Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
    
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* GDG Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex items-center gap-6">
                <div className="w-32 h-32 overflow-hidden flex items-start justify-center flex-shrink-0">
  <img src="GDSC.png" alt="GDSC Club" className="object-cover h-10 w-20" />
</div>

                  <div className="flex-grow">
                  <button className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                    border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold">
                      GDG
                    </button>
                    <h3 className="text-1xl font-['SpaceMIssion'] text-yellow-500 mb-3">
                    Google Devloper Groups.
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify">
                    The "Google Developer Groups on Campus DYPCOE" (GDG) is a vibrant student community supported by Google, dedicated to empowering aspiring developers with the latest technological knowledge and skills. GDG Campus focuses on fostering innovation and technical excellence through hands-on workshops, collaborative projects, and engaging hackathons.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
        
       
    
            {/* IASC Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32  overflow-hidden  flex items-start justify-center flex-shrink-0">
                    <img src="IASC.png" alt="IASC Club" className="object-cover h-10 " />
                  </div>
                  <div className="flex-grow">
                  <button className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                    border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold">
                      IASC
                    </button>
                    <h3 className="text-1xl font-['SpaceMIssion'] text-yellow-500 mb-3">
                    Intel AI Student Association. 
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify">
                    The "Intel AI Students Club" (IASC) at DYPCOE is a thriving community committed to fostering innovation, collaboration, and skill development in the field of Artificial Intelligence. The club provides a platform for students to explore and implement AI-driven solutions across diverse domains such as web development, Android applications, the Internet of Things (IoT), and beyond     </p>                                 </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;