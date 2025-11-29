import React, { useState, useRef, useEffect} from "react";
import { MapPin, ChevronRight, User } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate= useNavigate();

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleLogOut=()=>{
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout Successfully")
  }

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🍽️</span>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FoodFlow
            </span>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-md">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-700">Jaipur, Rajasthan</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4 relative">
            {/* Profile Icon with Dropdown */}
            <div className="relative" ref={ref}>
              <button
                onClick={() => setOpen(!open)}
                
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:shadow-md transition-all"
              >
                <User className="w-6 h-6 text-gray-700" />
              </button>

              {/* Dropdown menu */}
              {open && (
                <div className="absolute right-0 mt-3 w-40 bg-white shadow-xl rounded-xl py-2 border">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  onClick={()=>handleLogOut()}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
