import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Calculator, FileText, Clock, CheckCircle, DollarSign, Users, Settings, Shield } from "lucide-react";

export default function QuotePage() {
  const services = [
    {
      icon: <Settings size={24} />,
      title: "Professional Services",
      description: "Consultation, implementation, and ongoing support services",
      startingPrice: "Contact for quote"
    },
    {
      icon: <Calculator size={24} />,
      title: "Custom Robotics",
      description: "Bespoke robot design and manufacturing solutions",
      startingPrice: "$50,000+"
    },
    {
      icon: <Shield size={24} />,
      title: "Technical Support",
      description: "Comprehensive support packages and maintenance plans",
      startingPrice: "$500/month"
    },
    {
      icon: <FileText size={24} />,
      title: "Training & Certification",
      description: "Staff training and certification programs",
      startingPrice: "$2,500"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Submit Request",
      description: "Fill out our detailed quote request form with your specific requirements"
    },
    {
      step: "2",
      title: "Initial Consultation",
      description: "Our experts review your needs and schedule a detailed consultation call"
    },
    {
      step: "3",
      title: "Custom Proposal",
      description: "Receive a tailored proposal with pricing, timeline, and implementation plan"
    },
    {
      step: "4",
      title: "Project Kickoff",
      description: "Begin your project with our dedicated team and ongoing support"
    }
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
                <Calculator size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Request a Quote</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a customized quote for Unitree robotics solutions. Our experts will work with you to
              create a tailored proposal that meets your specific requirements and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Our Services & Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Explore our range of professional services and get an idea of typical pricing structures.
              All quotes are customized based on your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-xl hover:bg-white hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 hover:border-gray-200 group cursor-pointer">
                <div className="bg-black text-white p-3 rounded-lg w-fit mb-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300 text-sm">{service.description}</p>
                <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.startingPrice}</div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">Our Quote Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-900 text-white p-12 rounded-lg hover:bg-gray-800 transition-colors duration-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 hover:text-blue-300 transition-colors duration-300">Ready to Get Started?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
                Fill out our quote request form and our team will provide you with a detailed,
                customized proposal within 24-48 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-4 hover:text-blue-300 transition-colors duration-300">What We Need From You</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center hover:text-gray-200 transition-colors duration-300">
                      <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      Project scope and objectives
                    </li>
                    <li className="flex items-center hover:text-gray-200 transition-colors duration-300">
                      <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      Timeline requirements
                    </li>
                    <li className="flex items-center hover:text-gray-200 transition-colors duration-300">
                      <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      Budget considerations
                    </li>
                    <li className="flex items-center hover:text-gray-200 transition-colors duration-300">
                      <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      Technical specifications
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-4 hover:text-green-300 transition-colors duration-300">Response Time</h3>
                  <div className="flex items-center mb-2">
                    <Clock size={20} className="text-blue-400 mr-3" />
                    <span className="hover:text-blue-300 transition-colors duration-300">Initial response: Within 24 hours</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FileText size={20} className="text-green-400 mr-3" />
                    <span className="hover:text-green-300 transition-colors duration-300">Detailed quote: Within 48 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-purple-400 mr-3" />
                    <span className="hover:text-purple-300 transition-colors duration-300">Consultation call: Within 1 week</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 hover:text-blue-300 transition-colors duration-300">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-1 hover:text-blue-300 transition-colors duration-300">Sales Team</p>
                    <p className="text-gray-300 hover:text-gray-200 transition-colors duration-300">sales@unitree.com</p>
                    <p className="text-gray-300 hover:text-gray-200 transition-colors duration-300">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1 hover:text-green-300 transition-colors duration-300">Business Hours</p>
                    <p className="text-gray-300 hover:text-gray-200 transition-colors duration-300">Mon-Fri: 9AM - 6PM EST</p>
                    <p className="text-gray-300 hover:text-gray-200 transition-colors duration-300">Response time: 24 hours</p>
                  </div>
                  <div className="pt-4">
                    <Link href="/contact">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 hover:scale-105 hover:shadow-lg transform">
                        Contact Sales Team
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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

