import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DashboardItem } from './dashboard/DashboardItem';
import { menuItems } from './dashboard/menuItems';

export const Dashboard: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-rose-900 to-rose-800">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {menuItems.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <DashboardItem item={item} index={index} />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};