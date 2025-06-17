
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Artist } from '../types';
import { translations } from '../data/translations';

interface ArtistsSectionProps {
  language: Language;
  sectionsUnlocked: boolean;
  artists: Artist[];
  handleArtistClick: (artist: Artist) => void;
}

const ArtistsSection: React.FC<ArtistsSectionProps> = ({
  language,
  sectionsUnlocked,
  artists,
  handleArtistClick
}) => {
  const t = translations;

  return (
    <AnimatePresence>
      {sectionsUnlocked && (
        <motion.section
          id="artists"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gray-900"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl font-bold mb-4 text-yellow-500 font-cinzel"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {t.artists.title[language]}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.artists.subtitle[language]}
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleArtistClick(artist)}
                  className="bg-black border border-gray-700 hover:border-yellow-500 p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  <motion.img 
                    src={artist.photo} 
                    alt={artist.name}
                    className="w-full h-64 object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <h3 className="text-2xl font-bold mb-2 font-cinzel">{artist.name}</h3>
                  <p className="text-yellow-400">{artist.specialty[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ArtistsSection;
