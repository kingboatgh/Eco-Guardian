import { db } from "./firebaseConfig";
import {
  doc,
  updateDoc,
  increment,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  where,
} from "firebase/firestore";

/**
 * Add an eco activity and update user's ecoScore
 * @param {string} uid - User ID
 * @param {string} activity - Activity description (e.g., "recycled", "planted_tree")
 * @param {number} points - Points to award (e.g., 10, 50)
 * @returns {Promise<void>}
 * @throws {Error} If activity creation fails
 */
export const addEcoActivity = async (uid, activity, points) => {
  try {
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
  } catch (error) {
    throw new Error(`Failed to add eco activity: ${error.message}`);
  }
};

/**
 * Fetch top users for leaderboard sorted by ecoScore
 * @returns {Promise<Array>} Array of user objects with ecoScore
 * @throws {Error} If leaderboard fetch fails
 */
export const getLeaderboard = async () => {
  try {
    const usersSnapshot = await getDocs(
      query(collection(db, "users"), orderBy("ecoScore", "desc"))
    );
    return usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(`Failed to fetch leaderboard: ${error.message}`);
  }
};

/**
 * Fetch all activities for a specific user
 * @param {string} uid - User ID
 * @returns {Promise<Array>} Array of activity objects
 * @throws {Error} If activity fetch fails
 */
export const getUserActivities = async (uid) => {
  try {
    const activitiesSnapshot = await getDocs(
      query(
        collection(db, "activities"),
        where("uid", "==", uid),
        orderBy("createdAt", "desc")
      )
    );
    return activitiesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(`Failed to fetch user activities: ${error.message}`);
  }
};

/**
 * Get user's total ecoScore
 * @param {string} uid - User ID
 * @returns {Promise<number>} Total ecoScore
 * @throws {Error} If fetch fails
 */
export const getUserEcoScore = async (uid) => {
  try {
    const userDoc = await getDocs(query(collection(db, "users")));
    const user = userDoc.docs.find((doc) => doc.id === uid);
    return user?.data()?.ecoScore || 0;
  } catch (error) {
    throw new Error(`Failed to fetch eco score: ${error.message}`);
  }
};

