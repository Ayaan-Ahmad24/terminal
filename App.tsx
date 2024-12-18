import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { QuizProvider } from './src/context/QuizContext';
import { ProgressProvider } from './src/context/ProgressContext';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <QuizProvider>
            <ProgressProvider>
              <AppNavigator />
            </ProgressProvider>
          </QuizProvider>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

