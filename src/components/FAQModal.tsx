
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, MessageCircle, MapPin } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'id';
}

interface FAQEntry {
  keywords: string[];
  answer: { en: string; id: string };
  actionText?: { en: string; id: string };
  actionUrl?: string;
}

const faqData: FAQEntry[] = [
  {
    keywords: ['aftercare', 'care', 'healing', 'perawatan'],
    answer: {
      en: "Clean gently with unscented soap, apply thin ointment, avoid sun for 2-3 weeks. Keep it moisturized and avoid swimming pools.",
      id: "Bersihkan lembut dengan sabun tanpa pewangi, oleskan salep tipis, hindari matahari 2-3 minggu. Jaga kelembapan dan hindari kolam renang."
    }
  },
  {
    keywords: ['pain', 'hurt', 'nyeri', 'sakit'],
    answer: {
      en: "Pain varies: ribs/spine (8/10), forearm (3/10). Numbing is available for sensitive areas. Want to discuss pain management?",
      id: "Nyeri bervariasi: iga/tulang belakang (8/10), lengan (3/10). Tersedia bius untuk area sensitif. Ingin diskusi manajemen nyeri?"
    },
    actionText: { en: "Chat about pain management", id: "Chat tentang manajemen nyeri" },
    actionUrl: "https://wa.me/6285921896058"
  },
  {
    keywords: ['cost', 'price', 'harga', 'biaya'],
    answer: {
      en: "Pricing starts at 500k IDR for small pieces, 2M+ for sleeves. Consultation is always free. Final price depends on size, complexity, and placement.",
      id: "Harga mulai 500rb untuk ukuran kecil, 2jt+ untuk lengan. Konsultasi selalu gratis. Harga final tergantung ukuran, kompleksitas, dan penempatan."
    },
    actionText: { en: "Get a quote", id: "Dapatkan penawaran" },
    actionUrl: "https://wa.me/6285921896058"
  },
  {
    keywords: ['booking', 'appointment', 'jadwal', 'pesan'],
    answer: {
      en: "We require a 500k IDR deposit to secure your slot. Sessions are typically 2-4 hours. You can book via WhatsApp.",
      id: "Kami memerlukan DP 500rb untuk mengunci jadwal. Sesi biasanya 2-4 jam. Kamu bisa booking via WhatsApp."
    },
    actionText: { en: "Book now", id: "Pesan sekarang" },
    actionUrl: "https://wa.me/6285921896058"
  },
  {
    keywords: ['location', 'where', 'alamat', 'dimana'],
    answer: {
      en: "We have studios in Jakarta (Indonesia), Sihanoukville & Poipet (Cambodia). Each studio is fully equipped with professional tools.",
      id: "Kami punya studio di Jakarta (Indonesia), Sihanoukville & Poipet (Kamboja). Setiap studio dilengkapi peralatan profesional."
    },
    actionText: { en: "View locations", id: "Lihat lokasi" },
    actionUrl: "https://maps.app.goo.gl/d1KjJrLn2qFjyw7c6"
  },
  {
    keywords: ['piercing', 'tindik', 'jewelry', 'perhiasan'],
    answer: {
      en: "Yes! All piercings use professional, sterilized tools and a wide selection of jewelry. Healing time varies by placement.",
      id: "Tentu! Semua tindik menggunakan alat steril profesional dan banyak pilihan perhiasan. Waktu penyembuhan bervariasi per penempatan."
    },
    actionText: { en: "Piercing consultation", id: "Konsultasi tindik" },
    actionUrl: "https://wa.me/6285921896058"
  },
  {
    keywords: ['cover up', 'cover-up', 'menutupi', 'tutup'],
    answer: {
      en: "Cover-ups are our specialty! We can transform old, unwanted tattoos into stunning new designs. Consultation required to assess the old tattoo.",
      id: "Cover-up adalah spesialisasi kami! Kami bisa mengubah tato lama yang tidak diinginkan menjadi desain baru yang menakjubkan. Konsultasi diperlukan untuk menilai tato lama."
    },
    actionText: { en: "Cover-up consultation", id: "Konsultasi cover-up" },
    actionUrl: "https://wa.me/6285921896058"
  },
  {
    keywords: ['style', 'design', 'gaya', 'desain'],
    answer: {
      en: "We specialize in Geometric, Blackwork, Traditional, and Fine Line styles. Each artist has their own specialty and signature style.",
      id: "Kami spesialis dalam gaya Geometris, Blackwork, Tradisional, dan Fine Line. Setiap artis punya spesialisasi dan gaya signature sendiri."
    }
  },
  {
    keywords: ['age', 'umur', 'legal', 'underage'],
    answer: {
      en: "Minimum age is 18 years old with valid ID. For minors (17+), parental consent is required with guardian present during the session.",
      id: "Usia minimum 18 tahun dengan ID valid. Untuk minor (17+), persetujuan orang tua diperlukan dengan wali hadir saat sesi."
    }
  },
  {
    keywords: ['touch up', 'touch-up', 'perbaikan', 'sentuhan'],
    answer: {
      en: "Free touch-ups within 3 months if needed. Proper aftercare is essential for optimal healing. Some designs may need minor adjustments.",
      id: "Touch-up gratis dalam 3 bulan jika diperlukan. Perawatan yang tepat penting untuk penyembuhan optimal. Beberapa desain mungkin perlu penyesuaian kecil."
    }
  }
];

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose, language }) => {
  const [query, setQuery] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState<FAQEntry | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const searchFAQ = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setCurrentAnswer(null);
      setSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const match = faqData.find(entry => 
      entry.keywords.some(keyword => 
        keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())
      )
    );

    if (match) {
      setCurrentAnswer(match);
      setSuggestions([]);
    } else {
      setCurrentAnswer(null);
      // Provide suggestions
      const allKeywords = faqData.flatMap(entry => entry.keywords);
      const matchingSuggestions = allKeywords
        .filter(keyword => keyword.toLowerCase().includes(query))
        .slice(0, 3);
      setSuggestions(matchingSuggestions);
    }
  };

  const handleSearch = () => {
    searchFAQ(query);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    searchFAQ(suggestion);
  };

  const t = {
    title: { en: "Consult the Oracle", id: "Konsultasi Oracle" },
    placeholder: { en: "Ask anything about tattoos, piercing, pricing...", id: "Tanya apa saja tentang tato, tindik, harga..." },
    search: { en: "Ask Oracle", id: "Tanya Oracle" },
    suggestions: { en: "Did you mean:", id: "Maksud Anda:" },
    noAnswer: { 
      en: "The Oracle cannot divine this answer. Contact us directly for personal guidance.", 
      id: "Oracle tidak dapat meramal jawaban ini. Hubungi kami langsung untuk panduan personal." 
    },
    contactUs: { en: "Contact Us", id: "Hubungi Kami" },
    popularQuestions: { en: "Popular Questions", id: "Pertanyaan Populer" }
  };

  const popularQuestions = [
    { en: "How much does a tattoo cost?", id: "Berapa biaya tato?" },
    { en: "Does it hurt?", id: "Apakah sakit?" },
    { en: "How do I care for my tattoo?", id: "Bagaimana merawat tato?" },
    { en: "Can you cover up my old tattoo?", id: "Bisa cover up tato lama?" },
    { en: "Where are your studios?", id: "Dimana studio kalian?" }
  ];

  if (!isOpen) return null;

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
          <h2 className="text-2xl font-bold text-red-500">{t.title[language]}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-white space-y-6">
          {/* Search Input */}
          <div className="flex space-x-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.placeholder[language]}
              className="flex-1 p-4 bg-black border border-gray-600 focus:border-red-500 text-white text-lg rounded-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>{t.search[language]}</span>
            </button>
          </div>

          {/* Answer */}
          <AnimatePresence mode="wait">
            {currentAnswer && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-black border border-red-500 p-6 rounded-lg space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">O</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed">{currentAnswer.answer[language]}</p>
                    {currentAnswer.actionText && currentAnswer.actionUrl && (
                      <a
                        href={currentAnswer.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{currentAnswer.actionText[language]}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {query && !currentAnswer && suggestions.length === 0 && (
              <motion.div
                key="no-answer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-800 border border-gray-600 p-6 rounded-lg text-center space-y-4"
              >
                <p className="text-lg">{t.noAnswer[language]}</p>
                <a
                  href="https://wa.me/6285921896058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.contactUs[language]}</span>
                </a>
              </motion.div>
            )}

            {suggestions.length > 0 && (
              <motion.div
                key="suggestions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-3"
              >
                <p className="text-gray-400">{t.suggestions[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Popular Questions */}
          {!query && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-400">{t.popularQuestions[language]}</h3>
              <div className="grid grid-cols-1 gap-2">
                {popularQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(question[language]);
                      searchFAQ(question[language]);
                    }}
                    className="text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-600 hover:border-gray-500"
                  >
                    {question[language]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQModal;
