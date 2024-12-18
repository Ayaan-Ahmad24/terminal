import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigationTypes';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: '1', title: 'Introduction to React Native' },
  { id: '2', title: 'Advanced TypeScript' },
  { id: '3', title: 'State Management in React' },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseCard
            title={item.title}
            onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.progressButton}
        onPress={() => navigation.navigate('Progress')}
      >
        <Text style={styles.progressButtonText}>View Progress</Text>
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
  progressButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  progressButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;

