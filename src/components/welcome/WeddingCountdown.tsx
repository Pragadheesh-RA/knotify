import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  weddingDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const WeddingCountdown: React.FC<CountdownProps> = ({ weddingDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(weddingDate) - +new Date();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-playfair text-rose-600 mb-6">Counting Down to Our Special Day</h2>
      <div className="flex justify-center gap-4 sm:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-[80px]"
          >
            <div className="text-2xl sm:text-3xl font-bold text-rose-600">{value}</div>
            <div className="text-sm text-gray-600 capitalize">{unit}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};