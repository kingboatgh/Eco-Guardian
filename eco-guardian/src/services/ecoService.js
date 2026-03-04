import { db } from "../firebase/firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  increment,
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

export const createUserProfile = async (uid, email) => {
  await setDoc(doc(db, "users", uid), {
    email,
    ecoScore: 0,
    role: "user",
    createdAt: serverTimestamp(),
  });
};

// helper for changing a user's role (e.g. promote to admin)
export const setUserRole = async (uid, role) => {
  await updateDoc(doc(db, "users", uid), { role });
};

// fetch all user documents (for admin dashboard)
export const getAllUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const addEcoActivity = async (uid, activity, points) => {
  await addDoc(collection(db, "activities"), {
    uid,
    activity,
    points,
    createdAt: serverTimestamp(),
  });

  await updateDoc(doc(db, "users", uid), {
    ecoScore: increment(points),
  });
};
