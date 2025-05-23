import React from 'react';
import { motion } from 'framer-motion';
import { WelcomeMessage } from '../components/welcome/WelcomeMessage';
import { CoupleSection } from '../components/CoupleSection';
import { EventDetails } from '../components/EventDetails';
import { ContactMapSection } from '../components/contact/ContactMapSection';

export const Home: React.FC<{ guestName: string }> = ({ guestName }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <WelcomeMessage guestName={guestName} />
      <CoupleSection />
      <EventDetails />
      <ContactMapSection />
    </motion.div>
  );
};