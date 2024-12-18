// export type RootStackParamList = {
//     Auth: undefined;
//     Home: undefined;
//     CourseDetail: { courseId: string };
//     Quiz: { courseId: string };
//     Progress: undefined;
//   };
  
//   export type AuthStackParamList = {
//     Login: undefined;
//     Register: undefined;
//   };
  
//   // You can add more specific types for navigation if needed
//   export type HomeScreenNavigationProp = {
//     navigate: (screen: keyof RootStackParamList, params?: any) => void;
//   };
//   export type CourseDetailNavigationProp = {
//     navigate: (screen: keyof RootStackParamList, params?: any) => void;
//   };
  
//   export type CourseDetailScreenRouteProp = {
//     params: { courseId: string };
//   };
  
//   export type QuizScreenRouteProp = {
//     params: { courseId: string };
//   };
  
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
  export type HomeScreenNavigationProp = {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
  };
  
  // Navigation Props for Course Detail Screen
  export type CourseDetailNavigationProp = {
    navigate: (screen: keyof RootStackParamList, params?: any) => void;
  };
  
  // Specific Route Prop for CourseDetail Screen
  export type CourseDetailScreenRouteProp = {
    navigate(arg0: string, arg1: { courseId: string; }): void;
    params: { courseId: string };
  };
  
  // Specific Route Prop for Quiz Screen
  export type QuizScreenRouteProp = {
    params: { courseId: string };
  };
  