import { motion } from 'framer-motion';

function IdeaSubmission() {

  const handleExternalLink = () => {
    window.open("https://github.com/udaybhole/Magnitude1.0", "_blank"); 
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Submit Your Idea</h1>
      <div className="max-w-2xl mx-auto">
        <button
          onClick={handleExternalLink}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Link
        </button>
      </div>
    </motion.div>
  );
}

export default IdeaSubmission;
