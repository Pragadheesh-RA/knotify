import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface WelcomeModalProps {
  onNameSubmit: (name: string) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-white via-rose-50 to-white rounded-2xl p-12 max-w-xl w-full mx-4 shadow-2xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex justify-center mb-6"
        >
          <Heart className="text-rose-600" size={48} fill="currentColor" />
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-serif text-center mb-8 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
        >
          Welcome to Our Wedding
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-3">
              Please enter your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-14 px-6 rounded-xl bg-gradient-to-r from-white to-rose-50 border-2 border-transparent focus:border-rose-300 focus:shadow-lg focus:shadow-rose-100 transition-all duration-300 text-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl py-4 px-6 text-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Continue to Invitation
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};