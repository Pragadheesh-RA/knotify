import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ContactSuccessProps {
  onClose: () => void;
}

export const ContactSuccess: React.FC<ContactSuccessProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-2xl font-playfair text-gray-800 mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your message. We'll get back to you soon,Thagavaal ku nandri...kalambu kathuvaratum!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors"
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  );
};