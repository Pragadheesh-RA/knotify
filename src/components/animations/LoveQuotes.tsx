import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
  "Every love story is beautiful, but ours is my favorite.",
  "Together is a beautiful place to be.",
  "And suddenly all the love songs were about you.",
  "You're the missing piece I've been looking for.",
];

export const LoveQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-8 text-center overflow-hidden">
      <motion.p
        key={currentQuote}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-xl italic text-rose-600 font-serif"
      >
        {quotes[currentQuote]}
      </motion.p>
    </div>
  );
};