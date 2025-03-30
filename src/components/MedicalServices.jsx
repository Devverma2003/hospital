import React from "react";
import service2 from "../assets/neurology.png"; // Add relevant images
import service1 from "../assets/cardiology.png";
import service3 from "../assets/shin.png";

const MedicalServices = () => {
  return (
    <section className="bg-white mt-2 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Medical Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-secondary p-6 rounded-lg text-center shadow-md">
            <img src={service1} alt="Service 1" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Cardiology</h3>
            <p className="text-gray-600 mt-2">Expert heart care specialists available.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-secondary p-6 rounded-lg text-center shadow-md">
            <img src={service2} alt="Service 2" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Neurology</h3>
            <p className="text-gray-600 mt-2">Comprehensive neurological treatment.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-secondary p-6 rounded-lg text-center shadow-md">
            <img src={service3} alt="Service 3" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Orthopedics</h3>
            <p className="text-gray-600 mt-2">Advanced orthopedic solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
