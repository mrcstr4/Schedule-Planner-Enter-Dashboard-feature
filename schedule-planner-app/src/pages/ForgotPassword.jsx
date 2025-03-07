import React, { useState } from "react";
import lockIcon from "../assets/unlock.png"; // Lock icon image

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <img src={lockIcon} alt="Lock Icon" className="w-12 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Forgot Password?</h2>
        <p className="text-gray-600 text-sm mb-4">You can reset your password here</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:ring focus:ring-blue-300 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;