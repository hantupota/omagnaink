
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingActionButtonProps {
  showFAB: boolean;
  setShowFAQModal: (show: boolean) => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ showFAB, setShowFAQModal }) => {
  return (
    <AnimatePresence>
      {showFAB && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowFAQModal(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-yellow-600 hover:bg-yellow-700 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50 z-40 border-2 border-yellow-500"
        >
          <MessageCircle className="w-8 h-8 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
