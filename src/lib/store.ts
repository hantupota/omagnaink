import { create } from 'zustand';
import { Artist } from '../types'; // Asumsi tipe Artist ada di sini

// Definisikan 'isi' dari lemari kita
interface AppState {
  // State: data yang disimpan
  selectedArtist: Artist | null;
  
  // Actions: fungsi untuk mengubah data
  selectArtist: (artist: Artist) => void;
  closeArtistModal: () => void;
}

// Buat 'lemari'-nya
export const useStore = create<AppState>((set) => ({
  // Nilai awal
  selectedArtist: null,
  
  // Fungsi untuk memilih artis (membuka modal)
  selectArtist: (artist) => set({ selectedArtist: artist }),
  
  // Fungsi untuk menutup modal
  closeArtistModal: () => set({ selectedArtist: null }),
}));
