import React from 'react';
import { motion } from 'framer-motion';
import { Download, XCircle } from 'lucide-react';
import ParticleAnimation from './ParticleAnimation';
import { StepProps, Artist } from '../../types/aiModal';

interface ResultStepProps {
  language: StepProps['language'];
  selectedPath: StepProps['selectedPath'];
  answers: StepProps['answers'];
  showParticles: boolean;
  recommendedArtist: Artist | null;
  onDownload: () => void;
  onClose: StepProps['onClose'];
  t: StepProps['t'];
}

const ResultStep: React.FC<ResultStepProps> = ({
  language,
  selectedPath,
  answers,
  showParticles,
  recommendedArtist,
  onDownload,
  onClose,
  t
}) => {
  const getResultText = () => {
    if (!selectedPath) return '';
    const template = t.result[selectedPath].template[language];
    if (selectedPath === 'pact') {
      return template.replace('{0}', answers[0] || '').replace('{1}', answers[1] || '').replace('{2}', answers[2] || '');
    } else if (selectedPath === 'resurrection') {
      return template.replace('{1}', answers[1] || '');
    } else {
      return template;
    }
  };

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 text-center relative"
    >
      {showParticles && <ParticleAnimation />}
      
      <div id="ritual-result" className="space-y-6 bg-neutral-900 p-6 rounded-lg">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold font-serif text-yellow-400">
            {selectedPath && t.result[selectedPath].title[language]}
          </h3>
          <div className="p-4 bg-black border border-yellow-500/30 text-lg rounded">
            {getResultText()}
          </div>
        </div>

        {recommendedArtist && (
          <div className="space-y-4 border-t border-neutral-700 pt-6">
            <h4 className="text-xl font-bold">
              {language === 'en' ? 'Recommended Artist' : 'Artis yang Disarankan'}
            </h4>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={recommendedArtist.photoUrl}
                alt={recommendedArtist.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/50"
              />
              <div className="text-left">
                <p className="font-bold text-lg text-white">{recommendedArtist.name}</p>
                <p className="text-yellow-400">{recommendedArtist.specialty}</p>
                <a 
                  href={recommendedArtist.whatsappUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 text-sm"
                >
                  {language === 'en' ? 'Chat with' : 'Chat dengan'} {recommendedArtist.name}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={onDownload}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors rounded-lg w-full sm:w-auto"
        >
          <Download className="w-5 h-5" />
          <span>{language === 'en' ? 'Download Image' : 'Unduh Gambar'}</span>
        </button>
        <button
          disabled 
          className="flex items-center space-x-2 px-6 py-3 bg-neutral-600 text-neutral-400 font-bold rounded-lg w-full sm:w-auto cursor-not-allowed"
        >
          <Download className="w-5 h-5" />
          <span>{language === 'en' ? 'Download PDF' : 'Unduh PDF'}</span>
        </button>
      </div>

      <button
        onClick={onClose}
        className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-bold text-xl tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        <XCircle />
        <span>{language === 'en' ? 'Complete the Ritual' : 'Selesaikan Ritual'}</span>
      </button>
    </motion.div>
  );
};

export default ResultStep;
