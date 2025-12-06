import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Headphones, MessageCircle, FileText, Download, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I set up my new Unitree robot?",
      answer: "Our comprehensive setup guide is available in the downloads section. For personalized assistance, contact our support team who will guide you through the entire setup process."
    },
    {
      question: "What should I do if my robot isn't responding?",
      answer: "First, check the power source and battery level. Try resetting the device by holding the power button for 10 seconds. If the issue persists, contact our technical support team."
    },
    {
      question: "How often should I perform maintenance on my robot?",
      answer: "Regular maintenance should be performed every 3-6 months depending on usage. We provide detailed maintenance schedules and can schedule professional servicing."
    },
    {
      question: "Can I update the software on my Unitree device?",
      answer: "Yes, software updates are available through our official app or website. We recommend keeping your device updated for optimal performance and security."
    },
    {
      question: "What is covered under the warranty?",
      answer: "Our standard warranty covers manufacturing defects for 2 years. Extended warranty options are available for comprehensive coverage including accidental damage."
    }
  ];

  const supportOptions = [
    {
      icon: <Phone size={24} />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      description: "Send detailed inquiries and receive written responses",
      contact: "support@unitree.com",
      availability: "24/7 Response within 24 hours"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Live Chat",
      description: "Get instant help through our online chat system",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST"
    }
  ];

  const resources = [
    {
      icon: <FileText size={20} />,
      title: "User Manuals",
      description: "Comprehensive guides for all Unitree products",
      link: "/downloads/manuals"
    },
    {
      icon: <Download size={20} />,
      title: "Software Updates",
      description: "Latest firmware and software updates",
      link: "/downloads/updates"
    },
    {
      icon: <FileText size={20} />,
      title: "Troubleshooting Guide",
      description: "Common issues and solutions",
      link: "/downloads/troubleshooting"
    },
    {
      icon: <FileText size={20} />,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/tutorials"
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
                <Headphones size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Technical Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the help you need with our comprehensive technical support services.
              From troubleshooting to advanced technical assistance, we're here to ensure your success with Unitree products.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the support option that best fits your needs. Our team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl hover:bg-white hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 hover:border-gray-200 group cursor-pointer">
                <div className="bg-black text-white p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{option.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{option.description}</p>
                <div className="text-sm text-gray-700 font-medium mb-2 group-hover:text-gray-900 transition-colors duration-300">{option.contact}</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{option.availability}</div>
              </div>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-16">
            <div className="flex items-center">
              <CheckCircle size={24} className="text-green-600 mr-3" />
              <div>
                <h3 className="font-semibold text-green-800">All Systems Operational</h3>
                <p className="text-green-700 text-sm">Our support services are fully operational. Average response time: 2 hours.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">Support Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.link}>
                  <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer group border border-gray-100 hover:border-gray-200">
                    <div className="bg-black text-white p-3 rounded-full w-fit mx-auto mb-3 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{resource.title}</h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{resource.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-red-50 hover:bg-red-100 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <div className="flex justify-center mb-4">
            <AlertCircle size={32} className="text-red-600 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors duration-300">Emergency Support</h2>
          <p className="text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
            For critical system failures or urgent technical issues requiring immediate attention,
            contact our emergency support line.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-red-100 hover:border-red-200">
            <div className="text-2xl font-bold text-red-600 mb-2 hover:text-red-700 transition-colors duration-300">Emergency Hotline</div>
            <div className="text-lg font-semibold text-gray-900 mb-1 hover:text-gray-800 transition-colors duration-300">+1 (555) 911-HELP</div>
            <div className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300">24/7 Emergency Support</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-300">Still Need Help?</h2>
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Can't find what you're looking for? Our support team is here to help with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-md transform">
                Contact Support
              </button>
            </Link>
            <Link href="/community">
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-md transform">
                Community Forum
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
