import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedContactForm } from '../components/contact/EnhancedContactForm';

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-2xl mx-auto">
        <EnhancedContactForm />
      </div>
    </motion.div>
  );
};