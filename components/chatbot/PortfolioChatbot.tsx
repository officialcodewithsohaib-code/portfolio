'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export const PortfolioChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};
