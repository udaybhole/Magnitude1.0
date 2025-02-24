import React, { useState , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram , Mail } from 'lucide-react';
import VantaBackground from '../components/Vanat';


const Committees = () => {
  const [activeSection, setActiveSection] = useState('faculty');

 

  const committees = {
    faculty: [
      {
        name: "Dr. Manish Sharma",
        position: "Hackathon Faculty Co-ordinator",
        image: "/SIR.jpg",
        linkedin: "https://www.linkedin.com/in/dr-manish-sharma-2bb7404a/",
        instagram: ""
      }
    ],
    organizing: [
      {
        name: "AARYAN PALVE",
        position: "Core Committee",
        image: "/ARYAN.jpg",
        mail: "aspalve2004@gmail.com",
        linkedin: "https://www.linkedin.com/in/aaryan-palve-6124372b7/",
        instagram: "https://www.instagram.com/aaryanpalve2004/"
      },
      {
        name: "UDAY BHOLE",
        position: "Core Committee",
        image: "/UDAY.jpg",
        mail: "udaybhole3104@gmail.com",
        linkedin: "https://www.linkedin.com/in/uday-bhole/",
        instagram: "https://www.instagram.com/_u_dayyy/"
      },
      {
        name: "MAYANK DHOTE",
        position: "Core Committee",
        image: "/MAYANK.jpg",
        mail: "mayankdhote4316@gmail.com",
        linkedin: "https://www.linkedin.com/in/mayank-dhote-71b483257/",
        instagram: "https://www.instagram.com/18_.mayank_/"
      }
    ],
    tech: [
      {
        name: "YASH MHASKAR",
        position: "Tech Committee",
        image: "/YASH.jpg",
        mail: "myash100@gmail.com",
        linkedin: "https://www.linkedin.com/in/yash-mhaskar21/",
        instagram: "https://www.instagram.com/myash_21/"
      }
    ],
    management: [
      {
        name: "PARTH MAGAR",
        position: "Mangement Committee",
        image: "/PARTH.jpg",
        mail: "parthmagar8@gmail.com",
        linkedin: "https://www.linkedin.com/in/parth-magar-339044288/",
        instagram: "https://www.instagram.com/sponge.exee/"
      },
      {
        name: "SHANTANU POKALE",
        position: "Mangement Committee",
        image: "/Shantanu.jpg",
        linkedin: "https://www.linkedin.com/in/shantanu-pokale/",
        instagram: "https://www.instagram.com/shantanupokale_/"
      }
    ],
    media: {
      hospitality: [
        {
          name: "SACHCHAITA HANGLOO",
          position: "EVENT OPERATION LEAD",
          image: "/Hanglooo.jpg",
          linkedin: "https://www.linkedin.com/in/sachchaita-hangloo-374137279/",
        }
      ],
      design: [
        {
          name: "ATHARVA WANI",
          position: "DESIGN LEAD",
          image: "/IMG_2753.jpeg",
       
        },
        {
          name: "SANIKA KALASKAR",
          position: "DESIGN LEAD",
          image: "/Sanika recent.jpg",
         
        },
        {
          name: "MAITHILI M",
          position: "DESIGN CO-LEAD",
          image: "/Maithili Co-lead.jpg",
          
        },
        {
          name: "ASMITA KADAM",
          position: "DESIGN CO-LEAD",
          image: "/IMG_20250205_102221.jpg",
         
        }
      ],
      socialMedia: [
        {
          name: "SEJAL PAWAR",
          position: "SOCIAL MEDIA LEAD",
          image: "/IMG_20250202_232133.jpg",
         
        },
        {
          name: "RAM MANZA",
          position: "SOCIAL MEDIA LEAD",
          image: "/Ramkumar Manza Co_Lead.jpg",
          
        },
        {
          name: "SAMPADA",
          position: "SOCIAL MEDIA CO-LEAD",
          image: "/IMG-20250204-WA0005.jpg",
          
        },
        {
          name: "DIKSHA TAPKIRE",
          position: "SOCIAL MEDIA CO-LEAD",
          image: "/Diksha Tapkire Co-Lead.jpg",
         
        }
      ],
      mediaTeam: [
        {
          name: "SHRIRANG VAIDYA",
          position: "MEDIA LEAD",
          image: "/IMG-20230628-WA0002.jpg",
         
        },
        {
          name: "SUJAL PATIL",
          position: "MEDIA CO-LEAD",
          image: "/Sujal Patil.jpg",
        
        }
      ],
      pr: [
        {
          name: "ROHAN MULIK",
          position: "PR LEAD",
          image: "/Rohan Mulik (Lead).jpg",
        
        },
        {
          name: "VAIDEHI DESHMUKH",
          position: "PR LEAD",
          image: "/IMG_20241113_175738.jpg",
         
        },
        {
          name: "PRATIK V",
          position: "PR CO-LEAD",
          image: "/Pratik(co-lead).jpg",
        
        },
        {
          name: "SHIVAM K",
          position: "PR CO-LEAD",
          image: "/shivam co-lead.jpeg",
         
        },
        {
          name: "VARUN NAGOTE",
          position: "PR CO-LEAD",
          image: "/Varun nagote co-lead.jpg",
         
        },
        {
          name: "VEDANT AHER",
          position: "PR CO-LEAD",
          image: "/Vedant Aher (co-lead).jpg",
         
        }
      ],
      qa: [
        {
          name: "JAGDISH RAUT",
          position: "QA LEAD",
          image: "/jagdish.jpg",
         
        },
        {
          name: "SHREYA GAIKWAD",
          position: "QA LEAD",
          image: "/Shreya Gaikwad.png",
         
        }
      ]
    }
  };

  const sections = {
    faculty: "EVENT FACULTY",
    organizing: "ORGANIZING COMMITTEE",
    tech: "TECH COMMITTEE",
    management: "MANAGEMENT COMMITTEE",
    media: "CORE TEAMS"
  };

  const CommitteeCard = ({ member }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm"
      style={{ width: '280px', height: '350px' }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
        {member.position && (
          <p className="text-sm text-purple-300">{member.position}</p>
        )}
        {(member.mail || member.linkedin || member.instagram) && (
          <div className="flex gap-3 mt-2">
      {member.mail && (
  <a
    href={`mailto:${member.mail}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-purple-400"
  >
    <Mail size={20} />
  </a>
)}

            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
                <Linkedin size={20} />
              </a>
            )}
            {member.instagram && (
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
                <Instagram size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  const getGridClass = (section) => {
    switch (section) {
      case 'faculty':
        return 'flex justify-center';
      case 'organizing':
        return 'grid grid-cols-1 md:grid-cols-3 gap-40';
      case 'tech':
        return 'flex justify-center';
      case 'management':
        return 'grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center';
      case 'media':
        return 'grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center';
      default:
        return 'grid grid-cols-1 md:grid-cols-3 gap-8';
    }
  };

  const renderMediaSection = () => {
    if (activeSection !== 'media') return null;

    return (
      <div className="w-full space-y-16">
        {/* Design Team */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">EVENT OPERATION LEAD </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 place-items-center">
            {committees.media.hospitality.map((member, index) => (
              <CommitteeCard key={`design-${index}`} member={member} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">DESIGN TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {committees.media.design.map((member, index) => (
              <CommitteeCard key={`design-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* Social Media Team */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">SOCIAL MEDIA TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {committees.media.socialMedia.map((member, index) => (
              <CommitteeCard key={`social-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* Media Team */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">PHOTOGRAPHY & VIDEOGRAPHY TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {committees.media.mediaTeam.map((member, index) => (
              <CommitteeCard key={`media-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* PR Team */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">PR TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {committees.media.pr.map((member, index) => (
              <CommitteeCard key={`pr-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* QA Team */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8 text-center">QA TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {committees.media.qa.map((member, index) => (
              <CommitteeCard key={`qa-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    );
  };


  return (
    
      <div className="relative min-h-screen py-16 px-4">
        <VantaBackground /> 
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl pt-10 md:text-5xl font-extrabold font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-50 bg-clip-text text-transparent">
            Committees
          </h1>
  
          <h4 className="text-1xl md:text-3xl font-extrabold font-['SpaceMission'] text-center mb-12 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-50 bg-clip-text text-transparent">
            MEET OUR TEAM
          </h4>
  
          <div className="pt-4 flex flex-wrap justify-between items-center gap-4 mb-12 px-4">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-purple-400 text-white shadow-lg shadow-purple-500/30 font-extrabold'
                    : 'bg-black border border-purple-700 text-white hover:bg-purple-400 font-bold'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
  
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto"
              style={{
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              {activeSection === 'media' ? (
                renderMediaSection()
              ) : (
                <div className={getGridClass(activeSection)}>
                  {Array.isArray(committees[activeSection]) && committees[activeSection].map((member, index) => (
                    <CommitteeCard key={index} member={member} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  export default Committees;
