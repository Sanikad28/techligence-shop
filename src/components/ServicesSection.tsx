"use client";
import { MessageSquare, Cpu, Headphones, Globe } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { icon: <MessageSquare size={30} />, label: "Professional Service" },
    { icon: <Cpu size={30} />, label: "Custom Robots" },
    { icon: <Headphones size={30} />, label: "Tech Support" },
    { icon: <Globe size={30} />, label: "Official Website" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center space-y-2 text-gray-800 hover:scale-105 transition-transform"
          >
            <div className="bg-white p-3 rounded-full shadow-sm">
              {service.icon}
            </div>
            <p className="font-medium text-sm md:text-base">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
