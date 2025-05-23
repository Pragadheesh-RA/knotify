import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Train } from 'lucide-react';
import { MapPreview } from '../components/MapPreview';

export const Venue: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MapPin className="mx-auto text-rose-600 mb-4" size={48} />
          <h1 className="text-4xl font-serif text-rose-600 mb-4">Wedding Venue</h1>
          <p className="text-gray-600">Grand Wedding Hall</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-rose-600 mb-4">Location Details</h2>
              <p className="text-gray-600 mb-2">123 Wedding Street</p>
              <p className="text-gray-600 mb-2">New York, NY 10001</p>
              <p className="text-gray-600">United States</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-rose-600 mb-4">Getting There</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Car className="text-rose-600" />
                  <span>15 minutes from downtown</span>
                </div>
                <div className="flex items-center gap-3">
                  <Train className="text-rose-600" />
                  <span>Nearest subway station: Central Station</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-rose-600" />
                  <span>Parking available on premises</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px]">
            <MapPreview />
          </div>
        </div>
      </div>
    </motion.div>
  );
};