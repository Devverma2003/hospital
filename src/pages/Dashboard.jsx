import React from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";

const Dashboard = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-2 text-primary">Welcome, {user?.name}</h2>
        <p className="text-gray-600 mb-6">Logged in as: {user?.email}</p>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <button
            onClick={() => goTo("/book-appointment")}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Book an Appointment
          </button>
          <button
            onClick={() => goTo("/#contact")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Contact Us
          </button>
        
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
