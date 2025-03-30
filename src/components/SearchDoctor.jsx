import React, { useState } from "react";

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Brown", "Dr. Lee"];
const specialties = ["Cardiology", "Neurology", "Pediatrics", "Dermatology"];

const SearchDoctor = () => {
  const [query, setQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = () => {
    setFilteredDoctors(doctors.filter((doctor) => doctor.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div className="bg-white p-6 rounded-lg w-3/4 mx-auto mt-8 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Find a doctor</h2>
      <input
        type="text"
        placeholder="Search doctor"
        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-primary text-white px-6 py-3 rounded-md mt-4" onClick={handleSearch}>
        Search
      </button>
      <ul className="mt-4">
        {filteredDoctors.map((doctor, index) => (
          <li key={index} className="p-2 border-b">{doctor}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchDoctor;
