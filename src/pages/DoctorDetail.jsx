import React from "react";
import { useParams, Link } from "react-router-dom";
import doctor1 from "../assets/johndoe.jpg";
import doctor2 from "../assets/emily.jpg";
import doctor3 from "../assets/micheal.jpg";


// Example list of doctors (This can come from an API or static data)
const doctorList = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: doctor1,
    description: "Experienced cardiologist with over 15 years of practice.",
  },
  {
    id: 2,
    name: "Dr. Emily Smith",
    specialty: "Neurologist",
    image:  doctor2,
    description: "Specializing in neurological disorders with extensive research experience.",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialty: "Orthopedic",
    image:  doctor3,
    description: "Expert in orthopedic surgery and rehabilitation.",
  },
];

const DoctorDetail = () => {
  const { id } = useParams(); // Retrieve the id from the URL
  const doctor = doctorList.find((doc) => doc.id === parseInt(id));

  if (!doctor) return <p className="text-center mt-10">Doctor not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-56 h-56 md:w-72 md:h-72">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full rounded-full border-2 border-blue-500 shadow-2xl object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900">{doctor.name}</h1>
            <p className="text-blue-600 text-xl">{doctor.specialty}</p>
            <p className="text-gray-700 text-lg">{doctor.description}</p>

            {/* Add extra details about the doctor */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-900">Qualifications:</h2>
              <ul className="text-gray-700 mt-3">
                <li>MBBS, University of XYZ</li>
                <li>MD in Cardiology, ABC University</li>
                <li>10+ years of experience in cardiology</li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Information:</h2>
              <p className="text-gray-700 mt-3">
                Phone: +1 234 567 8901
              </p>
              <p className="text-gray-700 mt-2">
                Email: dr.johndoe@hospital.com
              </p>
            </div>

            {/* Appointment Button - Updated to Link to Book Appointment Page */}
            <div className="mt-8">
              <Link to="/book-appointment">
                <button className="w-full md:w-auto px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors duration-300">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
