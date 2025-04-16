import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      access_key: "d3de43bc-83e4-4371-9b36-2976686a3e2c", // your Web3Forms key
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mt-24">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 p-6 bg-primary text-white">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="mt-2">
              We are here to help. Contact us via phone or email.
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>📍 Address:</strong> 123 Health St, City, Country
              </p>
              <p>
                <strong>📞 Phone:</strong> +1 234 567 890
              </p>
              <p>
                <strong>📧 Email:</strong> novacaresupport@hospital.com
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
