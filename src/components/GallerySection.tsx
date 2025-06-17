import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, GalleryImage, BeforeAfterImage } from '../types';
import { translations } from '../data/translations';
import ImageLightbox from './ImageLightbox';

interface GallerySectionProps {
  language: Language;
  sectionsUnlocked: boolean;
  scrollY: number;
  galleryImages: GalleryImage[];
  beforeAfterImages: BeforeAfterImage[];
}

const GallerySection: React.FC<GallerySectionProps> = ({
  language,
  sectionsUnlocked,
  scrollY,
  galleryImages,
  beforeAfterImages
}) => {
  const t = translations;
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {sectionsUnlocked && (
        <motion.section
          id="gallery"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-20 bg-black"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="container mx-auto px-4">
            {/* Before/After Showcase */}
            <div className="mb-20">
              <motion.h2 
                className="text-4xl font-bold text-center mb-12 text-yellow-500 font-cinzel"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {t.gallery.beforeAfter[language]}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {beforeAfterImages.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative overflow-hidden">
                        <motion.img 
                          src={item.before} 
                          alt="Before"
                          className="w-full h-64 object-cover border border-gray-700"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <p className="text-center mt-2 text-gray-400 font-cinzel">
                          {language === 'en' ? 'Before' : 'Sebelum'}
                        </p>
                      </div>
                      <div className="relative overflow-hidden">
                        <motion.img 
                          src={item.after} 
                          alt="After"
                          className="w-full h-64 object-cover border border-gray-700"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <p className="text-center mt-2 text-gray-400 font-cinzel">
                          {language === 'en' ? 'After' : 'Sesudah'}
                        </p>
                      </div>
                    </div>
                    <p className="text-center text-xl font-semibold font-cinzel">{item.caption[language]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Greatest Hits Gallery */}
            <div>
              <motion.h2 
                className="text-4xl font-bold text-center mb-4 text-yellow-500 font-cinzel"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {t.gallery.greatestHits[language]}
              </motion.h2>
              {/* Instagram External Link */}
              <div className="flex justify-center mb-12">
                <a
                  href="https://www.instagram.com/omagna.ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-molten text-yellow-500 hover:text-molten/80 transition-colors border border-molten px-6 py-3 rounded hover:bg-molten hover:text-obsidian"
                >
                  [ VIEW OUR FULL & LIVE GALLERY ON INSTAGRAM ]
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedImageUrl(image.url)}
                    className="group cursor-pointer"
                    style={{ transform: `translateY(${scrollY * 0.1 * (index % 2 === 0 ? 1 : -1)}px)` }}
                  >
                    <div className="relative overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300">
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <h3 className="text-white text-lg font-semibold text-center px-4 font-cinzel">
                          {image.title[language]}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox Modal */}
          <AnimatePresence>
            {selectedImageUrl && (
              <ImageLightbox
                imageUrl={selectedImageUrl}
                isOpen={!!selectedImageUrl}
                onClose={() => setSelectedImageUrl(null)}
              />
            )}
          </AnimatePresence>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default GallerySection;
