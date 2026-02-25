import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Card from "../../components/ui/Card";

export default function EducationHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 py-12">
        <div className="eco-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="eco-heading-xl mb-4">📚 Education Hub</h1>
            <Card elevated>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🌍</div>
                <h2 className="eco-heading-md mb-2">Learn & Grow</h2>
                <p className="eco-text-muted mb-6">
                  Discover species, learn about sustainability, and become an eco-expert!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
