// components/SignModal.jsx
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";



const SignModal = ({ closeModal, switchToLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!acceptedTerms) {
      newErrors.terms = "You must accept the terms and conditions.";
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
      console.log("Sign Up Data:", formData);
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 py-6 sm:px-6 overflow-auto">
      <div
        className="
                    relative 
                    bg-white 
                    rounded-xl 
                    shadow-2xl 
                    w-full 
                    max-w-sm 
                    mx-auto 
                    animate-fadeIn 
                    p-4 
                    sm:p-6
                    sm:max-w-md
                    overflow-y-auto
                    max-h-[90vh]
                "
        style={{ minWidth: '280px' }} // ensure min width for very small screens
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <RxCross2 className="w-5 h-5 cursor-pointer" />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
          <span className="flex items-center justify-center gap-2">
            <PiHandWavingBold className="text-yellow-400 text-3xl rotate-[-20deg]" />
            Create an Account
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`peer w-full px-3 pt-5 pb-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 placeholder-transparent ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Name"
              autoComplete="name"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
              Full Name
            </label>
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`peer w-full px-3 pt-5 pb-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 placeholder-transparent ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Email"
              autoComplete="email"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
              Email
            </label>
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`peer w-full px-3 pt-5 pb-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 pr-10 placeholder-transparent ${errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-300'}`}
              placeholder="Password"
              autoComplete="new-password"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className="cursor-pointer" /> : <FaEye className="cursor-pointer" />}
            </button>
            {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>}
          </div>




          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2 text-xs sm:text-sm">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 accent-blue-600 w-4 h-4 sm:w-5 sm:h-5"
            />
            <label htmlFor="terms" className="text-gray-700 leading-tight">
              I accept the{' '}
              <a href="#" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-xs sm:text-sm">{errors.terms}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base"
          >
            Sign Up
          </button>

          {/* Switch to Login */}
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={switchToLogin}
              className="text-blue-600 hover:underline font-medium cursor-pointer"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignModal;
