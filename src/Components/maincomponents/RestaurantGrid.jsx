import React from "react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantGrid() {
  const restaurants = [
    { id: 1, name: "Urban Spice Kitchen" },
    { id: 2, name: "Royal Tandoori Hub" },
    { id: 3, name: "Burger Garage" },
    { id: 4, name: "Chinese Wok Express" },
    { id: 5, name: "Sweet Cravings" },
    { id: 6, name: "South Taste Corner" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {restaurants.map((r) => (
        <RestaurantCard key={r.id} />
      ))}

    </div>
  );
}
