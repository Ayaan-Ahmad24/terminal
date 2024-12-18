import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigationTypes';
import CourseCard from '../components/CourseCard';
import { fetchCourses } from '../services/courseService';
import { useTheme } from '../context/ThemeContext';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [courses, setCourses] = useState<any[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
    };
    loadCourses();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#F3F4F6' : '#1F2937' }]}>
      <Text style={[styles.title, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>Available Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseCard
            title={item.title}
            description={item.description}
            image={item.image}
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
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 20,
  },
  progressButton: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  progressButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default HomeScreen;

