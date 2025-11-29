import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { loginUser } from '../../services/authServices';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const result = await loginUser({ email, password });

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Login successful!');
        localStorage.setItem('token', result.token);
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <span>Login</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Dont have an account?{' '}
          <a
            href="/signup"
            className="text-purple-600 hover:text-pink-600 font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
