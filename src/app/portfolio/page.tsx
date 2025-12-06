import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Eye, Cpu, Factory, Heart, Zap, Shield, Award, Users, ExternalLink, Play } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Industrial Automation Suite",
      category: "Manufacturing",
      description: "Complete robotic automation solution for automotive assembly line, increasing production efficiency by 300%.",
      image: "/product1/robo11.webp",
      features: ["Precision Assembly", "Quality Control", "24/7 Operation"],
      client: "Major Automotive Manufacturer",
      duration: "12 months",
      impact: "300% efficiency increase",
      demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual industrial robotics demo
    },
    {
      title: "Medical Assistance Robot",
      category: "Healthcare",
      description: "Advanced robotic system for hospital patient care and medication delivery with AI-powered safety features.",
      image: "/product2/robo21.webp",
      features: ["Patient Monitoring", "Medication Delivery", "Sterilization Protocol"],
      client: "Regional Hospital Network",
      duration: "8 months",
      impact: "Reduced response time by 75%",
      demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual medical robotics demo
    },
    {
      title: "Agricultural Robotics Platform",
      category: "Agriculture",
      description: "Multi-purpose farming robot capable of planting, monitoring, and harvesting with precision agriculture technology.",
      image: "/product3/robo31.webp",
      features: ["GPS Navigation", "Crop Analysis", "Automated Harvesting"],
      client: "Agricultural Cooperative",
      duration: "15 months",
      impact: "40% yield increase",
      demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual agricultural robotics demo
    },
    {
      title: "Search & Rescue Drone System",
      category: "Emergency Services",
      description: "Autonomous drone network for disaster response and search operations in challenging environments.",
      image: "/hero_section_robo1.jpg",
      features: ["Thermal Imaging", "Terrain Mapping", "Communication Relay"],
      client: "Emergency Response Agency",
      duration: "10 months",
      impact: "Search time reduced by 60%",
      demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual drone rescue demo
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Award size={24} /> },
    { number: "25+", label: "Happy Clients", icon: <Users size={24} /> },
    { number: "98%", label: "Success Rate", icon: <Shield size={24} /> },
    { number: "3", label: "Years Experience", icon: <Zap size={24} /> }
  ];

  const technologies = [
    "AI & Machine Learning",
    "Computer Vision",
    "ROS Framework",
    "Industrial Automation",
    "Sensor Integration",
    "Custom Firmware",
    "Mobile Robotics",
    "Human-Robot Interaction"
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
                <Eye size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our successful robotics implementations across industries. Each project showcases
              our commitment to innovation, quality, and delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Explore our most impactful robotics implementations and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div>
                      <span className="font-semibold text-gray-900">Client:</span>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Duration:</span>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">Impact:</span>
                      <p className="text-blue-600 font-medium">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 group">
                        <Play size={16} className="group-hover:scale-110 transition-transform" />
                        Watch Demo
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300">
                        Get Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Our projects leverage cutting-edge technologies and frameworks to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-gray-200">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-white hover:text-blue-300 transition-colors duration-300">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 hover:text-gray-200 transition-colors duration-300">
            Join our portfolio of successful implementations. Let's discuss how we can help bring your robotics vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-md transform">
                Start Your Project
              </button>
            </Link>
            <Link href="/custom-robots">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-md transform">
                Learn About Custom Solutions
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

