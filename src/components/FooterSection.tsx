"use client";

export default function FooterSection() {
  return (
    <footer className="bg-white-100 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

        {/* INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFO</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Disclaimer</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
            <li><a href="#" className="hover:text-black">Become a Distributor</a></li>
          </ul>
        </div>

        {/* SERVICE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SERVICE</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">About Payment</a></li>
            <li><a href="#" className="hover:text-black">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms of Service</a></li>
            <li><a href="#" className="hover:text-black">Return & Refund Policy</a></li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Email: <a href="mailto:sales_global@unitree.cc" className="hover:text-black">sales_global@unitree.cc</a></li>
            <li>Business Name: Unitree Robotics</li>
            <li>Address: 3rd Floor, Building 1, Fengda Creative Park,<br /> No. 88 Dongliu Road, Binjiang District,<br /> Hangzhou City, Zhejiang Province, China</li>
            <li>Phone: <a href="tel:+8617621781139" className="hover:text-black">+86 176 2178 1139</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Unitree Robotics. All rights reserved.
      </div>
    </footer>
  );
}
