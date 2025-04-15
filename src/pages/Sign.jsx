import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email === email && storedUser?.password === password) {
      // Save token and user info
      localStorage.setItem("token", "sample-token-123");
      localStorage.setItem("currentUser", JSON.stringify(storedUser));
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white w-full py-3 rounded-md hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-primary font-medium cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sign;
