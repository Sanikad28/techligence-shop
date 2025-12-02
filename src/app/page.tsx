import HeroSlider from "@/components/HeroSlider";
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSlider />

      <VideoSection />

      {/* Our Story + Pump Max Section */}
      <section className="py-24 bg-white space-y-24">
        {/* Our Story */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 md:px-8">
          <div>
            <img
              src="/our_story.png"
              alt="Our Story"
              className="w-full h-[420px] object-cover shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unitree is redefining the future of robotics — blending intelligent design
              with world-class engineering. From robotic dogs to humanoids, we strive to make
              robotics accessible, reliable, and impactful for everyone.
            </p>
            <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all w-fit">
              Read More
            </button>
          </div>
        </div>

        {/* Unitree Pump Max */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 md:px-8">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-4">Unitree PUMP MAX</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Experience the next generation of portable fitness technology with Unitree PUMP MAX.
              Designed for precision, strength, and smart performance tracking — train anywhere,
              anytime.
            </p>
            <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all w-fit">
              Learn More
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/pump_max.webp"
              alt="Unitree Pump Max"
              className="w-full h-[420px] object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      <ServicesSection />
      <FooterSection />
    </main>
  );
}
