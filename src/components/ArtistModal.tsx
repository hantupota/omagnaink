
import React from 'react';
import { motion } from 'framer-motion';
import { X, MessageCircle, Instagram } from 'lucide-react';

interface Artist {
  name: string;
  specialty: { en: string; id: string };
  bio: { en: string; id: string };
  photo: string;
  whatsapp: string;
}

interface ArtistModalProps {
  artist: Artist;
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'id';
}

const ArtistModal: React.FC<ArtistModalProps> = ({ artist, isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const getInstagramUrl = (artistName: string) => {
    // Generate Instagram URL based on artist name
    return `https://instagram.com/${artistName.toLowerCase()}_omagna`;
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 border border-red-500 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-red-500">{artist.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Artist Photo */}
            <div>
              <img 
                src={artist.photo} 
                alt={artist.name}
                className="w-full h-96 object-cover rounded-lg border border-gray-700"
              />
            </div>

            {/* Artist Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{artist.name}</h3>
                <p className="text-xl text-red-400 mb-4">{artist.specialty[language]}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Biography' : 'Biografi'}
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {artist.bio[language]}
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-4">
                <a
                  href={artist.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>
                    {language === 'en' 
                      ? `Chat with ${artist.name} on WhatsApp` 
                      : `Chat dengan ${artist.name} di WhatsApp`}
                  </span>
                </a>

                <a
                  href={getInstagramUrl(artist.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  <span>
                    {language === 'en' 
                      ? `Follow ${artist.name} on Instagram` 
                      : `Ikuti ${artist.name} di Instagram`}
                  </span>
                </a>
              </div>

              {/* Specialty Details */}
              <div className="bg-black border border-gray-700 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-red-400">
                  {language === 'en' ? 'Specialty' : 'Spesialisasi'}
                </h5>
                <p className="text-gray-300">{artist.specialty[language]}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-center text-gray-400">
              {language === 'en' 
                ? 'Book a consultation to discuss your vision and get a personalized quote.'
                : 'Pesan konsultasi untuk mendiskusikan visi Anda dan mendapatkan penawaran yang dipersonalisasi.'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistModal;
