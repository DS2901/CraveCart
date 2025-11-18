import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './PrivateRoutes';

import SignupPage from '../Pages/auth/Signup';
import FoodDeliveryHome from '../Pages/home/Home';
import LoginPage from '../Pages/auth/Login';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        {/* Protect this */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <FoodDeliveryHome />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}
