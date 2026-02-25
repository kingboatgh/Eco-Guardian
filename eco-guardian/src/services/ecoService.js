import { db } from "../firebase/firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  increment,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export const createUserProfile = async (uid, email) => {
  await setDoc(doc(db, "users", uid), {
    email,
    ecoScore: 0,
    role: "user",
    createdAt: serverTimestamp(),
  });
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
