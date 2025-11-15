import React from "react";
import { Award, TrendingUp, Star } from "lucide-react";

export default function Stats() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-gray-800 mb-2">500+</h3>
        <p className="text-gray-600">Premium Restaurants</p>
      </div>
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-orange-500 to-red-500 rounded-2xl mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-gray-800 mb-2">100K+</h3>
        <p className="text-gray-600">Orders Delivered</p>
      </div>
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl mb-4">
          <Star className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-4xl font-bold text-gray-800 mb-2">4.8/5</h3>
        <p className="text-gray-600">Average Rating</p>
      </div>
    </div>
  );
}
