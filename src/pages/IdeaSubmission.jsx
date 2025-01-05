import { motion } from 'framer-motion';

function IdeaSubmission() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Submit Your Idea</h1>
      <div className="max-w-2xl mx-auto">
        {/* Add submission form here */}
      </div>
    </motion.div>
  );
}

export default IdeaSubmission; 