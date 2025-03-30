import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-primary leading-tight">
            We care <span className="text-textDark">about your health</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Good health is the state of mental, physical, and social well-being.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button
              onClick={() => navigate("/book-appointment")}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-purple-700 transition shadow-md"
            >
              Book an appointment →
            </button>
            <a href="https://youtu.be/VAK3_RLVpFk?si=GeUx0VHj1GRat6nC" className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition">
              Watch videos
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={heroImg} alt="Doctors" className="w-full max-w-md" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
