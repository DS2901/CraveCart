import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function FeaturedHeader() {
  return (
    <div className="flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Trending Near You
        </h2>
        <p className="text-gray-600">
          Hand-picked favorites everyones ordering
        </p>
      </div>
      <button className="flex items-center space-x-2 text-purple-600 font-semibold hover:text-pink-600 transition-colors">
        <span>View All</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
