import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function CommunityLeaderboard() {
  const { currentUser } = useAuth();
  const [view, setView] = useState("global");

  const globalLeaderboard = [
    { rank: 1, name: "Emma Green", eco: 2450, badge: "🥇" },
    { rank: 2, name: "Alex Eco", eco: 2150, badge: "🥈" },
    { rank: 3, name: "Jordan Clean", eco: 1890, badge: "🥉" },
    { rank: 4, name: "Sam Nature", eco: 1620 },
    { rank: 5, name: "Taylor Sustain", eco: 1450 },
  ];

  const friendsLeaderboard = [
    { rank: 1, name: "You", eco: 980 },
    { rank: 2, name: "Jane Smith", eco: 850 },
    { rank: 3, name: "Bob Johnson", eco: 720 },
  ];

  const leaderboard =
    view === "global" ? globalLeaderboard : friendsLeaderboard;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 py-8">
        <div className="eco-container">
          <motion.h1
            className="eco-heading-2xl mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🌍 Community Leaderboard
          </motion.h1>
          <p className="eco-text-muted mb-6">
            See how you compare with other eco-warriors worldwide.
          </p>

          {/* View Toggle */}
          <div className="mb-6 flex gap-2">
            <Button
              variant={view === "global" ? "primary" : "outline"}
              onClick={() => setView("global")}
            >
              Global Rankings
            </Button>
            <Button
              variant={view === "friends" ? "primary" : "outline"}
              onClick={() => setView("friends")}
            >
              Friends Leaderboard
            </Button>
          </div>

          {/* Leaderboard Table */}
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Rank</th>
                    <th className="px-4 py-3 font-semibold">User</th>
                    <th className="px-4 py-3 font-semibold text-right">
                      Eco Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((user, idx) => (
                    <motion.tr
                      key={user.name}
                      className={`border-t ${
                        user.name === "You"
                          ? "bg-eco-100 dark:bg-eco-900/20"
                          : ""
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <td className="px-4 py-3">
                        <span className="text-2xl">{user.badge || "🏅"}</span>
                        <span className="ml-2 font-semibold">#{user.rank}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={`https://i.pravatar.cc/40?u=${user.name}`}
                            alt={user.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span>{user.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-eco-600">
                        {user.eco} pts
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Next Tier */}
          <Card className="mt-6">
            <h2 className="eco-heading-lg mb-2">Next Milestone</h2>
            <p className="eco-text-muted mb-4">
              You need 245 more points to enter the top 10!
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-eco-500 dark:bg-eco-400 h-3 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
