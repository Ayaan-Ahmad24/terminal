import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  onPress: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme === 'light' ? '#FFFFFF' : '#374151' }]} 
      onPress={onPress}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme === 'light' ? '#111827' : '#F9FAFB' }]}>{title}</Text>
        <Text style={[styles.description, { color: theme === 'light' ? '#4B5563' : '#D1D5DB' }]}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
});

export default CourseCard;

