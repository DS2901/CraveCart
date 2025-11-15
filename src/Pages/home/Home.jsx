import React from 'react';
import Hero from '../../Components/maincomponents/Hero';
import Categories from '../../Components/maincomponents/Categories';
import FeaturedHeader from '../../Components/maincomponents/FeaturedHeader';
import RestaurantGrid from '../../Components/maincomponents/RestaurantGrid';
import Stats from '../../Components/maincomponents/Stats';
import Navbar from '../../Components/maincomponents/Navbar';
import Footer from '../../Components/maincomponents/Footer';

export default function FoodDeliveryHome() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-pink-50">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedHeader />
      <RestaurantGrid />
      <Stats />
      <Footer />
    </div>
  );
}
