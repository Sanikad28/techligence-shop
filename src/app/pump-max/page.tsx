import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function PumpMaxPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 hover:text-gray-700 transition-colors duration-300 cursor-default">Unitree PUMP MAX</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your fitness journey with the next generation of portable fitness technology.
              Precision engineering meets intelligent design for unmatched performance and convenience.
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
                src="/pump_max.jpg"
                alt="Unitree Pump Max"
                className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Next-Generation Fitness Technology</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Unitree PUMP MAX represents the pinnacle of portable fitness equipment,
                combining cutting-edge robotics technology with ergonomic design to deliver
                an unparalleled workout experience. Whether you're a professional athlete,
                fitness enthusiast, or someone just starting their fitness journey, PUMP MAX
                adapts to your needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Featuring intelligent resistance adjustment, real-time performance tracking,
                and compact portability, PUMP MAX brings gym-quality equipment to any location.
                Train anywhere, anytime, with the confidence that you're using the most
                advanced fitness technology available.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Intelligent Performance Tracking</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                PUMP MAX incorporates advanced sensors and AI algorithms to monitor your
                workout in real-time. Track metrics like force output, repetition speed,
                muscle activation patterns, and fatigue levels to optimize your training
                and prevent injury.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The integrated app provides personalized workout recommendations, progress
                analytics, and recovery insights. Whether you're building strength, improving
                endurance, or rehabilitating from injury, PUMP MAX ensures every workout is
                effective and safe.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time force and velocity monitoring</li>
                <li>• Muscle activation pattern analysis</li>
                <li>• Personalized workout recommendations</li>
                <li>• Injury prevention algorithms</li>
                <li>• Progress tracking and analytics</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 group">
              <img
                src="/product1/robo11.webp"
                alt="Performance Tracking"
                className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="group">
              <img
                src="/product2/robo21.webp"
                alt="Smart Resistance System"
                className="w-full h-[500px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Adaptive Resistance Technology</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the future of resistance training with PUMP MAX's adaptive resistance
                system. The device automatically adjusts resistance based on your performance,
                ensuring optimal challenge throughout your entire workout. No more manual
                adjustments or multiple machines needed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From gentle rehabilitation exercises to high-intensity power training, PUMP MAX
                provides smooth, consistent resistance that adapts to your strength curve.
                The electromagnetic resistance system delivers precise, variable resistance
                with millisecond accuracy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Compact and lightweight design makes PUMP MAX perfect for home use, travel,
                or professional training facilities. Set up in seconds and start training
                immediately, with no assembly required.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 hover:text-blue-600 transition-colors duration-300 cursor-default">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">Portable Design</h3>
                <p className="text-gray-600">
                  Lightweight and compact, perfect for home, office, or travel. Weighing just
                  8.5 lbs, PUMP MAX goes wherever you go.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">Smart Connectivity</h3>
                <p className="text-gray-600">
                  Sync with your smartphone or tablet for advanced analytics, workout planning,
                  and performance tracking.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">Battery Powered</h3>
                <p className="text-gray-600">
                  Up to 8 hours of continuous use on a single charge. USB-C fast charging
                  for quick power-ups.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">Multi-Exercise Support</h3>
                <p className="text-gray-600">
                  Perform hundreds of exercises including chest press, rows, squats, and
                  more with customizable attachments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">Safety First</h3>
                <p className="text-gray-600">
                  Built-in safety mechanisms prevent overexertion and provide emergency
                  stop functionality.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">Premium Build</h3>
                <p className="text-gray-600">
                  Aircraft-grade aluminum construction with medical-grade components
                  for durability and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 py-16 px-8 hover:bg-gray-100 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">Ready to Transform Your Training?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of athletes and fitness enthusiasts who have elevated their
              performance with Unitree PUMP MAX. Experience the difference that intelligent
              fitness technology can make.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/store">
                <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 transform">
                  Shop PUMP MAX
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
