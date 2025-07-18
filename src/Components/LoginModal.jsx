// components/LoginModal.jsx
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";



const LoginModal = ({ closeModal, switchToSignUp }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data:", formData);
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 py-6 overflow-y-auto min-h-screen">
      <div className="relative bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs animate-fadeIn">
        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <RxCross2 className="w-5 h-5 cursor-pointer" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <PiHandWavingBold className="text-yellow-400 text-3xl rotate-[-20deg]" />
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`peer w-full px-4 pt-6 pb-2 text-sm border rounded-md focus:outline-none focus:ring-2 placeholder-transparent ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Email"
            />
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
              Email Id
            </label>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`peer w-full px-4 pt-6 pb-2 text-sm border rounded-md focus:outline-none focus:ring-2 pr-10 placeholder-transparent ${errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Password"
            />
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3.5 right-3 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash className='cursor-pointer' /> : <FaEye className='cursor-pointer' />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer">
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <button type="button" onClick={switchToSignUp} className="text-blue-600 hover:underline font-medium cursor-pointer">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
