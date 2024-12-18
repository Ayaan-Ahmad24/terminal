import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigationTypes';
import { useQuiz } from '../context/QuizContext';
import { useProgress } from '../context/ProgressContext';
import { fetchQuizByCourseId } from '../services/quizService';
import { useTheme } from '../context/ThemeContext';

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

const QuizScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Quiz'>>();
  const { courseId } = route.params;
  const { updateProgress } = useProgress();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Fetch the quiz based on courseId
  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const fetchedQuiz = await fetchQuizByCourseId(courseId);
        console.log('Fetched Quiz:', fetchedQuiz); // Debugging log
        if (fetchedQuiz && fetchedQuiz.id && Array.isArray((fetchedQuiz as Quiz).questions)) {
          setQuiz(fetchedQuiz);
        } else {
          console.error('Invalid quiz structure:', fetchedQuiz);
        }
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadQuiz();
  }, [courseId]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (currentQuestionIndex < quiz!.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        // Quiz completed
        setQuizCompleted(true);
        updateProgress({ completedQuizzes: [courseId] });
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  if (isLoading) {
    return (
      <View style={[styles.container, { backgroundColor: theme === 'light' ? '#F3F4F6' : '#1F2937' }]}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (!quiz) {
    return (
      <View style={[styles.container, { backgroundColor: theme === 'light' ? '#F3F4F6' : '#1F2937' }]}>
        <Text style={[styles.errorText, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>Failed to load quiz.</Text>
      </View>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#F3F4F6' : '#1F2937' }]}>
      {quizCompleted ? (
        <View style={styles.completedContainer}>
          <Text style={[styles.title, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>Quiz Completed!</Text>
          <Text style={[styles.completedText, { color: theme === 'light' ? '#4B5563' : '#D1D5DB' }]}>
            You've completed the quiz. Congratulations!
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryButtonText}>Retry Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={[styles.title, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>{quiz.title}</Text>
          <Text style={[styles.questionNumber, { color: theme === 'light' ? '#4B5563' : '#D1D5DB' }]}>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </Text>
          <View style={styles.questionContainer}>
            <Text style={[styles.question, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  { backgroundColor: selectedAnswer === index ? '#3B82F6' : theme === 'light' ? '#FFFFFF' : '#374151' }
                ]}
                onPress={() => handleAnswer(index)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: selectedAnswer === index ? '#FFFFFF' : theme === 'light' ? '#111827' : '#F9FAFB' }
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.nextButton, { opacity: selectedAnswer === null ? 0.5 : 1 }]}
            onPress={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>
        </>
      )}
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
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 20,
  },
  questionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  nextButton: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  errorText: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedText: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default QuizScreen;
