import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Users, MessageCircle, BookOpen, HelpCircle, Lightbulb, TrendingUp, Award, Star } from "lucide-react";

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: <MessageCircle size={24} />,
      title: "Discussion Forums",
      description: "Connect with fellow robotics enthusiasts, share experiences, and get answers to your questions from the community.",
      stats: "10K+ Discussions"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Knowledge Base",
      description: "Access comprehensive guides, tutorials, and documentation contributed by experts and community members.",
      stats: "500+ Articles"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Project Showcase",
      description: "Share your robotics projects, get feedback, and inspire others with your innovative creations.",
      stats: "2K+ Projects"
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Q&A Section",
      description: "Ask questions and get expert answers from our community of robotics professionals and enthusiasts.",
      stats: "24/7 Support"
    }
  ];

  const recentTopics = [
    {
      title: "Optimizing PID control for quadruped robots",
      author: "RoboticsPro",
      replies: 23,
      views: 1450,
      time: "2 hours ago",
      category: "Technical Discussion"
    },
    {
      title: "ROS integration with Unitree Go1 - Best practices",
      author: "TechEnthusiast",
      replies: 18,
      views: 890,
      time: "4 hours ago",
      category: "Integration"
    },
    {
      title: "Custom payload attachment for industrial applications",
      author: "IndustryExpert",
      replies: 31,
      views: 2100,
      time: "6 hours ago",
      category: "Hardware"
    },
    {
      title: "AI vision systems for autonomous navigation",
      author: "VisionAI",
      replies: 27,
      views: 1650,
      time: "8 hours ago",
      category: "AI & Vision"
    }
  ];

  const topContributors = [
    { name: "RoboticsPro", posts: 1247, badge: "Expert" },
    { name: "TechEnthusiast", posts: 892, badge: "Contributor" },
    { name: "IndustryExpert", posts: 756, badge: "Mentor" },
    { name: "VisionAI", posts: 634, badge: "Specialist" }
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
                <Users size={40} />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Unitree Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of robotics enthusiasts, developers, and professionals in our vibrant community.
              Share knowledge, collaborate on projects, and stay updated with the latest in robotics technology.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">15K+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Community Members</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">25K+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Forum Posts</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">500+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Active Projects</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">50+</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Community Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Explore the various ways to engage with our robotics community and contribute to the advancement of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 hover:border-gray-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-black text-white p-3 rounded-lg group-hover:bg-gray-800 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{feature.stats}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Recent Discussions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Stay updated with the latest conversations and trending topics in our community.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {recentTopics.map((topic, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{topic.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span className="group-hover:text-gray-700 transition-colors duration-300">by {topic.author}</span>
                      <span className="group-hover:text-gray-700 transition-colors duration-300">{topic.time}</span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-blue-200 transition-colors duration-300">
                    {topic.category}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-6">
                  <span className="group-hover:text-gray-600 transition-colors duration-300">{topic.replies} replies</span>
                  <span className="group-hover:text-gray-600 transition-colors duration-300">{topic.views} views</span>
                </div>
              </div>
            ))}
          </div>

          {/* Top Contributors */}
          <div className="bg-gray-900 text-white p-8 rounded-lg hover:bg-gray-800 transition-colors duration-500">
            <h3 className="text-2xl font-bold mb-6 text-center hover:text-blue-300 transition-colors duration-300">Top Contributors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {topContributors.map((contributor, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-600 transition-colors duration-300">
                    <Users size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-300">{contributor.name}</h4>
                  <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">{contributor.posts} posts</p>
                  <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium group-hover:bg-blue-500 transition-colors duration-300">
                    {contributor.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-300">Join Our Community</h2>
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Connect with like-minded individuals, share your knowledge, and be part of the future of robotics.
            Our community welcomes developers, researchers, students, and robotics enthusiasts from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-md transform">
                Join Community
              </button>
            </Link>
            <Link href="/support">
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-md transform">
                Get Support
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

