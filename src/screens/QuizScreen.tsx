import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList, QuizScreenRouteProp } from '../types/navigationTypes';
import { useQuiz } from '../context/QuizContext';
import { useProgress } from '../context/ProgressContext';

const QuizScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Quiz'>>();
  const { courseId } = route.params as { courseId: string };
  const { currentQuiz, setCurrentQuiz } = useQuiz();
  const { updateProgress } = useProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Mock quiz data
  const mockQuiz = {
    id: '1',
    title: 'Sample Quiz',
    questions: ['Question 1', 'Question 2', 'Question 3'],
  };

  React.useEffect(() => {
    setCurrentQuiz(mockQuiz);
  }, []);

  const handleAnswer = () => {
    if (currentQuestionIndex < currentQuiz!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      updateProgress({ completedQuizzes: [courseId] });
    }
  };

  if (!currentQuiz) {
    return <Text>Loading quiz...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentQuiz.title}</Text>
      <Text style={styles.question}>
        {currentQuiz.questions[currentQuestionIndex]}
      </Text>
      <TouchableOpacity style={styles.answerButton} onPress={handleAnswer}>
        <Text style={styles.answerButtonText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  answerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default QuizScreen;

