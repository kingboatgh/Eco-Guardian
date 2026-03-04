import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  createUser,
  loginUser,
  logoutUser,
  updateUserProfile,
  resetPassword,
} from "../firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null); // holds firestore doc with role, etc.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Wrapper functions that handle errors
  const signup = async (email, password) => {
    try {
      setError(null);
      return await createUser(email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      return await loginUser(email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      return await logoutUser();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateProfile = async (displayName, photoURL) => {
    try {
      setError(null);
      return await updateUserProfile(displayName, photoURL);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const forgotPassword = async (email) => {
    try {
      setError(null);
      return await resetPassword(email);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Persistent auth state with profile lookup
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setCurrentUser(user);
        try {
          const profileDoc = await getDoc(doc(db, "users", user.uid));
          if (profileDoc.exists()) {
            setUserProfile(profileDoc.data());
          } else {
            setUserProfile(null);
          }
        } catch (fetchError) {
          console.error("Failed to fetch user profile:", fetchError);
          setUserProfile(null);
        }
      } else {
        setCurrentUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    // alias for convenience (some components still expect `user`)
    user: currentUser ? { ...currentUser, ...userProfile } : null,
    signup,
    login,
    logout,
    loading,
    error,
    updateProfile,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
