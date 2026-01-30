'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-shadow z-50 flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle size={24} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Badge */}
      {!isOpen && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold"
        >
          AI
        </motion.span>
      )}
    </motion.button>
  );
};
