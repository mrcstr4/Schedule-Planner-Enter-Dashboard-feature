import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/a2klogo.png";
import logoApp from "../../assets/logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    // Remove remembered email only if the user didn't check "Remember Me"
    if (!localStorage.getItem("rememberedEmail")) {
      localStorage.removeItem("rememberedEmail");
    }

    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* A2K Logo */}
      <img src={logo} alt="A2K Logo" className="absolute top-6 left-8 w-32" />

      <h1 className="text-2xl font-bold">Dashboard Here</h1>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
