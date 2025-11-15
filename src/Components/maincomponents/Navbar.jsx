import React from "react";
import { MapPin, ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🍽️</span>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FoodFlow
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-md">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-700">Jaipur, Rajasthan</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2.5 text-gray-700 font-medium hover:bg-white/60 rounded-xl transition-all">
              Login
            </button>
            <button className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
