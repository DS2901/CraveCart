import React from "react";
import { MapPin, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative group">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

        {/* Search Bar */}
        <div className="relative flex items-center bg-white rounded-3xl shadow-2xl p-3 md:p-4">

          {/* Location Input */}
          <div className="flex items-center px-4 border-r border-gray-200">
            <MapPin className="w-5 h-5 text-purple-600 mr-2" />
            <input
              type="text"
              placeholder="Your location"
              className="outline-none text-gray-700 w-28 md:w-44"
            />
          </div>

          {/* Search Input */}
          <div className="flex-1 flex items-center px-4">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="outline-none text-gray-700 w-full"
            />
          </div>

          {/* Button */}
          <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Search
          </button>

        </div>
      </div>
    </div>
  );
}
