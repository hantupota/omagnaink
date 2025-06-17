
import React from 'react';
import { motion } from 'framer-motion';
import { StepProps, PathType } from '../../types/aiModal';

interface PathStepProps {
  language: StepProps['language'];
  userName: StepProps['userName'];
  setSelectedPath: StepProps['setSelectedPath'];
  setStep: StepProps['setStep'];
  setCurrentQuestion: StepProps['setCurrentQuestion'];
  setAnswers: StepProps['setAnswers'];
  t: StepProps['t'];
}

const PathStep: React.FC<PathStepProps> = ({ 
  language, 
  userName, 
  setSelectedPath, 
  setStep, 
  setCurrentQuestion, 
  setAnswers, 
  t 
}) => {
  const handlePathSelect = (path: PathType) => {
    setSelectedPath(path);
    setStep('questions');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <motion.div
      key="path"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-center">
        {language === 'en' ? `Choose your path, ${userName}` : `Pilih jalanmu, ${userName}`}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(['pact', 'blueprint', 'resurrection'] as PathType[]).map((path) => (
          <button
            key={path}
            onClick={() => handlePathSelect(path)}
            className="p-6 bg-black border border-gray-600 hover:border-red-500 transition-all duration-300 text-left"
          >
            <h4 className="text-xl font-bold mb-2 text-red-400">
              {path && t.paths[path].title[language]}
            </h4>
            <p className="text-gray-300">
              {path && t.paths[path].desc[language]}
            </p>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default PathStep;
