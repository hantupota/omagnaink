
import React, { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (answer: string) => void;
  language: 'en' | 'id';
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onSubmit, language }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim()) {
      onSubmit(answer.trim());
      setAnswer('');
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={language === 'en' ? 'Share your thoughts...' : 'Bagikan pikiranmu...'}
        className="w-full p-4 bg-black border border-gray-600 focus:border-red-500 text-white text-lg min-h-[120px] resize-none"
        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmit()}
      />
      <button
        onClick={handleSubmit}
        disabled={!answer.trim()}
        className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold transition-colors"
      >
        {language === 'en' ? 'Continue' : 'Lanjutkan'}
      </button>
    </div>
  );
};

export default QuestionInput;
