
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
  setShowFAQModal: (show: boolean) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ language, setShowFAQModal }) => {
  return (
    <section id="faq" className="py-20 bg-gray-900" style={{ scrollSnapAlign: 'start' }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-yellow-500 font-cinzel"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {language === 'en' ? 'CONSULT THE ORACLE' : 'KONSULTASI ORACLE'}
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-gray-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {language === 'en' 
            ? 'Seek answers to your darkest questions' 
            : 'Cari jawaban untuk pertanyaan tergelap Anda'}
        </motion.p>
        <motion.button
          onClick={() => setShowFAQModal(true)}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="px-8 py-4 bg-transparent border-2 border-yellow-500 hover:border-yellow-400 text-yellow-500 hover:text-yellow-400 font-bold text-xl tracking-wider font-cinzel transition-all duration-300"
        >
          {language === 'en' ? 'Ask the Oracle' : 'Tanya Oracle'}
        </motion.button>
      </div>
    </section>
  );
};

export default FAQSection;
