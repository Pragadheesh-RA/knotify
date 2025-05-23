import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './types';

interface DashboardItemProps {
  item: MenuItem;
  index: number;
}

export const DashboardItem: React.FC<DashboardItemProps> = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-rose-700/30 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Icon className="mx-auto mb-3 text-rose-300" size={24} />
      <h3 className="text-rose-100 font-medium text-sm sm:text-base">{item.label}</h3>
    </motion.div>
  );
};