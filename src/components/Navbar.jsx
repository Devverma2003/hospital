import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/NovaCarelogo.jpg";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <img src={logo} alt="Hospital Logo" className="w-24 rounded" />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("doctors")}>Doctors</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* Buttons */}
        <div className="space-x-4">
          <button onClick={() => navigate("/signin")} className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
            Sign In
          </button>
          <button onClick={() => navigate("/signup")} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
