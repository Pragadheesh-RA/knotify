import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-rose-900 to-rose-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-serif text-xl mb-4">Contact</h4>
            <p>Phone:+91 9876543210</p>
            <p>Email: wedding@gmail.com</p>
          </div>
          <div className="text-center">
            <h4 className="font-serif text-xl mb-4">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-rose-300">
                <Instagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-rose-300">
                <Facebook />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-rose-300">
                <Twitter />
              </motion.a>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-serif text-xl mb-4">Venue</h4>
            <p>Grand Wedding Hall</p>
            <p>No 7 Dubai main Road</p>
            <p>Dubai kuruku Sandhu, Dubai 10001</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-rose-700">
          <p className="flex items-center justify-center gap-2">
            <span>© {currentYear} Sergio & Raquel's Wedding</span>
            <Heart size={16} className="text-rose-300" />
          </p>
        </div>
      </div>
    </footer>
  );
};