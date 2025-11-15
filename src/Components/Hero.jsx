import React from "react";
import { Flame } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Center Content */}
        <div className="text-center mb-12">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6 animate-bounce">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">
              Hottest Deals Today
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Delicious Food
            </span>
            <br />
            <span className="text-gray-800">Delivered Fast</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience the finest cuisines from top restaurants, delivered to your doorstep in minutes.
          </p>

          {/* Search Input */}
          <SearchBar />
        </div>

      </div>
    </section>
  );
}
