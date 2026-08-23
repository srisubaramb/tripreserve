import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 py-10 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary">TripReserve</h3>
            <p className="text-sm text-gray-500">
              Seamlessly search, save, and manage your flights with smart
              booking insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="hover:text-primary transition-colors"
                >
                  Search Flights
                </Link>
              </li>
              <li>
                <Link
                  to="/fav"
                  className="hover:text-primary transition-colors"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Account */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Account & Help</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/help"
                  className="hover:text-primary transition-colors"
                >
                  Help & Support
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-primary transition-colors"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="hover:text-primary transition-colors"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Stay Updated</h4>
            <p className="text-sm text-gray-500 mb-3">
              Get the latest flight deals and travel updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} TripReserve. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-800 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-800 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
