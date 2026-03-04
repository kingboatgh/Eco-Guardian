import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

/**
 * Upload a file to Firebase Storage
 */
export const uploadFile = async (path, file) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    throw new Error(error.message || "Failed to upload file");
  }
};

/**
 * Get download URL of a file
 */
export const getFileURL = async (path) => {
  try {
    const storageRef = ref(storage, path);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    throw new Error(error.message || "Failed to get file URL");
  }
};

/**
 * Delete a file from Firebase Storage
 */
export const deleteFile = async (path) => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    throw new Error(error.message || "Failed to delete file");
  }
};

/**
 * Upload user avatar
 */
export const uploadUserAvatar = async (uid, file) => {
  try {
    const path = `avatars/${uid}/${file.name}`;
    return await uploadFile(path, file);
  } catch (error) {
    throw new Error(error.message || "Failed to upload avatar");
  }
};
