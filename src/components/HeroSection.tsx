
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  language: Language;
  scrollY: number;
  setShowAIModal: (show: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, scrollY, setShowAIModal }) => {
  const t = translations;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://ik.imagekit.io/omagnaink/omagna-ink-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/klikgrosirbaju-com/video/upload/v1749883232/omagnaink2.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/klikgrosirbaju-com/video/upload/v1749883235/omagnaink.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      {/* Content with Staggered Animation */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.img 
            src="https://ik.imagekit.io/omagnaink/omagnaink-logo2025-transparant.png" 
            alt="Omagna Ink Studio"
            className="h-24 w-auto mx-auto filter invert"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-wider font-cinzel"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.headline[language]}
          </motion.h1>
          
          <motion.button
            onClick={() => setShowAIModal(true)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-8 py-4 bg-transparent border-2 border-yellow-500 hover:border-yellow-400 text-yellow-500 hover:text-yellow-400 font-bold text-xl tracking-wider font-cinzel transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">{t.hero.cta[language]}</span>
            <div className="absolute inset-0 bg-yellow-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>

          {/* WhatsApp Jakarta Button */}
          <motion.a
            href="https://wa.me/6285921896058"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Jakarta</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
