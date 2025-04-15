import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
        <img src={logo} alt="Hospital Logo" className="w-24 rounded" />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="cursor-pointer" onClick={() => handleScrollOrNavigate("home")}>Home</li>
          <li className="cursor-pointer" onClick={() => handleScrollOrNavigate("services")}>Services</li>
          <li className="cursor-pointer" onClick={() => handleScrollOrNavigate("doctors")}>Doctors</li>
          <li className="cursor-pointer" onClick={() => handleScrollOrNavigate("about")}>About</li>
          <li className="cursor-pointer" onClick={() => handleScrollOrNavigate("contact")}>Contact</li>
        </ul>

        {/* Auth Buttons */}
        <div className="space-x-4 flex items-center">
          {isLoggedIn ? (
            <>
              <span className="text-primary font-medium gap-11">Welcome:  {username}</span>
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
