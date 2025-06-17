import React from 'react';
import OptimizedImage from '../ui/OptimizedImage'; // Impor komponen gambar cerdas kita

// Menentukan 'cetakan' atau 'blueprint' untuk data yang akan diterima komponen ini
interface ArtistCardProps {
  artist: {
    name: string;
    specialty: string;
    // Kita akan gunakan bio bahasa Inggris untuk saat ini.
    // Implementasi bilingual (EN/ID) akan kita lakukan nanti.
    bio_en: string; 
    photoUrl: string;
    whatsappUrl: string;
  };
}

/**
 * Sebuah komponen kartu yang bisa digunakan ulang untuk menampilkan profil artis.
 * Ia menerima data artis sebagai 'prop' dan menampilkannya dengan gaya yang konsisten.
 * Dibuat oleh KOSMARA AI.
 */
const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-yellow-400/20 hover:border-yellow-400/50">
      {/* Bagian untuk foto artis, dengan rasio aspek 4:5 */}
      <div className="aspect-[4/5] w-full bg-neutral-950">
        <OptimizedImage
          src={artist.photoUrl}
          alt={`Portrait of ${artist.name}, Omagna Ink tattoo artist`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Bagian untuk teks informasi artis */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-white">{artist.name}</h3>
        <p className="text-yellow-400 text-sm tracking-widest uppercase">{artist.specialty}</p>
        <p className="text-neutral-300 mt-3 text-base">
          {artist.bio_en}
        </p>
        <a
          href={artist.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-neutral-900 font-bold tracking-wider uppercase rounded-md transition-transform duration-200 hover:scale-105 hover:bg-yellow-300"
        >
          Consult
        </a>
      </div>
    </div>
  );
};

export default ArtistCard;
