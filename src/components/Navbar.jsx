import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/NovaCarelogo.jpg";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setIsLoggedIn(!!token);
    setUsername(currentUser?.name || "");
  }, [location]);

  const handleScrollOrNavigate = (section) => {
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      localStorage.setItem("scrollTo", section);
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/signin");
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <h1 className="text-3xl font-bold text-blue-600">NovaCare</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {["home", "services", "doctors", "about", "contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative group text-lg capitalize transition duration-300"
              onClick={() => handleScrollOrNavigate(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="space-x-4 flex items-center">
          {isLoggedIn ? (
            <>
              <span className="text-primary font-medium gap-11">{username}</span>
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
