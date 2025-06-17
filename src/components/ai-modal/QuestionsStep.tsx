
import React from 'react';
import { motion } from 'framer-motion';
import QuestionInput from './QuestionInput';
import { StepProps } from '../../types/aiModal';

interface QuestionsStepProps {
  language: StepProps['language'];
  selectedPath: StepProps['selectedPath'];
  answers: StepProps['answers'];
  setAnswers: StepProps['setAnswers'];
  currentQuestion: StepProps['currentQuestion'];
  setCurrentQuestion: StepProps['setCurrentQuestion'];
  setStep: StepProps['setStep'];
  t: StepProps['t'];
}

const QuestionsStep: React.FC<QuestionsStepProps> = ({
  language,
  selectedPath,
  answers,
  setAnswers,
  currentQuestion,
  setCurrentQuestion,
  setStep,
  t
}) => {
  const getQuestions = () => {
    if (!selectedPath) return [];
    return t.questions[selectedPath];
  };

  const handleAnswerSubmit = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < getQuestions().length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('result');
    }
  };

  return (
    <motion.div
      key="questions"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <div className="text-sm text-gray-400 mb-2">
          {language === 'en' ? 'Question' : 'Pertanyaan'} {currentQuestion + 1} / {getQuestions().length}
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-red-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / getQuestions().length) * 100}%` }}
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-center">
        {getQuestions()[currentQuestion]?.[language]}
      </h3>
      <QuestionInput
        onSubmit={handleAnswerSubmit}
        language={language}
      />
    </motion.div>
  );
};

export default QuestionsStep;
