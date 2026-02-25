import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `flex flex-col items-center text-xs ${
      pathname === path ? "text-emerald-600" : "text-gray-500"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
      <div className="flex justify-around py-3">
        <Link to="/" className={linkClass("/")}>
          <span className="text-lg">🏠</span>
          Home
        </Link>

        <Link to="/report" className={linkClass("/report")}>
          <span className="text-lg">📍</span>
          Report
        </Link>

        <Link to="/events" className={linkClass("/events")}>
          <span className="text-lg">🎉</span>
          Events
        </Link>

        <Link to="/profile" className={linkClass("/profile")}>
          <span className="text-lg">👤</span>
          Profile
        </Link>
      </div>
    </nav>
  );
}
