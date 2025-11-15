import React from "react";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import FeaturedHeader from "../Components/FeaturedHeader";
import RestaurantGrid from "../Components/RestaurantGrid";
import Stats from "../Components/Stats";
import Navbar from "../Components/Navbar";

export default function FoodDeliveryHome() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-pink-50">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedHeader />
      <RestaurantGrid />
      <Stats />
    </div>
  );
}
