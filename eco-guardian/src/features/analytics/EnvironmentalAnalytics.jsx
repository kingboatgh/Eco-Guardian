import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function EnvironmentalAnalytics() {
  const { currentUser } = useAuth();
  const [timeFrame, setTimeFrame] = useState("month");

  const stats = {
    week: {
      co2Saved: 12.5,
      wasteLogged: 15,
      activities: 8,
      points: 45,
    },
    month: {
      co2Saved: 52.3,
      wasteLogged: 68,
      activities: 35,
      points: 210,
    },
    year: {
      co2Saved: 456.8,
      wasteLogged: 820,
      activities: 380,
      points: 2100,
    },
  };

  const currentStats = stats[timeFrame];

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
            📊 Environmental Analytics
          </motion.h1>
          <p className="eco-text-muted mb-6">
            Detailed insights into your environmental impact.
          </p>

          {/* Time Frame Toggle */}
          <div className="mb-6 flex gap-2">
            {["week", "month", "year"].map((tf) => (
              <Button
                key={tf}
                variant={timeFrame === tf ? "primary" : "outline"}
                onClick={() => setTimeFrame(tf)}
                className="capitalize"
              >
                {tf}
              </Button>
            ))}
          </div>

          {/* Main Stats Grid */}
          <motion.div
            className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={timeFrame}
          >
            <Card>
              <p className="eco-text-muted text-sm">CO₂ Saved</p>
              <p className="eco-heading-lg text-eco-600">
                {currentStats.co2Saved} kg
              </p>
              <p className="text-xs eco-text-muted mt-2">
                Equivalent to {(currentStats.co2Saved / 20).toFixed(1)} trees
              </p>
            </Card>
            <Card>
              <p className="eco-text-muted text-sm">Waste Logged</p>
              <p className="eco-heading-lg text-green-600">
                {currentStats.wasteLogged} kg
              </p>
              <p className="text-xs eco-text-muted mt-2">
                Diverted from landfills
              </p>
            </Card>
            <Card>
              <p className="eco-text-muted text-sm">Activities</p>
              <p className="eco-heading-lg text-blue-600">
                {currentStats.activities}
              </p>
              <p className="text-xs eco-text-muted mt-2">Eco actions taken</p>
            </Card>
            <Card>
              <p className="eco-text-muted text-sm">Points Earned</p>
              <p className="eco-heading-lg text-amber-600">
                {currentStats.points}
              </p>
              <p className="text-xs eco-text-muted mt-2">Keep it up!</p>
            </Card>
          </motion.div>

          {/* Impact Summary */}
          <Card className="mb-6">
            <h2 className="eco-heading-lg mb-4">Your Impact</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>CO₂ Reduction Progress</span>
                  <span className="font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-eco-500 h-3 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Waste Reduction Goal</span>
                  <span className="font-semibold">60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Breakdown */}
          <Card>
            <h2 className="eco-heading-lg mb-4">Activity Breakdown</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🚴", label: "Transport", pct: "35%" },
                { icon: "🥗", label: "Food", pct: "25%" },
                { icon: "♻️", label: "Waste", pct: "20%" },
                { icon: "💡", label: "Energy", pct: "20%" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs eco-text-muted">{item.pct}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
