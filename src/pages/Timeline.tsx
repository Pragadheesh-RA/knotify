import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const Timeline: React.FC = () => {
  const schedule = [
    {
      time: '4:00 PM - 4:45 PM',
      title: 'Ceremony',
      details: 'Exchange of vows and rings,mattikitae pangu,wicket vilum tharunam'
    },
    {
      time: '5:00 PM - 6:00 PM',
      title: 'Cocktail Hour',
      details: 'Enjoy drinks and appetizers while we take photos, Drinking is injurious to health '
    },
    {
      time: '6:00 PM - 7:30 PM',
      title: 'Dinner Service',
      details: 'Elegant plated dinner with wine service,Soru Soru Soru'
    },
    {
      time: '7:30 PM - 11:00 PM',
      title: 'Reception',
      details: 'Dancing, cake cutting, and celebrations,and Konjam Konjam sights and fights.'
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
          <Clock className="mx-auto text-rose-600 mb-4" size={48} />
          <h1 className="text-4xl font-serif text-rose-600 mb-4">Wedding Day Timeline</h1>
          <p className="text-gray-600">A detailed schedule of our special day</p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="text-rose-600 font-semibold mb-2 md:mb-0">{item.time}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};