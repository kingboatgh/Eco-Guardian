import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

import Login from "./features/auth/Login";
import Signup from "./features/auth/SignUp";
import Dashboard from "./features/dashboard/Dashboard";
import Events from "./features/events/Events";
import Marketplace from "./features/marketplace/Marketplace";
import EducationHub from "./features/education/EducationHub";
import Leaderboard from "./features/leaderboard/Leaderboard";
import AdminRoute from "./components/AdminRoute";  // restrict admin pages to admins
import AccessDenied from "./features/auth/AccessDenied";
import AdminDashboard from "./features/admin/AdminDashboard";
import CarbonTracker from "./features/carbon/CarbonTracker";
import WasteReporting from "./features/waste/WasteReporting";
import CommunityLeaderboard from "./features/community/CommunityLeaderboard";
import EnvironmentalAnalytics from "./features/analytics/EnvironmentalAnalytics";
import UserProfile from "./features/profile/UserProfile";


function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🌍</div>
          <p className="text-gray-600 dark:text-gray-300">Loading Eco-Guardian...</p>
        </div>
      </div>
    );
  }

  // If no user, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/login"
              element={
                <motion.div
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Login />
                </motion.div>
              }
            />
            <Route
              path="/signup"
              element={
                <motion.div
                  key="signup"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Signup />
                </motion.div>
              }
            />

            {/* Protected routes */}
            {/* user dashboard (all authenticated users) */}
            <Route
              path="/dashboard"
              element={
                <motion.div
                  key="user-dashboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            {/* admin-only dashboard */}
            <Route
              path="/admin/dashboard"
              element={
                <motion.div
                  key="admin-dashboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <AdminRoute>
                      <AdminDashboard />
                    </AdminRoute>
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/events"
              element={
                <motion.div
                  key="events"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <Events />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/marketplace"
              element={
                <motion.div
                  key="marketplace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <Marketplace />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/education"
              element={
                <motion.div
                  key="education"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <EducationHub />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/leaderboard"
              element={
                <motion.div
                  key="leaderboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <Leaderboard />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            {/* New Feature Routes */}
            <Route
              path="/carbon"
              element={
                <motion.div
                  key="carbon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <CarbonTracker />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/waste"
              element={
                <motion.div
                  key="waste"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <WasteReporting />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/community"
              element={
                <motion.div
                  key="community"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <CommunityLeaderboard />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/analytics"
              element={
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <EnvironmentalAnalytics />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            <Route
              path="/profile"
              element={
                <motion.div
                  key="profile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                </motion.div>
              }
            />

            {/* Access denied page */}
            <Route
              path="/access-denied"
              element={
                <motion.div
                  key="access-denied"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AccessDenied />
                </motion.div>
              }
            />

            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthProvider>
  );
}
