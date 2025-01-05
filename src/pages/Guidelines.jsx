import { motion } from 'framer-motion';

function Guidelines() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Guidelines</h1>
      <div className="prose prose-invert max-w-none">
        {/* Add guidelines content here */}
      </div>
    </motion.div>
  );
}

export default Guidelines; 