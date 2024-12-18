import React, { createContext, useState, useContext } from 'react';

type Progress = {
  completedCourses: string[];
  completedQuizzes: string[];
};

type ProgressContextType = {
  progress: Progress;
  updateProgress: (newProgress: Partial<Progress>) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>({
    completedCourses: [],
    completedQuizzes: [],
  });

  const updateProgress = (newProgress: Partial<Progress>) => {
    setProgress((prev) => ({ ...prev, ...newProgress }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

