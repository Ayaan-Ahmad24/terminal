import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useProgress } from "../context/ProgressContext";
import ProgressBar from "../components/ProgressBar";

const ProgressScreen: React.FC = () => {
  const { progress } = useProgress();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      <Text style={styles.subtitle}>Completed Courses:</Text>
      <FlatList
        data={progress.completedCourses}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <Text style={styles.subtitle}>Completed Quizzes:</Text>
      <FlatList
        data={progress.completedQuizzes}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <ProgressBar progress={0.5} /> {/* Example progress */}
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
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProgressScreen;
