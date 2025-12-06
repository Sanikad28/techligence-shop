"use client";
import { MessageSquare, Cpu, Headphones, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <MessageSquare size={32} />,
      label: "Professional Service",
      link: "/services",
      color: "bg-gray-900",
      bgColor: "hover:bg-gray-50"
    },
    {
      icon: <Cpu size={32} />,
      label: "Custom Robots",
      link: "/custom-robots",
      color: "bg-gray-800",
      bgColor: "hover:bg-gray-50"
    },
    {
      icon: <Headphones size={32} />,
      label: "Tech Support",
      link: "/support",
      color: "bg-gray-900",
      bgColor: "hover:bg-gray-50"
    },
    {
      icon: <Globe size={32} />,
      label: "Official Website",
      link: "/corporate",
      color: "bg-gray-800",
      bgColor: "hover:bg-gray-50"
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-gray-800 transition-colors duration-300">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
            Explore our comprehensive range of robotics solutions and professional services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Link key={i} href={service.link}>
              <div className={`group relative overflow-hidden bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${service.bgColor} border border-gray-100 hover:border-gray-300`}>
                {/* Icon container with professional effects */}
                <div className="relative flex flex-col items-center space-y-4">
                  <div className={`p-4 rounded-2xl ${service.color} shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                    <div className="text-white group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Professional text styling */}
                  <div className="relative text-center">
                    <p className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base">
                      {service.label}
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-500"></div>
                  </div>

                  {/* Subtle arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link href="/services">
            <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Explore All Services
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
