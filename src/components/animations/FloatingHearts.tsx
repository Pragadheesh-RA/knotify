import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: 0
          }}
          animate={{
            y: -100,
            scale: [0, 1, 0],
            x: `calc(${Math.random() * 100}vw)`
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2
          }}
        >
          <Heart 
            className="text-rose-300/30" 
            size={20 + Math.random() * 30}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
};