import { collection, getFirestore, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

import { initializeFirebaseApp } from '@/firebase';

const app = initializeFirebaseApp();
const db = getFirestore(app);

export const dbService = {
  getAll: async <T>(collectionName: string) => {
    const collectionRef = collection(db, collectionName);

    const document = await getDocs(collectionRef);

    return document.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[];
  },
  getById: async <T>(collectionName: string, id: string) => {
    const collectionRef = collection(db, collectionName);
    const docRef = doc(collectionRef, id);

    const document = await getDoc(docRef);
  
    return document.data() as T
  },
  create: async <T extends { id: string }>(collectionName: string, data: T) => {
    const collectionRef = collection(db, collectionName);
    const docRef = doc(collectionRef, data.id);

    await setDoc(docRef, data);

    return data;
  },
  update: async <T extends { id: string }>(collectionName: string, data: T) => {
    const { id, ...newData } = data;
    const collectionRef = collection(db, collectionName);
    const docRef = doc(collectionRef, id);

    await updateDoc(docRef, newData);
  },
};
