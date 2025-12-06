"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* INFO */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">
              INFO
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/story" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Blog", href: "#" },
                { label: "FAQs", href: "/support" },
                { label: "Contact Us", href: "/contact" },
                { label: "Become a Distributor", href: "/corporate" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="group relative cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICE */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">
              SERVICE
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "About Payment", href: "/payment" },
                { label: "Shipping Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Return & Refund Policy", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="group relative cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-white">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a
                    href="mailto:sales_global@unitree.cc"
                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                  >
                    sales_global@unitree.cc
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a
                    href="tel:+8617621781139"
                    className="text-white hover:text-green-400 transition-colors duration-300 text-sm font-medium"
                  >
                    +86 176 2178 1139
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    3rd Floor, Building 1, Fengda Creative Park,<br />
                    No. 88 Dongliu Road, Binjiang District,<br />
                    Hangzhou City, Zhejiang Province, China
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[
              { icon: Facebook, href: "#", color: "hover:text-gray-300" },
              { icon: Twitter, href: "#", color: "hover:text-gray-300" },
              { icon: Instagram, href: "#", color: "hover:text-gray-300" },
              { icon: Youtube, href: "#", color: "hover:text-gray-300" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700 mt-8">
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
            © {new Date().getFullYear()} Unitree Robotics. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-xs text-gray-500">
            <span className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Privacy</span>
            <span className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Terms</span>
            <span className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
