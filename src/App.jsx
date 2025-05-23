import React, { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchDoctor from "./components/SearchDoctor";
import MedicalServices from "./components/MedicalServices";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Sign from "./pages/Sign";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import About from "./pages/AboutPage"; // ✅ new import

import Dashboard from "./pages/Dashboard"; // 👈 NEW
import ProtectedRoute from "./components/ProtectedRoute"; // 👈 NEW
import Slider from "./components/Carousel"; // 👈 NEW
import DoctorDetail from "./pages/DoctorDetail"; // 👈 NEW for doctor details
import { useParams } from "react-router-dom";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const doctorsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const section = localStorage.getItem("scrollTo");
    if (section && window.location.pathname === "/") {
      setTimeout(() => {
        scrollToSection(section);
        localStorage.removeItem("scrollTo");
      }, 100); // Give time for DOM to load
    }
  }, []);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      services: servicesRef,
      doctors: doctorsRef,
      about: aboutRef,
      contact: contactRef,
    };

    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Slider />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={homeRef}><Hero /></div>
              <div ref={servicesRef}><MedicalServices /></div>
              <div ref={doctorsRef}><Doctors /></div>
              <div ref={aboutRef}><Testimonials /></div>
              <div ref={contactRef}><Contact /></div>
            </>
          }
        />
          <Route path="/about" element={<About />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 👇 Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 👇 Add doctor detail route */}
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
