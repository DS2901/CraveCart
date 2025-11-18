import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "../Pages/auth/Signup";
import FoodDeliveryHome from "../Pages/home/Home";
import LoginPage from "../Pages/auth/Login";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default landing */}
        <Route path="/" element={<LoginPage />} />

        {/* Other routes */}    
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<FoodDeliveryHome />} />

        {/* Catch-all */}
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl font-bold text-gray-700">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
