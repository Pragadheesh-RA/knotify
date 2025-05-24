import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventDetails: React.FC = () => {
  const handleMapClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=40.7128,-74.0060`, '_blank');
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-rose-600 mb-12">Wedding Details</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Calendar className="mx-auto text-rose-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Date</h3>
            <p className="text-gray-600">December 31, 2025</p>
          </motion.div>

          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="mx-auto text-rose-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Time</h3>
            <p className="text-gray-600">6:30 AM Onwards</p>
          </motion.div>

          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="mx-auto text-rose-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Venue</h3>
            <p className="text-gray-600">Grand Wedding Hall</p>
            <button
              onClick={handleMapClick}
              className="text-rose-600 hover:text-rose-700 underline mt-2 inline-flex items-center gap-1"
            >
              <MapPin size={16} />
              View on Google Maps
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};