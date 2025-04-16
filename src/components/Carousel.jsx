import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or use SVGs if you prefer

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Welcome to Our Hospital",
    desc: "Providing expert care with compassion.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578991624414-276ef23a534f?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Meet Our Top Doctors",
    desc: "Highly qualified and experienced professionals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Book Appointments Easily",
    desc: "Your health, our priority.",
  },
];

const CarouselFade = () => {
  const [index, setIndex] = useState(0);

  // Auto play
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative mt-22 overflow-hidden h-[800px] w-full">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 " : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center text-white text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h3>
            <p className="text-lg md:text-xl">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CarouselFade;
