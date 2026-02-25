import { db } from "./firebaseConfig";
import { doc, updateDoc, increment, addDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

// Add an activity and update user's ecoScore
export const addEcoActivity = async (uid, activity, points) => {
  // Add activity record
  await addDoc(collection(db, "activities"), {
    uid,
    activity,
    points,
    createdAt: new Date(),
  });

  // Increment user's ecoScore
  await updateDoc(doc(db, "users", uid), {
    ecoScore: increment(points),
  });
};

// Fetch top users for leaderboard
export const getLeaderboard = async () => {
  const usersSnapshot = await getDocs(
    query(collection(db, "users"), orderBy("ecoScore", "desc"))
  );
  return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Fetch user activities
export const getUserActivities = async (uid) => {
  const activitiesSnapshot = await getDocs(
    query(collection(db, "activities"), orderBy("createdAt", "desc"))
  );
  return activitiesSnapshot.docs
    .map(doc => doc.data())
    .filter(a => a.uid === uid);
};
