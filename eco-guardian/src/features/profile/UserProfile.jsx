import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function UserProfile() {
  const { currentUser, userProfile, logout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(
    currentUser?.displayName || currentUser?.email?.split("@")[0] || ""
  );

  const stats = {
    ecoScore: userProfile?.ecoScore || 850,
    co2Saved: 52.3,
    wasteLogged: 68,
    activities: 35,
    level: "Eco Champion",
  };

  const handleSaveProfile = () => {
    setEditing(false);
    // TODO: Save profile to Firestore
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 py-8">
        <div className="eco-container max-w-2xl">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <img
                src={`https://i.pravatar.cc/150?u=${currentUser?.email}`}
                alt={currentUser?.email}
                className="w-24 h-24 rounded-full border-4 border-eco-500"
              />
              <div>
                <h1 className="eco-heading-2xl">{displayName || "User"}</h1>
                <p className="eco-text-muted">{currentUser?.email}</p>
                <div className="mt-2 flex gap-2">
                  <span className="eco-badge eco-badge-success">
                    {stats.level}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <p className="eco-text-muted text-sm">Eco Score</p>
              <p className="eco-heading-lg text-eco-600">{stats.ecoScore}</p>
            </Card>
            <Card>
              <p className="eco-text-muted text-sm">CO₂ Saved</p>
              <p className="eco-heading-lg">{stats.co2Saved} kg</p>
            </Card>
            <Card>
              <p className="eco-text-muted text-sm">Waste Logged</p>
              <p className="eco-heading-lg">{stats.wasteLogged} kg</p>
            </Card>
            <Card>
              <p className="eco-text-muted text-sm">Activities</p>
              <p className="eco-heading-lg">{stats.activities}</p>
            </Card>
          </motion.div>

          {/* Bio Section */}
          <Card className="mb-6">
            <h2 className="eco-heading-lg mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Display Name
                </label>
                {editing ? (
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="eco-input"
                  />
                ) : (
                  <p className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {displayName || "Not set"}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <p className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {currentUser?.email}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Account Status
                </label>
                <p className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {userProfile?.role === "admin" ? "Admin" : "Regular User"}
                </p>
              </div>
            </div>

            {editing ? (
              <div className="flex gap-2 mt-4">
                <Button
                  variant="primary"
                  onClick={handleSaveProfile}
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={() => setEditing(true)}
                className="mt-4"
              >
                Edit Profile
              </Button>
            )}
          </Card>

          {/* Achievements */}
          <Card className="mb-6">
            <h2 className="eco-heading-lg mb-4">Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🌱", label: "First Steps", desc: "Log 1 activity" },
                { icon: "♻️", label: "Recycler", desc: "Log 10 waste items" },
                { icon: "🚴", label: "Commuter", desc: "Save 50kg CO₂" },
                { icon: "👑", label: "Champion", desc: "Reach Eco Champion" },
              ].map((achievement) => (
                <div
                  key={achievement.label}
                  className="text-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-600"
                >
                  <p className="text-3xl mb-1">{achievement.icon}</p>
                  <p className="text-xs font-semibold">{achievement.label}</p>
                  <p className="text-xs eco-text-muted">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600">
            <h2 className="eco-heading-lg mb-4 text-red-600">Account Settings</h2>
            <div className="space-y-3">
              <Button variant="danger" className="w-full">
                Change Password
              </Button>
              <Button variant="danger" className="w-full">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
