import HeroSlider from "@/components/HeroSlider";
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSlider />

      <VideoSection />

      {/* Our Story + Pump Max Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 space-y-24">
        {/* Our Story */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-4 md:px-8">
          <div className="group relative">
            <img
              src="/our_story.png"
              alt="Our Story"
              className="w-full h-[420px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 hover:text-gray-800 transition-all duration-300">
                Our Story
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg hover:text-gray-800 transition-colors duration-300">
              <strong className="text-gray-900">Revolutionizing Robotics:</strong> Unitree is redefining the future of robotics by blending intelligent design
              with world-class engineering. From robotic dogs to humanoids, we strive to make robotics accessible,
              reliable, and impactful for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 hover:text-gray-700 transition-colors duration-300">
              Our journey began with a bold vision: to make advanced robotics accessible to everyone,
              from researchers to everyday innovators. We combine cutting-edge AI, precision engineering,
              and human-centered design to create technology that enhances lives and expands possibilities.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { text: "Advanced AI", bgColor: "bg-gray-100", hoverColor: "hover:bg-gray-200" },
                { text: "Precision Engineering", bgColor: "bg-gray-100", hoverColor: "hover:bg-gray-200" },
                { text: "Human-Centered Design", bgColor: "bg-gray-100", hoverColor: "hover:bg-gray-200" }
              ].map((tag, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 ${tag.bgColor} text-gray-800 rounded-lg text-sm font-medium transform hover:scale-105 transition-all duration-300 cursor-pointer ${tag.hoverColor}`}
                >
                  {tag.text}
                </div>
              ))}
            </div>
            <Link href="/story">
              <button className="group px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-black transition-all duration-300 rounded-xl transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Discover Our Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Unitree Pump Max */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-4 md:px-8">
          <div className="flex flex-col justify-center order-2 md:order-1 space-y-6">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 hover:text-gray-800 transition-all duration-300">
                Unitree PUMP MAX
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg hover:text-gray-800 transition-colors duration-300">
              <strong className="text-gray-900">Next-Generation Fitness Technology:</strong> Experience the next generation of portable fitness technology with Unitree PUMP MAX.
              Designed for precision, strength, and smart performance tracking — train anywhere, anytime.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 hover:text-gray-700 transition-colors duration-300">
              Transform your training with intelligent resistance that adapts to your strength, tracks your progress in real-time,
              and provides personalized coaching wherever you go. Our AI-powered system analyzes your form, prevents injury,
              and optimizes every rep for maximum gains.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "500+", label: "Exercises" },
                { value: "8hrs", label: "Battery Life" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/pump-max">
              <button className="group px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-black transition-all duration-300 rounded-xl transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/pump_max.jpg"
              alt="Unitree Pump Max"
              className="w-full h-[420px] object-cover rounded-2xl shadow-2xl transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your World with
              <span className="block text-gray-300">
                Unitree Technology
              </span>
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience innovation that adapts to you. From intelligent robotics to revolutionary fitness tech,
              discover products that evolve with your needs and exceed your expectations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/store">
              <button className="px-10 py-5 bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all duration-300 rounded-2xl transform hover:scale-105">
                <span className="flex items-center gap-3">
                  Explore Our Products
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/story">
              <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-2xl transform hover:scale-105">
                <span className="flex items-center gap-3">
                  Learn Our Story
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Key features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Robotics", desc: "Cutting-edge AI technology" },
              { title: "Smart Performance", desc: "Real-time optimization" },
              { title: "Precision Engineering", desc: "Industry-leading accuracy" }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
