import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              alt="Bride"
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-serif text-rose-600">Jane Doe</h3>
            <p className="text-gray-600">The Bride</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-rose-600"
          >
            <Heart size={48} className="mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
              alt="Groom"
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-serif text-rose-600">John Doe</h3>
            <p className="text-gray-600">The Groom</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};