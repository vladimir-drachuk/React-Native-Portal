import { collection, getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import { initializeFirebaseApp } from '@/firebase';

const app = initializeFirebaseApp();
const db = getFirestore(app);

export const dbService = {
  getById: async (collectionName: string, id: string) => {
    const userRef = collection(db, collectionName);
    const docRef = doc(userRef, id);

    const document = await getDoc(docRef);
  
    return document.data()
  },
  create: async <T extends { id: string }>(collectionName: string, data: T) => {
    const userRef = collection(db, collectionName);
    const docRef = doc(userRef, data.id);

    await setDoc(docRef, data);

    return data;
  },
  update: () => {},
};
