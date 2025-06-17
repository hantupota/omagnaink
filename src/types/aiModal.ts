
export type PathType = 'pact' | 'blueprint' | 'resurrection' | null;

export type StepType = 'welcome' | 'name' | 'path' | 'questions' | 'result';

export interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'id';
  artists: Array<{
    name: string;
    specialty: { en: string; id: string };
    bio: { en: string; id: string };
    photo: string;
    whatsapp: string;
  }>;
}

export interface StepProps {
  language: 'en' | 'id';
  userName: string;
  setUserName: (name: string) => void;
  selectedPath: PathType;
  setSelectedPath: (path: PathType) => void;
  answers: string[];
  setAnswers: (answers: string[]) => void;
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  step: StepType;
  setStep: (step: StepType) => void;
  recommendedArtist: any;
  onDownload: (format: 'image' | 'pdf') => void;
  onClose: () => void;
  t: any;
}
