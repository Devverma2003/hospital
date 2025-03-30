import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">What Our Patients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "The doctors here are amazing! They truly care about their patients."
            </p>
            <h3 className="text-lg font-semibold mt-4">- Sarah Johnson</h3>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "Great medical services with top-notch care and support."
            </p>
            <h3 className="text-lg font-semibold mt-4">- Mark Anderson</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
