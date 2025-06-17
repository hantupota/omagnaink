
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavigationProps {
  language: Language;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleLanguage: () => void;
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  language,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleLanguage,
  scrollToSection
}) => {
  const t = translations;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://ik.imagekit.io/omagnaink/omagnaink-logo2025-transparant.png" 
              alt="Omagna Ink Studio"
              className="h-8 w-auto filter invert"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-yellow-500 transition-colors font-cinzel">
              {t.nav.hero[language]}
            </button>
            <button onClick={() => scrollToSection('artists')} className="hover:text-yellow-500 transition-colors font-cinzel">
              {t.nav.artists[language]}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-yellow-500 transition-colors font-cinzel">
              {t.nav.gallery[language]}
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-yellow-500 transition-colors font-cinzel">
              {t.nav.faq[language]}
            </button>
            <button onClick={() => scrollToSection('sanctuary')} className="hover:text-yellow-500 transition-colors font-cinzel">
              {t.nav.sanctuary[language]}
            </button>
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
                <button onClick={() => scrollToSection('hero')} className="text-left hover:text-yellow-500 transition-colors font-cinzel">
                  {t.nav.hero[language]}
                </button>
                <button onClick={() => scrollToSection('artists')} className="text-left hover:text-yellow-500 transition-colors font-cinzel">
                  {t.nav.artists[language]}
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-yellow-500 transition-colors font-cinzel">
                  {t.nav.gallery[language]}
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-yellow-500 transition-colors font-cinzel">
                  {t.nav.faq[language]}
                </button>
                <button onClick={() => scrollToSection('sanctuary')} className="text-left hover:text-yellow-500 transition-colors font-cinzel">
                  {t.nav.sanctuary[language]}
                </button>
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
