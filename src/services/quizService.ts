import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const fetchQuizByCourseId = async (courseId: string) => {
  try {
    const quizzesRef = collection(db, 'quizzes');
    const q = query(quizzesRef, where('courseId', '==', courseId));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      throw new Error('No quiz found for this course');
    }

    const quizDoc = querySnapshot.docs[0];
    return { id: quizDoc.id, ...quizDoc.data() };
  } catch (error) {
    console.error('Error fetching quiz:', error);
    throw error;
  }
};

