import React from 'react';

// Menentukan properti (props) yang bisa diterima oleh komponen ini
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string; // className bersifat opsional
  width?: number;    // width bersifat opsional
  height?: number;   // height bersifat opsional
}

/**
 * Komponen gambar cerdas yang menerapkan praktik terbaik untuk performa.
 * Menggunakan `loading="lazy"` untuk menunda pemuatan gambar di luar layar
 * dan `decoding="async"` untuk mencegah pemblokiran saat rendering.
 * Dibuat oleh KOSMARA AI.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      // Menunda pemuatan gambar yang tidak terlihat di layar
      loading="lazy"
      // Memproses gambar secara asinkron agar tidak mengganggu rendering halaman
      decoding="async"
    />
  );
};

export default OptimizedImage;
