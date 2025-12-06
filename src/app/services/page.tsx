import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { MessageSquare, Clock, Users, Award, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <MessageSquare size={24} />,
      title: "Consultation & Planning",
      description: "Expert consultation to help you identify the right robotics solutions for your specific needs and requirements.",
      features: ["Requirements Analysis", "Solution Architecture", "Project Planning", "ROI Assessment"]
    },
    {
      icon: <Users size={24} />,
      title: "Implementation Support",
      description: "Comprehensive support throughout the implementation process, from installation to integration with existing systems.",
      features: ["System Integration", "Staff Training", "Process Optimization", "Quality Assurance"]
    },
    {
      icon: <Award size={24} />,
      title: "Maintenance & Optimization",
      description: "Ongoing maintenance and optimization services to ensure your robotics systems perform at peak efficiency.",
      features: ["Regular Maintenance", "Performance Monitoring", "Software Updates", "Technical Support"]
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency support for critical system failures and urgent technical issues.",
      features: ["Immediate Response", "On-site Support", "Remote Diagnostics", "Emergency Repairs"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Professional Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive robotics solutions and support services to maximize your investment
              and ensure optimal performance of your Unitree products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-xl hover:bg-white hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 hover:border-gray-200 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="bg-black text-white p-3 rounded-lg mr-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300 transform group-hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle size={16} className="text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 text-white p-12 rounded-lg hover:bg-gray-800 transition-colors duration-500">
            <h2 className="text-3xl font-bold text-center mb-8 hover:text-blue-300 transition-colors duration-300">Why Choose Our Professional Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">15+</div>
                <div className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">Years Experience</div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Decade of expertise in robotics implementation and support</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300">99.9%</div>
                <div className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">Uptime Guarantee</div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Industry-leading reliability for mission-critical operations</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300">24/7</div>
                <div className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">Support Coverage</div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Round-the-clock technical assistance and monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-300">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Contact our professional services team to discuss your specific requirements
            and discover how we can help optimize your robotics operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-md transform">
                Contact Us Today
              </button>
            </Link>
            <Link href="/quote">
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-md transform">
                Request a Quote
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
