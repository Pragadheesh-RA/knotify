import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

export const ChatBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can we help you with the wedding?", isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, { text: newMessage, isUser: true }]);
      setNewMessage('');
      
      // Simulate response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thank you for your message! We'll get back to you soon.",
          isUser: false
        }]);
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-20 right-6 w-96 bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-rose-600 text-white p-4 flex justify-between items-center">
          <h3 className="font-medium">Wedding Chat</h3>
          <button onClick={onClose} className="hover:bg-rose-700 rounded-full p-1">
            <X size={20} />
          </button>
        </div>
        
        <div className="h-96 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.isUser ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-lg p-3 ${
                msg.isUser ? 'bg-rose-600 text-white' : 'bg-gray-100'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="bg-rose-600 text-white rounded-lg p-2 hover:bg-rose-700"
            >
              <Send size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};