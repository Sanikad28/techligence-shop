import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Users } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone size={32} />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST",
      bgColor: "bg-gray-900",
      bgHover: "hover:bg-gray-50"
    },
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      description: "Send detailed inquiries and receive written responses",
      contact: "info@unitree.com",
      availability: "24/7 Response within 24 hours",
      bgColor: "bg-gray-800",
      bgHover: "hover:bg-gray-50"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Live Chat",
      description: "Get instant help through our online chat system",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST",
      bgColor: "bg-gray-900",
      bgHover: "hover:bg-gray-50"
    }
  ];

  const departments = [
    {
      icon: <Headphones size={20} />,
      name: "Technical Support",
      email: "support@unitree.com",
      description: "Product support, troubleshooting, and technical assistance"
    },
    {
      icon: <Users size={20} />,
      name: "Sales & Partnerships",
      email: "sales@unitree.com",
      description: "Business inquiries, partnerships, and custom solutions"
    },
    {
      icon: <Mail size={20} />,
      name: "General Inquiries",
      email: "info@unitree.com",
      description: "General questions and company information"
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
                <Mail size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team of experts. We're here to help you find the perfect robotics solution
              for your needs and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">How Can We Help You?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Choose the contact method that works best for you. Our team is ready to assist with any questions or requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className={`group relative bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${method.bgHover} border border-gray-100 hover:border-gray-300`}>
                {/* Icon with professional styling */}
                <div className={`relative ${method.bgColor} text-white p-5 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-105 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    {method.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-gray-900">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <Clock size={14} />
                    {method.availability}
                  </div>
                </div>

                {/* Action button */}
                <button className={`mt-6 px-6 py-3 ${method.bgColor} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105`}>
                  Contact Now
                </button>
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 hover:text-gray-800 transition-colors duration-300">Contact by Department</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white p-3 rounded-lg mr-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                      {dept.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{dept.name}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{dept.email}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="bg-gray-900 text-white p-12 rounded-lg hover:bg-gray-800 transition-colors duration-500">
            <h2 className="text-3xl font-bold text-center mb-8 hover:text-blue-300 transition-colors duration-300">Global Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <MapPin size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">Headquarters</h3>
                <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">Shenzhen, China</p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">123 Tech Street, Innovation District</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <MapPin size={32} className="text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">Americas</h3>
                <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">San Francisco, CA</p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">456 Market Street, Suite 200</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex justify-center mb-4">
                  <MapPin size={32} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">Europe</h3>
                <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">Berlin, Germany</p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">789 Innovation Boulevard</p>
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

