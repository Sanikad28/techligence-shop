"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Users, Cpu, Zap } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "hero_section_robo1.jpg",
    title: "Pioneering Humanoid Robotics",
    subtitle: "Revolutionizing Human-Robot Collaboration",
    description: "Experience the next generation of intelligent robotics that seamlessly integrates with human environments. Our advanced humanoid robots combine sophisticated AI with precision engineering to create unparalleled assistance and automation solutions.",
    stats: [
      { icon: Users, value: "10,000+", label: "Robots Deployed" },
      { icon: Cpu, value: "99.9%", label: "Uptime Reliability" }
    ],
    cta: { primary: "Explore Humanoids", secondary: "Watch Demo", primaryLink: "/store", secondaryLink: "#" }
  },
  {
    id: 2,
    image: "hero_section_robo2.jpg",
    title: "AI-Driven Engineering Excellence",
    subtitle: "Transforming Industries Through Intelligence",
    description: "Harness the power of artificial intelligence fused with mechanical precision. Our robotics platform adapts, learns, and optimizes performance in real-time, delivering unprecedented efficiency across manufacturing, healthcare, and service industries.",
    stats: [
      { icon: Zap, value: "500%", label: "Productivity Boost" },
      { icon: Cpu, value: "24/7", label: "Continuous Operation" }
    ],
    cta: { primary: "Discover Solutions", secondary: "Case Studies", primaryLink: "/services", secondaryLink: "/portfolio" }
  },
  {
    id: 3,
    image: "hero_section_robo3.jpg",
    title: "Adaptive Technology Ecosystem",
    subtitle: "Intelligent Systems That Evolve With You",
    description: "Our comprehensive robotics ecosystem learns from every interaction, continuously improving performance and safety. From autonomous navigation to complex task execution, our technology adapts to your unique requirements and challenges.",
    stats: [
      { icon: Users, value: "50+", label: "Industry Applications" },
      { icon: Zap, value: "<1ms", label: "Response Time" }
    ],
    cta: { primary: "Start Innovation", secondary: "Contact Experts", primaryLink: "/custom-robots", secondaryLink: "/contact" }
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const IconComponent = slide.stats[0].icon;
          const IconComponent2 = slide.stats[1].icon;

          return (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.1
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 2, ease: "easeInOut" }
              }}
              style={{ zIndex: index === current ? 1 : 0 }}
            >
              {/* Background Image with Parallax Effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: index === current ? 1 : 1.05,
                  y: index === current ? 0 : 20
                }}
                transition={{ duration: 8, ease: "linear" }}
              >
                <img
                  src={`/${slide.image}`}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>

              {index === current && (
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                      {/* Content Section */}
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white space-y-8"
                      >
                        {/* Title */}
                        <div>
                          <motion.h1
                            key={slide.title}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                          >
                            {slide.title}
                          </motion.h1>
                          <motion.h2
                            key={slide.subtitle}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6"
                          >
                            {slide.subtitle}
                          </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.p
                          key={slide.description}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
                        >
                          {slide.description}
                        </motion.p>

                        {/* Statistics */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                          className="grid grid-cols-2 gap-6 mb-8"
                        >
                          <div className="flex items-center space-x-4 group cursor-pointer">
                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                              <IconComponent className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-2xl md:text-3xl font-bold text-white">{slide.stats[0].value}</div>
                              <div className="text-sm text-gray-300">{slide.stats[0].label}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 group cursor-pointer">
                            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                              <IconComponent2 className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                              <div className="text-2xl md:text-3xl font-bold text-white">{slide.stats[1].value}</div>
                              <div className="text-sm text-gray-300">{slide.stats[1].label}</div>
                            </div>
                          </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <Link href={slide.cta.primaryLink}>
                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                              <span>{slide.cta.primary}</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
                          <Link href={slide.cta.secondaryLink}>
                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="group px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                              {slide.cta.secondary === "Watch Demo" && <Play className="w-5 h-5" />}
                              <span>{slide.cta.secondary}</span>
                            </motion.button>
                          </Link>
                        </motion.div>
                      </motion.div>

                      {/* Visual Element */}
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="hidden lg:block"
                      >
                        <div className="relative">
                          {/* Floating elements for visual interest */}
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
                          />
                          <motion.div
                            animate={{
                              y: [0, 20, 0],
                              rotate: [0, -5, 0]
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                            className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced Navigation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arrows */}
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
          >
            <ChevronLeft size={32} />
          </motion.button>
        </div>
        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
          >
            <ChevronRight size={32} />
          </motion.button>
        </div>
      </div>

      {/* Enhanced Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-4 z-50">
        {slides.map((slide, i) => (
          <motion.button
            key={i}
            onClick={() => goToSlide(i)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              i === current ? "w-16 h-4" : "w-4 h-4"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-full h-full ${
              i === current
                ? "bg-gradient-to-r from-blue-400 to-purple-500"
                : "bg-white/40 hover:bg-white/60"
            }`} />
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 8, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-1000 ${
                i === current ? "w-8 bg-white" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Pause/Play Indicator */}
      {!isAutoPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-6 right-6 z-50"
        >
          <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span>Paused</span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
