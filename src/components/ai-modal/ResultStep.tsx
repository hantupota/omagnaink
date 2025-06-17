
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ParticleAnimation from './ParticleAnimation';
import { StepProps } from '../../types/aiModal';

interface ResultStepProps {
  language: StepProps['language'];
  selectedPath: StepProps['selectedPath'];
  answers: StepProps['answers'];
  showParticles: boolean;
  recommendedArtist: StepProps['recommendedArtist'];
  onDownload: StepProps['onDownload'];
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
      
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-red-500">
          {selectedPath && t.result[selectedPath].title[language]}
        </h3>
        <div className="p-6 bg-black border border-red-500 text-lg">
          {getResultText()}
        </div>
      </div>

      {recommendedArtist && (
        <div className="space-y-4">
          <h4 className="text-xl font-bold">
            {language === 'en' ? 'Recommended Artist' : 'Artis yang Disarankan'}
          </h4>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={recommendedArtist.photo} 
              alt={recommendedArtist.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold">{recommendedArtist.name}</p>
              <p className="text-red-400">{recommendedArtist.specialty[language]}</p>
              <a 
                href={recommendedArtist.whatsapp}
                className="text-green-400 hover:text-green-300 text-sm"
              >
                {language === 'en' ? 'Chat with' : 'Chat dengan'} {recommendedArtist.name}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onDownload('image')}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>{language === 'en' ? 'Download Image' : 'Unduh Gambar'}</span>
        </button>
        <button
          onClick={() => onDownload('pdf')}
          className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>{language === 'en' ? 'Download PDF' : 'Unduh PDF'}</span>
        </button>
      </div>

      <button
        onClick={onClose}
        className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl tracking-wider border-2 border-red-600 hover:border-red-500 transition-all duration-300"
      >
        {language === 'en' ? 'Complete the Ritual' : 'Selesaikan Ritual'}
      </button>
    </motion.div>
  );
};

export default ResultStep;
