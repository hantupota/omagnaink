
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { AIModalProps, PathType, StepType } from '../types/aiModal';
import WelcomeStep from './ai-modal/WelcomeStep';
import NameStep from './ai-modal/NameStep';
import PathStep from './ai-modal/PathStep';
import QuestionsStep from './ai-modal/QuestionsStep';
import ResultStep from './ai-modal/ResultStep';

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, language, artists }) => {
  const [step, setStep] = useState<StepType>('welcome');
  const [userName, setUserName] = useState('');
  const [selectedPath, setSelectedPath] = useState<PathType>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [recommendedArtist, setRecommendedArtist] = useState<any>(null);

  const t = {
    welcome: {
      title: { en: "Welcome to the Crossroads", id: "Selamat Datang di Persimpangan" },
      subtitle: { en: "Choose your destiny...", id: "Pilih takdirmu..." }
    },
    name: {
      question: { en: "What shall we call you, wanderer?", id: "Apa yang harus kami panggil, pengembara?" },
      placeholder: { en: "Enter your name", id: "Masukkan nama Anda" },
      continue: { en: "Continue", id: "Lanjutkan" }
    },
    paths: {
      pact: {
        title: { en: "The Pact", id: "Perjanjian" },
        desc: { en: "Forge a ritual of transformation", id: "Bentuk ritual transformasi" }
      },
      blueprint: {
        title: { en: "First Ink Playbook", id: "Panduan Tinta Pertama" },
        desc: { en: "Chart your artistic journey", id: "Petakan perjalanan artistikmu" }
      },
      resurrection: {
        title: { en: "Resurrection", id: "Kebangkitan" },
        desc: { en: "Transform old scars into new legends", id: "Ubah bekas lama menjadi legenda baru" }
      }
    },
    questions: {
      pact: [
        { en: "What will you DESTROY?", id: "Apa yang akan kamu HANCURKAN?" },
        { en: "What will you AWAKEN?", id: "Apa yang akan kamu BANGKITKAN?" },
        { en: "Name the SYMBOL.", id: "Sebutkan SIMBOLNYA." }
      ],
      blueprint: [
        { en: "What's your life's genre?", id: "Apa genre hidupmu?" },
        { en: "What's your element?", id: "Apa elemenmu?" }
      ],
      resurrection: [
        { en: "What new story begins?", id: "Cerita baru apa yang dimulai?" },
        { en: "What's its core energy?", id: "Apa energi utamanya?" }
      ]
    },
    result: {
      pact: {
        title: { en: "PROCLAMATION", id: "PROKLAMASI" },
        template: { 
          en: "This soul shall DESTROY {0}, AWAKEN {1}, symbolized by {2}", 
          id: "Jiwa ini akan MENGHANCURKAN {0}, MEMBANGKITKAN {1}, disimbolkan oleh {2}" 
        }
      },
      blueprint: {
        title: { en: "ARTISTIC SOUL", id: "JIWA ARTISTIK" },
        template: { 
          en: "We recommend Geometric or Blackwork style. Didik is perfect for you.", 
          id: "Kami sarankan gaya Geometris atau Blackwork. Didik cocok untukmu." 
        }
      },
      resurrection: {
        title: { en: "NEW LEGEND", id: "LEGENDA BARU" },
        template: { 
          en: "Your new legend is {1}. See old scars become masterpieces.", 
          id: "Legenda barumu adalah {1}. Lihat bekas lama menjadi karya baru." 
        }
      }
    }
  };

  useEffect(() => {
    if (step === 'result') {
      setShowParticles(true);
      // Recommend artist based on path
      if (selectedPath === 'blueprint') {
        setRecommendedArtist(artists.find(a => a.name === 'Didik') || artists[0]);
      } else if (selectedPath === 'pact') {
        setRecommendedArtist(artists.find(a => a.name === 'Cuyo') || artists[1]);
      } else {
        setRecommendedArtist(artists.find(a => a.name === 'Magna') || artists[2]);
      }
    }
  }, [step, selectedPath, artists]);

  const downloadResult = (format: 'image' | 'pdf') => {
    // Simulate download
    const element = document.createElement('a');
    const filename = `omagna-${selectedPath}-${userName}.${format === 'image' ? 'png' : 'pdf'}`;
    element.download = filename;
    element.click();
  };

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
          <h2 className="text-2xl font-bold text-red-500">
            {step === 'welcome' && t.welcome.title[language]}
            {step === 'name' && (language === 'en' ? 'Identity' : 'Identitas')}
            {step === 'path' && (language === 'en' ? 'Choose Your Path' : 'Pilih Jalanmu')}
            {step === 'questions' && selectedPath && t.paths[selectedPath].title[language]}
            {step === 'result' && selectedPath && t.result[selectedPath].title[language]}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-white">
          <AnimatePresence mode="wait">
            {step === 'welcome' && (
              <WelcomeStep
                language={language}
                setStep={setStep}
                t={t}
              />
            )}

            {step === 'name' && (
              <NameStep
                language={language}
                userName={userName}
                setUserName={setUserName}
                setStep={setStep}
                t={t}
              />
            )}

            {step === 'path' && (
              <PathStep
                language={language}
                userName={userName}
                setSelectedPath={setSelectedPath}
                setStep={setStep}
                setCurrentQuestion={setCurrentQuestion}
                setAnswers={setAnswers}
                t={t}
              />
            )}

            {step === 'questions' && (
              <QuestionsStep
                language={language}
                selectedPath={selectedPath}
                answers={answers}
                setAnswers={setAnswers}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                setStep={setStep}
                t={t}
              />
            )}

            {step === 'result' && (
              <ResultStep
                language={language}
                selectedPath={selectedPath}
                answers={answers}
                showParticles={showParticles}
                recommendedArtist={recommendedArtist}
                onDownload={downloadResult}
                onClose={onClose}
                t={t}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AIModal;
