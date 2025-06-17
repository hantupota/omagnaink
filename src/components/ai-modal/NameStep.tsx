
import React from 'react';
import { motion } from 'framer-motion';
import { StepProps } from '../../types/aiModal';

interface NameStepProps {
  language: StepProps['language'];
  userName: StepProps['userName'];
  setUserName: StepProps['setUserName'];
  setStep: StepProps['setStep'];
  t: StepProps['t'];
}

const NameStep: React.FC<NameStepProps> = ({ language, userName, setUserName, setStep, t }) => {
  const handleNameSubmit = () => {
    if (userName.trim()) {
      setStep('path');
    }
  };

  return (
    <motion.div
      key="name"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-center">{t.name.question[language]}</h3>
      <div className="space-y-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={t.name.placeholder[language]}
          className="w-full p-4 bg-black border border-gray-600 focus:border-red-500 text-white text-lg"
          onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
        />
        <button
          onClick={handleNameSubmit}
          disabled={!userName.trim()}
          className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold transition-colors"
        >
          {t.name.continue[language]}
        </button>
      </div>
    </motion.div>
  );
};

export default NameStep;
