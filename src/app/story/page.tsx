import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 hover:text-gray-700 transition-colors duration-300 cursor-default">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Unitree is revolutionizing the robotics industry through innovation,
              engineering excellence, and a commitment to making advanced technology accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="group">
              <img
                src="/our_story.png"
                alt="Our Story"
                className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">The Beginning</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a vision to democratize robotics, Unitree started as a small team of
                engineers passionate about creating intelligent machines that could assist and
                enhance human capabilities. Our journey began with a simple question: "How can we
                make robotics accessible to everyone?"
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our humble beginnings, we've grown into a global leader in robotics innovation,
                developing cutting-edge solutions that range from companion robots to advanced
                humanoid systems. Our commitment to excellence and user-centric design has driven
                us to create products that are not just technologically advanced, but also
                intuitive and reliable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Innovation Through Research</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At the heart of Unitree lies a dedication to cutting-edge research and development.
                Our team of world-class engineers, AI specialists, and robotics experts work
                tirelessly to push the boundaries of what's possible in robotics technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We invest heavily in R&D to ensure that our products incorporate the latest
                advancements in artificial intelligence, machine learning, and mechanical engineering.
                This commitment to innovation allows us to deliver solutions that are not only
                powerful but also safe, reliable, and user-friendly.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Advanced AI algorithms for intelligent behavior</li>
                <li>• Robust mechanical design for durability</li>
                <li>• Intuitive user interfaces and controls</li>
                <li>• Continuous software updates and improvements</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 group">
              <img
                src="/hero_section_robo1.jpg"
                alt="Research and Development"
                className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="group">
              <img
                src="/hero_section_robo2.jpg"
                alt="Global Impact"
                className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Global Impact and Accessibility</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unitree's mission extends beyond creating innovative products. We believe that
                robotics should be accessible to people from all walks of life, regardless of
                their technical expertise or background. This philosophy drives everything we do,
                from our product design to our customer support and educational initiatives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                By making advanced robotics technology available and affordable, we're empowering
                individuals, businesses, and communities to harness the power of robotics for
                education, entertainment, research, and practical applications. Our products
                serve diverse markets, from educational institutions to professional researchers,
                from hobbyists to industrial applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As we look to the future, Unitree remains committed to pushing the boundaries of
                robotics while ensuring that our technology serves humanity's greater good.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 py-16 px-8 hover:bg-gray-100 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Ready to Experience the Future?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our range of innovative robotics products and discover how Unitree
              can enhance your life, work, or research.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/store">
                <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 transform">
                  Shop Now
                </button>
              </Link>
              <Link href="/">
                <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300 transform">
                  Back to Home
                </button>
              </Link>
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
