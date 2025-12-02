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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-3 border-b border-gray-300/30 relative">
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <img src="/logo.jpg" alt="Logo" className="h-15 w-10 object-contain" />
          <span className="text-1xl font-bold text-gray-800 italic font-[cursive] tracking-wide">
            Techligence
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          {/* PROFILE ICON LOGIC */}
          {!user ? (
            <Link href="/profile" className="hover:opacity-75 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>
            </Link>
          ) : (
            <Link href="/profile/details" className="hover:opacity-75 transition-opacity text-sm font-semibold">
              Profile
            </Link>
          )}

          {/* LOGOUT BUTTON */}
          {user && (
            <button onClick={handleLogout} className="text-sm font-semibold hover:opacity-75">
              Logout
            </button>
          )}

          {/* SEARCH ICON */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </button>

          {/* CART */}
          <Link href="/cart" className="relative hover:opacity-75 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h14"
              />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-[1px]">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {showSearch && (
          <div className="absolute right-10 top-16 w-72 bg-white shadow-lg rounded-lg p-3 border z-50">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded"
            />
            <p className="text-gray-500 text-sm mt-2">Search coming soon</p>
          </div>
        )}
      </div>

      <nav className="flex justify-center items-center space-x-10 py-3 text-sm font-medium">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <span
                className={`relative cursor-pointer group ${
                  active ? "font-semibold" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-[3px] h-[2px] transition-all duration-300 ${
                    active ? "w-full bg-current" : "w-0 group-hover:w-full bg-current"
                  }`}
                />
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
