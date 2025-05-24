import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ExternalLink } from 'lucide-react';

export const Registry: React.FC = () => {
  const registries = [
    {
      name: 'Amazon Wedding Registry',
      url: 'https://www.amazon.com/wedding',
      description: 'Find a variety of items from our wishlist'
    },
    {
      name: 'Target Registry',
      url: 'https://www.target.com/gift-registry/wedding',
      description: 'Home essentials and more'
    },
    {
      name: 'Honeymoon Fund',
      url: '#',
      description: 'Contribute to our dream honeymoon'
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
          <Gift className="mx-auto text-rose-600 mb-4" size={48} />
          <h1 className="text-4xl font-serif text-rose-600 mb-4">Gift Registry</h1>
          <p className="text-gray-600">Your presence is our present, but if you wish to give a gift, Gift koduda venna, mudincha ps5 and remote car...</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {registries.map((registry, index) => (
            <motion.a
              key={index}
              href={registry.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-rose-600">{registry.name}</h3>
                  <ExternalLink size={20} className="text-gray-400" />
                </div>
                <p className="text-gray-600">{registry.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};