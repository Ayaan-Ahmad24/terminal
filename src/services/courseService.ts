export const getCourses = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    { id: '1', title: 'Introduction to React Native' },
    { id: '2', title: 'Advanced TypeScript' },
    { id: '3', title: 'State Management in React' },
  ];
};

export const getCourseDetails = async (courseId: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    id: courseId,
    title: `Course ${courseId}`,
    description: 'This is a sample course description.',
  };
};

