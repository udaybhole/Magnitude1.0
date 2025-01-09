import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
  const contacts = [
    {
      name: " Uday  Bhole",
      role: "Core Committee",
      email: "udaybhole3104@gmail.com",
      phone: "+91 9302725203"
    },
    {
      name: "Mayank Dhote",
      role: "Core Committee",
      email: "mayankdhote4316@gmail.com",
      phone: "+91 6266764316"
    }
   
  ];

  return (
    <footer className="relative bg-black/60 backdrop-blur-sm border-t border-purple-400/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
         

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-['SpaceMission'] text-purple-500 font-extrabold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/problems" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-['Arial']">
                  Problem Statements
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-['Arial']">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-['Arial']">
                  Submit Idea
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-['Arial']">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-lg font-['SpaceMission'] text-purple-500 font-extrabold mb-4">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-['Arial'] font-extrabold">
              {contacts.map((contact, index) => (
                <div key={index} className="space-y-2 bg-black/40 p-4 rounded-lg border-2 border-purple-400/30 hover:border-purple-400">
                  <h4 className="text-purple-300 font-['SpaceMission'] text-xl">
                    {contact.name}
                  </h4>
                  <p className="text-s text-gray-400 font-extrabold">{contact.role}</p>
                  <div className="space-y-1 text-sm">
                    <a
                      href={`mailto:${contact.email}`}
                      className="block text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {contact.email}
                    </a>
                    <a
                      href={`tel:${contact.phone}`}
                      className="block text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 my-8">
          <a 
            href="https://www.instagram.com/dypcoe.official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/school/dr-d-y-patil-college-of-engineering-akurdi-pune/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://www.dypcoeakurdi.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="sr-only">Website</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-purple-400/30 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Magnitude | DYPCOE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 