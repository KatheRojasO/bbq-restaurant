import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function createDocument(collectionName, data) {
  const reference = collection(database, collectionName);
  const document = await addDoc(reference, data);
  const result = document.id;
  return result;
}

export async function readDocuments(collectionName) {
  const querySnapshot = await getDocs(collection(database, collectionName));
  const result = [];
  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
  });

  return result;
}

export async function deleteDocument(collectionName, id) {
  const reference = doc(database, collectionName, id);
  await deleteDoc(reference)
  return id;
}



