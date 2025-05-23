import React from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, Calendar, Map, Users, Gift, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Heart, label: 'Our Story', path: '/story' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Map, label: 'Venue', path: '/venue' },
  { icon: Users, label: 'RSVP', path: '/rsvp' },
  { icon: Gift, label: 'Registry', path: '/registry' },
  { icon: Phone, label: 'Contact', path: '/contact' },
];

export const NavigationTabs: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex overflow-x-auto hide-scrollbar space-x-8 md:justify-center max-w-full">
            {tabs.map((tab) => (
              <Link 
                key={tab.path} 
                to={tab.path}
                className="relative group flex-shrink-0"
              >
                <motion.div
                  className="flex items-center gap-2 text-gray-700 hover:text-rose-600 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <tab.icon size={18} />
                  <span className="text-sm font-medium whitespace-nowrap">{tab.label}</span>
                  {(location.pathname === tab.path || (tab.path === '/' && location.pathname === '/')) && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-rose-600"
                      layoutId="activeTab"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};