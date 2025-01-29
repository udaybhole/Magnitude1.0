import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function About() {
  const router = useNavigate();

  return (
    <div className="min-h-screen py-16 px-4 bg-black">
      {/* About Us Section */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="pt-10 text-4xl md:text-5xl font-extrabold font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent">
            About Us
          </h1>
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
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 overflow-hidden bg-blue-light/10 flex items-center justify-center flex-shrink-0">
                    <img src="/collegelogo.png" alt="College Logo" className="object-cover" />
                  </div>
                  <div className="text-center md:text-left">
                    <Link
                      to="https://www.dypcoeakurdi.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold"
                    >
                      DYPCOE
                    </Link>
                    <h3 className="text-2xl font-['SpaceMission'] text-yellow-500 mb-3">
                      Dr D.Y. Patil College Of Engineering
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify md:text-justify">
                      Dr. D. Y. Patil Prathishthan's, D.Y. Patil College of Engineering, was established in 1984 in Pimpri and later shifted to Akurdi complex in 2001, which is in the vicinity of Pimpri Chinchwad Industrial area, one of the biggest Industrial belts in Asia. The college spreads over 10 acres of land with seven Engineering disciplines. This Institute is approved by AICTE, New Delhi and is affiliated to the Savitribai Phule Pune University. D.Y. Patil College of Engineering has been granted Autonomous status from the Academic Year 2024-25.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other cards follow the same pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 overflow-hidden flex items-center justify-center flex-shrink-0">
                    <img src="IIC.jpg" alt="DY Patil College" className="object-fill h-20" />
                  </div>
                  <div className="text-center md:text-left">
                    <Link
                      to="https://iic.mic.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm mb-3 font-extrabold"
                    >
                      IIC
                    </Link>
                    <h3 className="text-2xl font-['SpaceMission'] text-yellow-500 mb-3">
                      Institution's Innovation Council
                    </h3>
                    <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-justify text-center">
                      A premier engineering institution fostering innovation since 1984.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="mb-24">
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h1 className="text-4xl md:text-5xl font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-50 bg-clip-text text-transparent">
      Organizing Association's
    </h1>
  </motion.div>

  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Club Cards */}
      {[
        {
          name: "CPMC",
          logo: "CPMC.png",
          link: "https://www.cpmcdypcoe.in/",
          title: "Competitive Programming And MentorShip Club",
          description:
            'The "Competitive Programming and Mentorship Club" (CPMC) is a student-driven initiative aimed at fostering critical thinking, problem-solving skills, and technical excellence through competitive programming. CPMC serves as a bridge between junior and senior students, enabling mentorship and collaboration to help students excel in technical fields, improve employability, and prepare for real-world challenges.',
        },
        {
          name: "ITESA",
          logo: "ITESA.png",
          link: "https://itesa.club/",
          title: "Information Technology Engineering Students Association",
          description:
            'The "Information Technology Engineering Students Association" (ITESA) at DY Patil College of Engineering is a dynamic club that provides a platform for IT students to develop their technical and non-technical skills. The club organizes workshops on trending topics like GitHub, LeetCode, and cybersecurity, as well as cultural events, open mic nights, and sports competitions.',
        },
        {
          name: "GDG",
          logo: "GDSC.png",
          link: "https://dscdypcoe.web.app/",
          title: "Google Developer Groups",
          description:
            'The "Google Developer Groups on Campus DYPCOE" (GDG) is a vibrant student community supported by Google, dedicated to empowering aspiring developers with the latest technological knowledge and skills. GDG Campus focuses on fostering innovation and technical excellence through hands-on workshops, collaborative projects, and engaging hackathons.',
        },
        {
          name: "IASC",
          logo: "IASC.png",
          link: "https://iasc-web2.vercel.app/",
          title: "Intel AI Student Club",
          description:
            'The "Intel AI Students Club" (IASC) at DYPCOE is a thriving community committed to fostering innovation, collaboration, and skill development in the field of Artificial Intelligence. The club provides a platform for students to explore and implement AI-driven solutions across diverse domains such as web development, Android applications, the Internet of Things (IoT), and beyond.',
        },
      ].map((club, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-black p-8 rounded-xl border border-blue-light/20">
            <div className="flex flex-col items-center text-center gap-4">
              {/* Logo */}
              <div className="w-24 h-24 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img src={club.logo} alt={`${club.name} Logo`} className="object-contain" />
              </div>
              {/* Link */}
              <Link
                to={club.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-purple-200/5 hover:bg-yellow-500 
                border border-yellow-500 text-white transition-all duration-300 font-['Arial'] text-sm font-extrabold"
              >
                {club.name}
              </Link>
              {/* Title */}
              <h3 className="text-1xl font-['SpaceMission'] text-yellow-500">{club.title}</h3>
              {/* Description */}
              <p className="text-gray-300 font-['Arial'] text-sm font-semibold text-center text-justify">
                {club.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



    </div>
  );
}

export default About;
