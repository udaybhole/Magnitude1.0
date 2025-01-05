import { motion } from 'framer-motion';

function Archives() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Archives</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Add past hackathon cards here */}
      </div>
    </motion.div>
  );
}

export default Archives; 