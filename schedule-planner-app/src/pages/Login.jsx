import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import a2kLogo from "../assets/a2klogo.png"; 
import flexiSchedLogo from "../assets/logo.png"; 

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  // Load remembered email on page load
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setIsRemembered(true);
    }
  }, []);

  const validateForm = (email, password) => {
    if (!email.trim() && !password.trim()) return "Email and Password are required.";
    if (!email.trim()) return "Email is required.";
    if (!email.includes("@")) return "Valid email is required.";
    if (!password.trim()) return "Password is required.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", { email, password });

      const { accessToken, user } = response.data;

      // Store tokens in localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      if (isRemembered) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      navigate("/homepage"); // Redirect after login
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-white relative">
      {/* Top-left A2K logo */}
      <img src={a2kLogo} alt="A2K Logo" className="absolute top-6 left-8 w-32" />

      {/* Centered Login Box */}
      <div className="flex flex-col items-center justify-center w-full">
        <img src={flexiSchedLogo} alt="FlexiSched Logo" className="w-32 mb-4 h-25" />

        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Employee Login</h3>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="***********"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isRemembered}
                  onChange={() => setIsRemembered(!isRemembered)}
                />
                Remember Me
              </label>
              <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            <a href="/register" className="text-blue-500">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
