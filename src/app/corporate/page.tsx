import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Globe, MapPin, Users, Award, Target, Heart, Building, Calendar } from "lucide-react";

export default function CorporatePage() {
  const stats = [
    { number: "2016", label: "Founded", icon: <Calendar size={24} /> },
    { number: "500+", label: "Employees", icon: <Users size={24} /> },
    { number: "25+", label: "Countries", icon: <MapPin size={24} /> },
    { number: "100+", label: "Patents", icon: <Award size={24} /> }
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: "Innovation",
      description: "Pushing the boundaries of robotics technology through continuous research and development."
    },
    {
      icon: <Heart size={24} />,
      title: "User-Centric",
      description: "Designing solutions that prioritize user experience and accessibility for everyone."
    },
    {
      icon: <Building size={24} />,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and reliability in everything we create."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Impact",
      description: "Making advanced robotics technology accessible worldwide for the benefit of humanity."
    }
  ];

  const leadership = [
    {
      name: "Dr. Zhang Wei",
      position: "CEO & Founder",
      bio: "PhD in Robotics from MIT, with over 15 years of experience in autonomous systems and AI.",
      image: "/hero_section_robo1.jpg"
    },
    {
      name: "Dr. Lisa Chen",
      position: "CTO",
      bio: "Former Google AI researcher specializing in machine learning and computer vision systems.",
      image: "/hero_section_robo2.jpg"
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Product",
      bio: "Product visionary with experience at Boston Dynamics and Tesla's robotics division.",
      image: "/hero_section_robo3.jpg"
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
                <Globe size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">About Unitree</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unitree is revolutionizing the robotics industry by making advanced technology accessible,
              reliable, and impactful for everyone. Founded in 2016, we're committed to democratizing robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="bg-black text-white p-3 rounded-full w-fit mx-auto mb-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To democratize advanced robotics technology by making it accessible, affordable, and reliable for everyone.
                We believe that robotics should enhance human capabilities and improve quality of life across all sectors of society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through continuous innovation and user-centric design, we're breaking down barriers that have historically limited
                access to sophisticated robotics technology, from research institutions to everyday consumers.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A world where robotics technology seamlessly integrates into daily life, enhancing human potential and solving
                complex challenges across industries. We envision a future where advanced robotics is as common and accessible
                as smartphones are today.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By combining cutting-edge AI, precision engineering, and human-centered design, we're building the foundation
                for a more capable and connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              The principles that guide everything we do at Unitree, from product development to customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="bg-black text-white p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Meet the visionaries driving Unitree's mission to democratize robotics technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer group border border-gray-100 hover:border-gray-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{leader.name}</h3>
                <p className="text-gray-600 font-medium mb-4 group-hover:text-gray-700 transition-colors duration-300">{leader.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Unitree operates worldwide, serving customers and partners across multiple continents with
              localized support and regional offices.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Headquarters</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Shenzhen, China</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">R&D and Manufacturing</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Americas</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">San Francisco, CA</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Sales & Support</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Europe</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Berlin, Germany</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Engineering & Research</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Asia Pacific</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Singapore</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Regional Operations</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Middle East</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Dubai, UAE</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Business Development</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Africa</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Johannesburg, South Africa</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Market Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-300">Join the Unitree Family</h2>
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Whether you're looking for career opportunities, partnership possibilities, or just want to learn more
            about our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/careers">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-md transform">
                View Careers
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-md transform">
                Contact Us
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
