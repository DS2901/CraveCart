import React from "react";
import { TrendingUp, Heart, Star, Clock } from "lucide-react";

export default function RestaurantCard() {

  const restaurant = {
    name: "Urban Spice Kitchen",
    cuisine: "North Indian • Chinese",
    rating: 4.6,
    time: 28,
    discount: "30% OFF",
    trending: true,
    image: "🍜",
    color: "from-purple-500 to-pink-500",
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">

      {/* Banner */}
      <div className={`relative h-48 bg-linear-to-br ${restaurant.color} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/10"></div>

        <span className="text-8xl transform group-hover:scale-125 transition-transform duration-300">
          {restaurant.image}
        </span>

        {restaurant.trending && (
          <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-bold text-gray-700">Trending</span>
          </div>
        )}

        <div className="absolute top-4 right-4 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          {restaurant.discount}
        </div>

        <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {restaurant.name}
            </h3>
            <p className="text-gray-500 text-sm">{restaurant.cuisine}</p>
          </div>

          <div className="flex items-center space-x-1 bg-green-50 px-2.5 py-1.5 rounded-lg">
            <Star className="w-4 h-4 fill-green-500 text-green-500" />
            <span className="font-bold text-green-700 text-sm">
              {restaurant.rating}
            </span>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{restaurant.time} min</span>
          </div>

          <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
}
