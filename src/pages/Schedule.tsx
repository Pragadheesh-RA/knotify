import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export const Schedule: React.FC = () => {
  const events = [
    { time: '4:00 PM', title: 'Wedding Ceremony', description: 'The ceremony begins' },
    { time: '5:30 PM', title: 'Cocktail Hour', description: 'Join us for drinks and hors d\'oeuvres' },
    { time: '6:30 PM', title: 'Reception', description: 'Dinner and dancing' },
    { time: '11:00 PM', title: 'Farewell', description: 'Thank you for celebrating with us' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Calendar className="mx-auto text-rose-600 mb-4" size={48} />
          <h1 className="text-4xl font-serif text-rose-600 mb-4">Wedding Schedule</h1>
          <p className="text-gray-600">Join us for our special day</p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-rose-600">{event.time}</h3>
                <div className="h-px flex-1 bg-rose-200 mx-4"></div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};