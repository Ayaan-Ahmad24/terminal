import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  CourseDetail: { courseId: string };
  Quiz: { courseId: string };
  Progress: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

// Navigation Props for Home Screen
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type AuthScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login' | 'Register'>;

// Navigation Props for Course Detail Screen
export type CourseDetailNavigationProp = {
  navigate: (screen: keyof RootStackParamList, params?: any) => void;
};

// Specific Route Prop for CourseDetail Screen
export type CourseDetailScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

// Specific Route Prop for Quiz Screen
export type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;