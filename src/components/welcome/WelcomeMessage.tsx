import React from 'react';
import { motion } from 'framer-motion';
import { WeddingCountdown } from './WeddingCountdown';

interface WelcomeMessageProps {
  guestName: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ guestName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20 px-4 bg-gradient-to-b from-rose-50/50 to-white"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-great-vibes text-rose-400 mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Join Us in Celebration
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-6xl font-dancing-script text-rose-600 mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome, {guestName}
        </motion.h1>
        <motion.span
          className="text-2xl md:text-3xl font-great-vibes text-rose-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          & Family
        </motion.span>
      </motion.div>

      <motion.p
        className="text-xl text-gray-700 max-w-2xl mx-auto font-playfair italic mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        We are delighted to invite you and your family to celebrate our special day with us.
        Your presence will make our wedding celebration even more memorable.
      </motion.p>

      <WeddingCountdown weddingDate="2025-12-31T16:30:00" />
    </motion.div>
  );
};