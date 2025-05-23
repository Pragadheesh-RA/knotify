import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavigationTabs } from './components/layout/NavigationTabs';
import { WelcomeModal } from './components/WelcomeModal';
import { WelcomeMessage } from './components/welcome/WelcomeMessage';
import { ImageSlideshow } from './components/ImageSlideshow';
import { EventDetails } from './components/EventDetails';
import { Dashboard } from './components/Dashboard';
import { GradientBackground } from './components/animations/GradientBackground';
import { FloatingHearts } from './components/animations/FloatingHearts';
import { LoveQuotes } from './components/animations/LoveQuotes';
import { ContactMapSection } from './components/contact/ContactMapSection';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

// Import pages
import { Schedule } from './pages/Schedule';
import { Venue } from './pages/Venue';
import { Story } from './pages/Story';
import { Contact } from './pages/Contact';
import { Timeline } from './pages/Timeline';
import { Registry } from './pages/Registry';

const HomePage: React.FC<{ guestName: string }> = ({ guestName }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <WelcomeMessage guestName={guestName} />
    <LoveQuotes />
    <ImageSlideshow />
    <Dashboard />
    <EventDetails />
    <ContactMapSection />
  </motion.div>
);

const App: React.FC = () => {
  const [guestName, setGuestName] = useState<string | null>(null);

  const handleNameSubmit = (name: string) => {
    setGuestName(name);
  };

  if (!guestName) {
    return <WelcomeModal onNameSubmit={handleNameSubmit} />;
  }

  return (
    <Router>
      <div className="relative min-h-screen">
        <GradientBackground />
        <FloatingHearts />
        <NavigationTabs />
        
        <Routes>
          <Route path="/" element={<HomePage guestName={guestName} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;