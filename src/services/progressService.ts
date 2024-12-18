export const saveProgress = async (userId: string, progress: { completedCourses: string[], completedQuizzes: string[] }) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log(`Progress saved for user ${userId}:`, progress);
  return true;
};

export const getProgress = async (userId: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    completedCourses: ['1', '2'],
    completedQuizzes: ['1'],
  };
};

