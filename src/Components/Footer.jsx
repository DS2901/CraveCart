import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Intro */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            FoodFlow
          </h2>
          <p className="mt-4 text-gray-400">
            Your favorite meals delivered fast, hot & fresh.  
            Experience premium taste every day.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Restaurants</li>
            <li className="hover:text-white cursor-pointer">Offers</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>

          <div className="flex items-center bg-white rounded-xl overflow-hidden">
            <input
              type="text"
              placeholder="Enter email"
              className="px-3 py-2 w-full outline-none text-gray-700"
            />
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} FoodFlow — All Rights Reserved.
      </div>
    </footer>
  );
}
