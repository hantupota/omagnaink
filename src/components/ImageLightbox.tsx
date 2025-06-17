import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageLightboxProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ imageUrl, isOpen, onClose }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  // ESC key support
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[120] p-2 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors shadow-lg"
        aria-label="Close"
        style={{ border: '2px solid white' }}
      >
        <X className="w-7 h-7" />
      </button>

      {/* Zoom Button */}
      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute top-4 right-16 z-[120] p-2 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors shadow-lg"
        aria-label={isZoomed ? "Zoom out" : "Zoom in"}
      >
        {isZoomed ? <ZoomOut className="w-7 h-7" /> : <ZoomIn className="w-7 h-7" />}
      </button>

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-full max-h-full"
        onClick={onClose}
      >
        <img
          src={imageUrl}
          alt="Gallery Image"
          className={`max-w-full max-h-full object-contain cursor-pointer transition-transform duration-300 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          onClick={e => e.stopPropagation()}
        />
      </motion.div>

      {/* Background Click to Close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close"
      />
    </div>
  );
};

export default ImageLightbox;
