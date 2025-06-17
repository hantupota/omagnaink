import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations'; // Asumsi file terjemahanmu ada di sini
import { heroVideo, logo } from '../data/omagnaData'; // Mengambil data video & logo dari brankas data

// Menentukan props yang dibutuhkan oleh komponen ini dari Index.tsx
interface HeroSectionProps {
  language: Language;
  scrollY: number;
  setShowAIModal: (show: boolean) => void;
}

/**
 * Versi final HeroSection yang menggabungkan animasi canggih
 * dengan data terpusat untuk kemudahan maintenance.
 * Direvisi oleh KOSMARA AI.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ language, scrollY, setShowAIModal }) => {
  const t = translations;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
      
      {/* Video Latar dengan Efek Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideo.poster} // Data dari omagnaData.ts
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo.webm} type="video/webm" />  {/* Data dari omagnaData.ts */}
          <source src={heroVideo.mp4} type="video/mp4" />    {/* Data dari omagnaData.ts */}
        </video>
      </motion.div>
      
      {/* Lapisan Gelap di Atas Video */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      {/* Konten Utama dengan Animasi Staggered */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Logo dengan Animasi */}
          <motion.img 
            src={logo.url} // Data dari omagnaData.ts
            alt={logo.alt} // Data dari omagnaData.ts
            className="h-24 w-auto mx-auto filter invert"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Judul Utama dengan Animasi */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-wider font-cinzel text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.headline[language]}
          </motion.h1>
          
          {/* Tombol CTA Utama dengan Animasi */}
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

          {/* Tombol WhatsApp dengan Animasi */}
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
