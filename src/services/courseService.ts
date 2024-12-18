import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from'../config/firebase';

export const fetchCourses = async () => {
  try {
    const coursesCollection = collection(db, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const courses = coursesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

export const getCourseDetails = async (courseId: string) => {
  try {
    const courseDoc = doc(db, 'courses', courseId);
    const courseSnapshot = await getDoc(courseDoc);
    if (courseSnapshot.exists()) {
      return { id: courseSnapshot.id, ...courseSnapshot.data() };
    } else {
      throw new Error('Course not found');
    }
  } catch (error) {
    console.error('Error fetching course details:', error);
    throw error;
  }
};

