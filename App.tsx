import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { QuizProvider } from './src/context/QuizContext';
import { ProgressProvider } from './src/context/ProgressContext';
import AppNavigator from './src/navigation/AppNavigator';
import app from './src/config/firebase';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <QuizProvider>
          <ProgressProvider>
            <AppNavigator />
          </ProgressProvider>
        </QuizProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

