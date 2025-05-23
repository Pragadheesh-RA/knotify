import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { ChatBox } from './ChatBox';
import { ContactSuccess } from './ContactSuccess';
import { validateEmail, validateName, validateMessage } from '../../utils/validation';

export const EnhancedContactForm: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    if (!nameError && !emailError && !messageError) {
      try {
        // Format email content
        const subject = encodeURIComponent('Wedding Invitation Contact Form');
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
        `);

        // Open email client
        window.location.href = `mailto:dev@example.com?subject=${subject}&body=${body}`;
        
        // Show success message
        setShowSuccess(true);
        
        // Clear form
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof typeof formData
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-playfair text-rose-600 mb-6 text-center">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange(e, 'name')}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
              />
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange(e, 'email')}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          <div className="space-y-2">
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => handleInputChange(e, 'message')}
                rows={4}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors ${
                  errors.message ? 'border-red-500' : 'border-gray-200'
                }`}
              />
            </div>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-rose-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-rose-700'
            }`}
          >
            <Send size={18} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 bg-rose-600 text-white rounded-full p-4 shadow-lg hover:bg-rose-700 transition-colors"
      >
        <MessageSquare size={24} />
      </motion.button>

      {showChat && <ChatBox onClose={() => setShowChat(false)} />}
      
      <AnimatePresence>
        {showSuccess && <ContactSuccess onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </div>
  );
};