import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { heroVideo } from '../data/omagnaData'; // Hanya butuh heroVideo karena logo sudah dihapus dari sini

interface HeroSectionProps {
  language: Language;
  scrollY: number;
  setShowAIModal: (show: boolean) => void;
}

/**
 * Versi final HeroSection berdasarkan kode pengguna.
 * Logo di tengah dihapus & hirarki tombol diperbaiki.
 * Revisi oleh KOSMARA AI.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ language, scrollY, setShowAIModal }) => {
  const t = translations;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden text-center" style={{ scrollSnapAlign: 'start' }}>
      
      {/* Video Latar Belakang */}
      <motion.div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <video autoPlay muted loop playsInline poster={heroVideo.poster} className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo.webm} type="video/webm" />
          <source src={heroVideo.mp4} type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Lapisan Gelap */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      {/* Konten Utama */}
      <div className="relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 flex flex-col items-center"
        >
          {/* LOGO SUDAH DIHAPUS DARI SINI */}
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-wider font-cinzel text-white"
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.headline[language]}
          </motion.h1>
          
          {/* KUMPULAN TOMBOL */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Tombol CTA Primer */}
            <motion.button
              onClick={() => setShowAIModal(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="px-8 py-4 bg-transparent border-2 border-yellow-500 hover:border-yellow-400 text-yellow-500 hover:text-yellow-400 font-bold text-xl tracking-wider font-cinzel transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{t.hero.cta[language]}</span>
              <div className="absolute inset-0 bg-yellow-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>

            {/* Tombol CTA Sekunder (WhatsApp) */}
            <motion.a
              href="https://api.whatsapp.com/send?phone=85561552851&text=👋omagnaink"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border border-green-600 hover:bg-green-600 text-green-500 hover:text-black font-bold rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
