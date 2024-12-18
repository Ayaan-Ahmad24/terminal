import React, { createContext, useState, useContext } from 'react';

type Quiz = {
  id: string;
  title: string;
  questions: string[];
};

type QuizContextType = {
  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz) => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);

  return (
    <QuizContext.Provider value={{ currentQuiz, setCurrentQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

