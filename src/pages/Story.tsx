import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Story: React.FC = () => {
  const timeline = [
    {
      date: 'June 2018',
      title: 'First Meeting',
      description: 'We met at a local coffee shop on a sunny afternoon while sergio wants to manipulate raquel.'
    },
    {
      date: 'December 2020',
      title: 'First Date',
      description: 'A magical evening at our favorite restaurant.'
    },
    {
      date: 'August 2021',
      title: 'Moving In Together',
      description: 'Started our life together in our cozy apartment.'
    },
    {
      date: 'February 2022',
      title: 'The Proposal',
      description: 'A surprise proposal during our vacation in Paris.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="mx-auto text-rose-600 mb-4" size={48} fill="currentColor" />
          <h1 className="text-4xl font-serif text-rose-600 mb-4">Our Love Story</h1>
          <p className="text-gray-600">The journey of our love</p>
        </div>

        <div className="space-y-12">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-rose-600 font-semibold mb-2">{event.date}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};