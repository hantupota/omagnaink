
import React from 'react';
import { motion } from 'framer-motion';
import { StepProps } from '../../types/aiModal';

interface WelcomeStepProps {
  language: StepProps['language'];
  setStep: StepProps['setStep'];
  t: StepProps['t'];
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ language, setStep, t }) => {
  return (
    <motion.div
      key="welcome"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">{t.welcome.title[language]}</h3>
        <p className="text-xl text-gray-300">{t.welcome.subtitle[language]}</p>
      </div>
      <button
        onClick={() => setStep('name')}
        className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl tracking-wider border-2 border-red-600 hover:border-red-500 transition-all duration-300"
      >
        {language === 'en' ? 'Enter' : 'Masuk'}
      </button>
    </motion.div>
  );
};

export default WelcomeStep;
