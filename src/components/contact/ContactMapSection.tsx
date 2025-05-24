import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { MapPreview } from '../MapPreview';
import { EnhancedContactForm } from './EnhancedContactForm';

export const ContactMapSection: React.FC = () => {
  const quickInfo = [
    { icon: Calendar, text: 'December 31, 2025', label: 'Wedding Date' },
    { icon: Clock, text: '6:30 AM Onwards', label: 'Ceremony Time' },
    { icon: MapPin, text: 'Grand Wedding Hall, Dubai main Road', label: 'Location' },
    { icon: Phone, text: '+91 9876543210', label: 'Contact' },
    { icon: Mail, text: 'wedding@gmail.com', label: 'Email' }
  ];
  
  return (
    <div className="bg-gradient-to-b from-rose-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-serif text-rose-600 mb-8 text-center">Wedding Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {quickInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ 
                    delay: index * 0.1,
                    hover: { duration: 0.2 }
                  }}
                  className="group relative bg-rose-50 rounded-lg p-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-white rounded-full shadow-md group-hover:bg-rose-100 transition-colors">
                      <item.icon className="text-rose-500 group-hover:text-rose-600" size={24} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.label}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-rose-100/50 rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <MapPreview />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4"
                >
                  <span className="text-white font-medium">Click to view on Google Maps</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <EnhancedContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};