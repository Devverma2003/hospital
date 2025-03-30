import React, { useRef } from "react";
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

function App() {
  // Create section refs for smooth scrolling
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const doctorsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={homeRef}><Hero /></div>
              <div ref={servicesRef}><MedicalServices /></div>
              <div ref={doctorsRef}><Doctors /></div>
              <div ref={aboutRef}><Testimonials /></div>
              <div ref={contactRef}><Contact/></div>
            </>
          }
        />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
