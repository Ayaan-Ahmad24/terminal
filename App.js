const admin = require('firebase-admin');
const serviceAccount = require('./pdf-app-65a58-firebase-adminsdk-22hfo-84732820c6.json');  // Path to your service account JSON file
const quizzes = require('./Quizzes.json');  // Path to your quizzes JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadQuizzes() {
  const batch = db.batch();
  const collectionRef = db.collection('quizzes');

  quizzes.forEach((quiz) => {
    const docRef = collectionRef.doc(quiz.id);
    batch.set(docRef, quiz);
  });

  await batch.commit();
  console.log('Quizzes uploaded successfully!');
}

uploadQuizzes().catch(console.error);
