import React from "react";

const categories = [
  { name: "Pizza", icon: "🍕", color: "from-orange-500 to-red-500" },
  { name: "Burgers", icon: "🍔", color: "from-yellow-500 to-orange-600" },
  { name: "Drinks", icon: "🥤", color: "from-pink-500 to-purple-600" },
  { name: "South Indian", icon: "🍛", color: "from-green-500 to-teal-500" },
  { name: "Desserts", icon: "🍰", color: "from-purple-500 to-pink-500" },
];

export default function Categories() {
  return (
    <div className="flex items-center justify-center space-x-4 mb-16 overflow-x-auto pb-4">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/70 shadow-md hover:shadow-xl transition-all transform hover:scale-110"
        >
          <div
            className={`w-16 h-16 bg-linear-to-br ${cat.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
          >
            {cat.icon}
          </div>

          <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
}
