import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Cpu, Settings, Zap, Shield, Eye, Cog } from "lucide-react";

export default function CustomRobotsPage() {
  const customizationOptions = [
    {
      icon: <Settings size={24} />,
      title: "Hardware Customization",
      description: "Tailored mechanical components, sensors, and actuators designed for your specific application requirements.",
      features: ["Custom Form Factors", "Specialized Sensors", "Enhanced Payload Capacity", "Environmental Adaptations"]
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Optimized performance characteristics including speed, precision, endurance, and specialized capabilities.",
      features: ["High-Speed Operation", "Precision Movement", "Extended Battery Life", "Multi-Task Capabilities"]
    },
    {
      icon: <Shield size={24} />,
      title: "Safety & Reliability",
      description: "Enhanced safety features and reliability systems for critical applications and harsh environments.",
      features: ["Redundant Systems", "Fail-Safe Mechanisms", "Environmental Protection", "Quality Assurance"]
    },
    {
      icon: <Eye size={24} />,
      title: "Advanced Perception",
      description: "Cutting-edge vision systems, AI algorithms, and sensor integration for intelligent operation.",
      features: ["Computer Vision", "Object Recognition", "Environmental Mapping", "Autonomous Navigation"]
    }
  ];

  const applications = [
    "Industrial Automation",
    "Search & Rescue",
    "Medical Assistance",
    "Agricultural Robotics",
    "Security & Surveillance",
    "Education & Research",
    "Entertainment & Media",
    "Custom Enterprise Solutions"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white p-4 rounded-full">
                <Cpu size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Custom Robots</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design and build bespoke robotic solutions tailored to your unique requirements.
              From specialized hardware to custom software, we create robots that perfectly match your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive customization capabilities ensure your robot meets the exact specifications
              and performance requirements for your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {customizationOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-xl hover:bg-white hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 hover:border-gray-200 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="bg-black text-white p-3 rounded-lg mr-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{option.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300 transform group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Applications */}
          <div className="bg-gray-900 text-white p-12 rounded-lg mb-16 hover:bg-gray-800 transition-colors duration-500">
            <h2 className="text-3xl font-bold text-center mb-8 hover:text-blue-300 transition-colors duration-300">Application Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {applications.map((application, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <span className="text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">{application}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Our Development Process</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              We follow a structured approach to ensure your custom robot meets all requirements and exceeds expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">1</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Consultation</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Detailed requirements gathering and feasibility assessment</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">2</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Design</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Custom design and prototyping based on your specifications</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">3</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Development</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Manufacturing and software development with rigorous testing</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">4</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Deployment</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Installation, training, and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-300">Ready to Build Your Custom Robot?</h2>
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Contact our engineering team to discuss your custom robotics requirements
            and receive a personalized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-md transform">
                Start Your Project
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-md transform">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link href="/">
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 group">
              <div className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</div>
              <span className="font-medium">Back to Home</span>
            </button>
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
