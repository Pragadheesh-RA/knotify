import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <motion.div
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference ${
          isPointer ? 'bg-white' : 'bg-rose-400'
        }`}
        animate={{ 
          scale: isPointer ? 1.5 : 1,
          x: position.x - 12,
          y: position.y - 12
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div
        className="fixed w-12 h-12 rounded-full border-2 border-rose-300 pointer-events-none z-50"
        animate={{ 
          scale: isPointer ? 1.2 : 1,
          x: position.x - 24,
          y: position.y - 24
        }}
        transition={{ type: "spring", damping: 20, delay: 0.05 }}
      />
    </>
  );
};