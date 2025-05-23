import React from 'react';
import { motion } from 'framer-motion';

export const GradientBackground: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: [
          'linear-gradient(45deg, #ffe5e5, #fff0f0)',
          'linear-gradient(45deg, #fff0f0, #ffe5e5)',
          'linear-gradient(45deg, #ffe5e5, #fff0f0)',
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDEwNywgMTI5LCAwLjEpIi8+PC9zdmc+')] opacity-50" />
    </motion.div>
  );
};