
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import { Language, Artist } from '../types';
import { artists } from '../data/artists';
import { galleryImages, beforeAfterImages } from '../data/gallery';

// Components
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ArtistsSection from '../components/ArtistsSection';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';

// Lazy load modals
const AIModal = lazy(() => import('../components/AIModal'));
const ArtistModal = lazy(() => import('../components/ArtistModal'));
const FAQModal = lazy(() => import('../components/FAQModal'));
const ImageLightbox = lazy(() => import('../components/ImageLightbox'));

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sectionsUnlocked, setSectionsUnlocked] = useState(false);
  const [showFAB, setShowFAB] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleAIComplete = () => {
    setSectionsUnlocked(true);
    setShowFAB(true);
    setShowAIModal(false);
  };

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`} style={{ scrollSnapType: 'y mandatory' }}>
      <div className="bg-black text-white min-h-screen">
        {/* Navigation */}
        <Navigation
          language={language}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          toggleLanguage={toggleLanguage}
          scrollToSection={scrollToSection}
        />

        {/* Hero Section */}
        <HeroSection
          language={language}
          scrollY={scrollY}
          setShowAIModal={setShowAIModal}
        />

        {/* Artists Section */}
        <ArtistsSection
          language={language}
          sectionsUnlocked={sectionsUnlocked}
          artists={artists}
          handleArtistClick={handleArtistClick}
        />

        {/* Gallery Section */}
        <GallerySection
          language={language}
          sectionsUnlocked={sectionsUnlocked}
          scrollY={scrollY}
          galleryImages={galleryImages}
          beforeAfterImages={beforeAfterImages}
          handleImageClick={handleImageClick}
        />

        {/* FAQ Section */}
        <FAQSection
          language={language}
          setShowFAQModal={setShowFAQModal}
        />

        {/* Footer */}
        <Footer
          language={language}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Floating Action Button */}
        <FloatingActionButton
          showFAB={showFAB}
          setShowFAQModal={setShowFAQModal}
        />

        {/* Modals */}
        <Suspense fallback={<div>Loading...</div>}>
          {showAIModal && createPortal(
            <AIModal 
              isOpen={showAIModal} 
              onClose={handleAIComplete}
              language={language}
              artists={artists}
            />, 
            document.body
          )}
          
          {selectedArtist && createPortal(
            <ArtistModal 
              artist={selectedArtist}
              isOpen={!!selectedArtist}
              onClose={() => setSelectedArtist(null)}
              language={language}
            />, 
            document.body
          )}
          
          {showFAQModal && createPortal(
            <FAQModal 
              isOpen={showFAQModal}
              onClose={() => setShowFAQModal(false)}
              language={language}
            />, 
            document.body
          )}
          
          {selectedImage && createPortal(
            <ImageLightbox 
              imageUrl={selectedImage}
              isOpen={!!selectedImage}
              onClose={() => setSelectedImage(null)}
            />, 
            document.body
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
