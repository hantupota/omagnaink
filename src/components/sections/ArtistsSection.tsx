import React from 'react';
import { artists } from '../../data/omagnaData'; // Impor daftar artis dari 'brankas' kita
import ArtistCard from '../cards/ArtistCard'; // Impor 'cetakan kartu nama' artis

/**
 * Sebuah komponen seksi yang menampilkan grid dari semua seniman tato.
 * Secara dinamis memetakan data seniman dan me-render sebuah ArtistCard untuk masing-masing.
 * Dibuat oleh KOSMARA AI.
 */
const ArtistsSection: React.FC = () => {
  return (
    <section id="artists" className="py-20 bg-black sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">The Coven</h2>
          <p className="mt-2 text-4xl font-serif font-extrabold text-white sm:text-5xl">
            Meet Our Resident Artists
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-300">
            Each artist brings a unique vision and mastery to their craft, ready to translate your story into skin.
          </p>
        </div>

        {/* Grid untuk menampilkan semua kartu artis */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => (
            <ArtistCard 
              key={artist.name} // Kunci unik untuk setiap kartu, penting untuk performa React
              artist={artist} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
