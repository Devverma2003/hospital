import React from "react";
import { Link } from "react-router-dom";
import doctor1 from "../assets/johndoe.jpg";
import doctor2 from "../assets/emily.jpg";
import doctor3 from "../assets/micheal.jpg";

const Doctors = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Meet Our Doctors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doctor 1 */}
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <img src={doctor1} alt="Doctor 1" className="w-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold">Dr. John Doe</h3>
            <p className="text-gray-600 mt-2">Cardiologist</p>
            <Link to={`/doctor/${1}`}>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <img src={doctor2} alt="Doctor 2" className="w-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold">Dr. Emily Smith</h3>
            <p className="text-gray-600 mt-2">Neurologist</p>
            <Link to={`/doctor/${2}`}>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>

          {/* Doctor 3 */}
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <img src={doctor3} alt="Doctor 3" className="w-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold">Dr. Michael Brown</h3>
            <p className="text-gray-600 mt-2">Orthopedic</p>
            <Link to={`/doctor/${3}`}>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
