import { db } from "./firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  getDocs,
  writeBatch,
} from "firebase/firestore";

/**
 * Create or update a user document
 */
export const setUserDocument = async (uid, userData) => {
  try {
    await setDoc(doc(db, "users", uid), userData, { merge: true });
  } catch (error) {
    throw new Error(error.message || "Failed to set user document");
  }
};

/**
 * Get a user document
 */
export const getUserDocument = async (uid) => {
  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    throw new Error(error.message || "Failed to get user document");
  }
};

/**
 * Update a user document
 */
export const updateUserDocument = async (uid, data) => {
  try {
    await updateDoc(doc(db, "users", uid), data);
  } catch (error) {
    throw new Error(error.message || "Failed to update user document");
  }
};

/**
 * Delete a user document
 */
export const deleteUserDocument = async (uid) => {
  try {
    await deleteDoc(doc(db, "users", uid));
  } catch (error) {
    throw new Error(error.message || "Failed to delete user document");
  }
};

/**
 * Get all documents from a collection
 */
export const getCollection = async (collectionName, q = null) => {
  try {
    const queryFn = q || query(collection(db, collectionName));
    const querySnapshot = await getDocs(queryFn);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    throw new Error(error.message || `Failed to fetch ${collectionName}`);
  }
};

/**
 * Batch write operations
 */
export const batchWrite = async (operations) => {
  try {
    const batch = writeBatch(db);
    operations.forEach(({ type, path, data }) => {
      const docRef = doc(db, ...path.split("/"));
      if (type === "set") {
        batch.set(docRef, data);
      } else if (type === "update") {
        batch.update(docRef, data);
      } else if (type === "delete") {
        batch.delete(docRef);
      }
    });
    await batch.commit();
  } catch (error) {
    throw new Error(error.message || "Batch write failed");
  }
};
