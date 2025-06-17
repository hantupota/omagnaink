
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Facebook, Youtube, Wifi, Sun, Moon, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ language, darkMode, toggleDarkMode }) => {
  const t = translations;

  return (
    <footer id="sanctuary" className="bg-black border-t border-gray-800 py-16 relative" style={{ scrollSnapAlign: 'start' }}>
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-yellow-900/20 to-amber-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Studios */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-500 font-cinzel">{t.footer.studios[language]}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 font-cinzel">Jakarta, Indonesia 🇮🇩</h4>
                <div className="text-gray-400 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/6285921896058" className="hover:text-yellow-400 transition-colors">+62 859-2189-6058</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/6287772563170" className="hover:text-yellow-400 transition-colors">+62 877-7256-3170</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <a href="https://maps.app.goo.gl/d1KjJrLn2qFjyw7c6" className="hover:text-yellow-400 transition-colors">View on Maps</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-cinzel">Sihanoukville, Cambodia 🇰🇭</h4>
                <div className="text-gray-400 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/85592376291" className="hover:text-yellow-400 transition-colors">+855 92-376-291</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <a href="https://maps.app.goo.gl/d1KjJrLn2qFjyw7c6" className="hover:text-yellow-400 transition-colors">View on Maps</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-cinzel">Poipet, Cambodia 🇰🇭</h4>
                <div className="text-gray-400 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/85581238043" className="hover:text-yellow-400 transition-colors">+855 81-238-043</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/85561741946" className="hover:text-yellow-400 transition-colors">+855 61-741-946</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <a href="https://maps.app.goo.gl/d1KjJrLn2qFjyw7c6" className="hover:text-yellow-400 transition-colors">View on Maps</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Center */}
          <div className="text-center">
            <img 
              src="https://ik.imagekit.io/omagnaink/omagnaink-logo2025-transparant.png" 
              alt="Omagna Ink Studio"
              className="h-24 w-auto mx-auto mb-6 filter invert opacity-50"
            />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-500 font-cinzel">{t.footer.social[language]}</h3>
            <div className="space-y-3">
              <a href="https://omagna.ink" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                <Globe className="w-6 h-6" />
                <span>Website</span>
              </a>
              <a href="https://instagram.com/omagna.ink" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
              <a href="https://tiktok.com/@omagna.ink" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
              <a href="https://facebook.com/omagnainkstudio" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
                <span>Facebook</span>
              </a>
              <a href="https://youtube.com/@omagnaink" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="w-6 h-6" />
                <span>YouTube</span>
              </a>
              <div className="pt-2">
                <p className="text-sm text-gray-500 mb-2 font-cinzel">Telegram Channels:</p>
                <div className="space-y-2 text-sm">
                  <a href="https://t.me/omagnainkpoipet" className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors">
                    <Wifi className="w-4 h-4" />
                    <span>Poipet</span>
                  </a>
                  <a href="https://t.me/omagnainkkps" className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors">
                    <Wifi className="w-4 h-4" />
                    <span>KPS</span>
                  </a>
                  <a href="https://t.me/omagnainkgallery" className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors">
                    <Wifi className="w-4 h-4" />
                    <span>Gallery</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className="mt-6">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-yellow-600 hover:border-yellow-500"
              >
                <motion.div
                  animate={{ rotate: darkMode ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </motion.div>
                <span>{darkMode ? (language === 'en' ? 'Light' : 'Terang') : (language === 'en' ? 'Dark' : 'Gelap')}</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 font-cinzel">{t.footer.copyright[language]} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
