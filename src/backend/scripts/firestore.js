import { collection, getDocs, addDoc } from "firebase/firestore"; //Read data
import { database } from "./firebaseSetup";

export async function createDocument(collectionName, data) {
  const reference = collection(database, collectionName);
  const document = await addDoc(reference, data);
  const result = document.id;
  console.log("document was created with document:", document.id);
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
