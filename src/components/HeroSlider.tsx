"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "hero_section_robo1.jpg",
    title: "Innovating Robotics for the Future",
    subtitle: "Discover next-gen humanoids and automation.",
  },
  {
    id: 2,
    image: "hero_section_robo2.jpg",
    title: "AI Meets Engineering",
    subtitle: "Transforming industries through intelligent design.",
  },
  {
    id: 3,
    image: "hero_section_robo3.jpg",
    title: "Smart. Precise. Powerful.",
    subtitle: "Experience technology that evolves with you.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{ zIndex: index === current ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            {index === current && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <motion.h1
                  key={slide.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  key={slide.subtitle}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                  className="text-lg md:text-2xl text-gray-200 max-w-2xl drop-shadow-md"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Arrows — moved above slides */}
      <div className="absolute inset-0 flex justify-between items-center px-6 z-50">
        <button
          onClick={prevSlide}
          className="text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
