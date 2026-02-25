import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#security" },
      { label: "Status", href: "#status" },
    ],
    Community: [
      { label: "Blog", href: "#blog" },
      { label: "Forum", href: "#forum" },
      { label: "Events", href: "#events" },
      { label: "Newsletter", href: "#newsletter" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Press", href: "#press" },
    ],
    Legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "License", href: "#license" },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="eco-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌍</span>
              <div>
                <div className="eco-heading-sm text-eco-600 dark:text-eco-400">
                  Eco
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Guardian
                </div>
              </div>
            </Link>
            <p className="eco-text-muted text-sm">
              Making environmental impact easy for everyone through technology and community.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: "🐦", label: "Twitter" },
                { icon: "👍", label: "Facebook" },
                { icon: "📷", label: "Instagram" },
                { icon: "💼", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  title={social.label}
                  className="text-2xl hover:opacity-70 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="eco-text-muted hover:text-eco-600 dark:hover:text-eco-400 transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="eco-divider mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="eco-text-subtle text-center md:text-left">
            © {currentYear} Eco-Guardian. All rights reserved.
          </p>
          <div className="flex gap-6 eco-text-subtle">
            <a href="#privacy" className="hover:text-eco-600 dark:hover:text-eco-400 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-eco-600 dark:hover:text-eco-400 transition">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-eco-600 dark:hover:text-eco-400 transition">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>

      {/* Floating Banner */}
      <div className="bg-gradient-to-r from-eco-500 to-blue-500 text-white py-4">
        <div className="eco-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold">🌱 Join our mission to save the planet</p>
            <p className="text-eco-50 text-sm">Start your eco-journey today!</p>
          </div>
          <button className="px-6 py-2 bg-white text-eco-600 rounded-lg font-semibold hover:bg-eco-50 transition whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </footer>
  );
}
