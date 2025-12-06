"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";



export default function Navbar() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount } = useCart();

  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);

      // fetch profile role for navbar admin link
      try {
        if (data.user?.id) {
          const { data: profile, error } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", data.user.id)
            .single();

          if (!error && profile) setRole(profile.role ?? null);
          else setRole(null);
        } else {
          setRole(null);
        }
      } catch (err) {
        setRole(null);
      }
    }
    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user?.id) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (!error && profile) setRole(profile.role ?? null);
        else setRole(null);
      } else {
        setRole(null);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Store", href: "/store" },
    { label: "Professional", href: "/professional" },
    { label: "Education & Industry", href: "/education" },
    { label: "Humanoid Robot", href: "/humanoid" },
    { label: "Accessories", href: "/accessories" },
    { label: "Contact", href: "/contact" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Uni", href: "/uni" },
  ];

  // show dashboard for admins
  const showDashboard = !!user && role === "admin";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-3 border-b border-gray-300/30 relative">
        <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-15 w-10 object-contain group-hover:scale-105 transition-all duration-300"
          />
          <span className="text-1xl font-bold text-gray-800 italic font-[cursive] tracking-wide group-hover:text-gray-900 transition-all duration-300">
            Techligence
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          {/* PROFILE ICON LOGIC */}
          {!user ? (
            <Link href="/profile" className="group relative">
              <div className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:text-gray-900 transition-all duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 20.25a8.25 8.25 0 0115 0"
                  />
                </svg>
              </div>
            </Link>
          ) : (
            <Link href="/profile/details" className="group relative">
              <span className="text-sm font-semibold hover:text-gray-900 transition-all duration-300 relative">
                Profile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          )}

          {/* LOGOUT BUTTON */}
          {user && (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold hover:text-gray-900 transition-all duration-300 relative group"
            >
              Logout
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </button>
          )}

          {/* SEARCH ICON */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="group relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:text-gray-900 transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </button>

          {/* CART */}
          <Link href="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:text-gray-900 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h14"
                />
              </svg>
            </div>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold rounded-full px-2 py-[1px] transition-all duration-300">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {showSearch && (
          <div className="absolute right-10 top-16 w-72 bg-white shadow-2xl rounded-lg p-4 border border-gray-200 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <p className="text-gray-500 text-sm mt-3 flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Search functionality coming soon
            </p>
          </div>
        )}
      </div>

      <nav className="flex justify-center items-center space-x-8 py-4 text-sm font-medium">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <span
                className={`relative cursor-pointer group px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                  active ? "font-semibold text-gray-900 bg-gray-100" : "hover:text-gray-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-[2px] bg-gray-900 rounded-full transition-all duration-500 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
                {!active && (
                  <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                )}
              </span>
            </Link>
          );
        })}

        {showDashboard && (
          <Link href="/admin/products">
            <span
              className={`relative cursor-pointer group px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                pathname === "/admin/products" ? "font-semibold text-gray-900 bg-gray-100" : "hover:text-gray-900"
              }`}
            >
              Dashboard
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-[2px] bg-gray-900 rounded-full transition-all duration-500 ${
                  pathname === "/admin/products" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
              {pathname !== "/admin/products" && (
                <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              )}
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
}
