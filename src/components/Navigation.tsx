import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { logo } from '../data/omagnaData'; // <-- 1. IMPORT LOGO DARI BRANKAS
import OptimizedImage from './ui/OptimizedImage'; // <-- 2. IMPORT GAMBAR CERDAS KITA

interface NavigationProps {
  language: Language;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleLanguage: () => void;
  scrollToSection: (id: string) => void;
}

/**
 * Versi final Navigation.tsx berdasarkan kode pengguna.
 * Logo disempurnakan untuk menggunakan data terpusat.
 * Revisi oleh KOSMARA AI.
 */
const Navigation: React.FC<NavigationProps> = ({
  language,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleLanguage,
  scrollToSection
}) => {
  const t = translations;

  const navLinks = [
    { id: 'hero', label: t.nav.hero[language] },
    { id: 'artists', label: t.nav.artists[language] },
    { id: 'gallery', label: t.nav.gallery[language] },
    { id: 'faq', label: t.nav.faq[language] },
    { id: 'sanctuary', label: t.nav.sanctuary[language] },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo yang Sudah Disempurnakan */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3">
            <OptimizedImage 
              src={logo.url} 
              alt={logo.alt}
              className="h-10 w-auto" // Ukuran disesuaikan agar pas
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-yellow-500 transition-colors font-cinzel">
                {link.label}
              </button>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 border border-yellow-600 rounded hover:border-yellow-500 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-gray-800 pt-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left hover:text-yellow-500 transition-colors font-cinzel">
                    {link.label}
                  </button>
                ))}
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-1 border border-yellow-600 rounded hover:border-yellow-500 transition-colors w-fit"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
