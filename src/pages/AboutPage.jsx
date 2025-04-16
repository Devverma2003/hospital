import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Introduction */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-800 leading-tight">
            About NovaCare Hospital
          </h1>
          <p className="mt-6 text-2xl text-gray-600 max-w-3xl mx-auto">
            At NovaCare Hospital, we bring together the finest medical professionals, advanced technologies, and compassionate care. Our state-of-the-art facilities are designed to ensure that our patients receive the most comprehensive, effective, and personalized healthcare services.
          </p>
        </section>

        {/* Section 2: Mission and Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-700 text-center">Our Mission & Values</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg transform transition duration-300 hover:shadow-xl hover:shadow-blue-500/50 max-w-xs mx-auto">
              <h3 className="text-3xl font-semibold text-blue-600">Our Mission</h3>
              <p className="mt-6 text-lg text-gray-700">
                Our mission is to deliver exceptional healthcare that prioritizes the needs and well-being of our patients. Through compassionate care, cutting-edge technology, and medical expertise, we aim to make a positive difference in every patient's life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg transform transition duration-300 hover:shadow-xl hover:shadow-blue-500/50 max-w-xs mx-auto">
              <h3 className="text-3xl font-semibold text-blue-600">Our Values</h3>
              <ul className="mt-6 text-lg text-gray-700">
                <li>Compassion: Caring with empathy and respect for all patients.</li>
                <li>Excellence: Pursuing perfection in medical care and patient outcomes.</li>
                <li>Integrity: Upholding the highest ethical standards and transparency.</li>
                <li>Innovation: Embracing advanced technologies for optimal care.</li>
                <li>Collaboration: Working together as a team for the best results.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Our Advanced Facilities */}
        <section>
          <h2 className="text-4xl font-bold text-blue-700 text-center">State-of-the-Art Medical Facilities</h2>
          <div className="mt-12 text-center text-lg text-gray-700">
            <p className="mb-4">
              Our hospital is equipped with cutting-edge medical technology and modern facilities, ensuring the highest level of patient care. From diagnostic tools to surgical equipment, we are committed to using the latest innovations in healthcare.
            </p>
            <p>
              The hospital’s design focuses on patient comfort, privacy, and a healing environment. Our advanced facilities enable us to deliver efficient, safe, and effective treatments in a patient-centered setting.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:shadow-xl hover:shadow-blue-500/50 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hospital Facility"
                className="w-full h-48 object-cover rounded-3xl mx-auto"
              />
              <div className="mt-4">
                <p className="text-gray-600 text-center">
                  Our high-tech imaging and diagnostic centers ensure accurate and fast results for better patient care.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:shadow-xl hover:shadow-blue-500/50 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1740953448394-86122e98c1be?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Surgical Room"
                className="w-full h-48 object-cover rounded-3xl mx-auto"
              />
              <div className="mt-4">
                <p className="text-gray-600 text-center">
                  Our surgical theaters are equipped with the latest technology to provide patients with the most advanced and minimally invasive procedures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
