import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList, CourseDetailScreenRouteProp } from '../types/navigationTypes';

const CourseDetailScreen: React.FC = () => {
  const navigation = useNavigation<CourseDetailScreenRouteProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'CourseDetail'>>();
  const { courseId } = route.params as { courseId: string };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Details</Text>
      <Text style={styles.courseId}>Course ID: {courseId}</Text>
      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => navigation.navigate('Quiz', { courseId })}
      >
        <Text style={styles.quizButtonText}>Start Quiz</Text>
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
  courseId: {
    fontSize: 18,
    marginBottom: 20,
  },
  quizButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  quizButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CourseDetailScreen;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { RootStackParamList } from '../types/navigationTypes';

// const CourseDetailScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { courseId } = route.params as { courseId: string };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Course Details</Text>
//       <Text style={styles.courseId}>Course ID: {courseId}</Text>
//       <TouchableOpacity
//         style={styles.quizButton}
//         onPress={() => navigation.navigate('Quiz', { courseId })}
//       >
//         <Text style={styles.quizButtonText}>Start Quiz</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   courseId: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   quizButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   quizButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default CourseDetailScreen;
