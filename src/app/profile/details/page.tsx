"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Tab = "profile" | "orders" | "wishlist" | "cancelled";

export default function ProfileDetails() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch user profile on mount
  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) console.error(error);
      if (data) setProfile(data);
      setLoading(false);
    }

    fetchProfile();
  }, []);

  // Fetch orders & wishlist when tab changes
  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch("/api/orders");
      const data = await res.json();
      if (data.orders) setOrders(data.orders);
    }

    async function fetchWishlist() {
      const res = await fetch("/api/wishlist");
      const data = await res.json();
      if (data.wishlist) setWishlist(data.wishlist);
    }

    if (activeTab === "orders") fetchOrders();
    if (activeTab === "wishlist") fetchWishlist();
  }, [activeTab]);


  const handleDeleteAccount = async () => {
    if (!confirm("Are you sure? This action will permanently delete your account and all data.")) return;

    setDeleteLoading(true);

    // 1) Get current auth user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // 2) Delete from auth via API route
    const response = await fetch("/api/delete-account", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.id }),
    });

    if (!response.ok) {
      setDeleteLoading(false);
      alert("Failed to delete account");
      return;
    }

    // 3) Logout user
    await supabase.auth.signOut();
    router.push("/");
  };


  if (loading) return <p className="pt-20 text-center">Loading...</p>;
  if (!profile) return <p className="pt-20 text-center">User not found.</p>;

  return (
    <div className="min-h-screen px-4 pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Hi, {profile.first_name || "User"}</h2>
          <Link href="/profile/edit" className="text-blue-600 hover:underline font-medium">
            Edit Profile
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {["profile", "orders", "wishlist", "cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`flex-1 py-3 text-center font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "profile" && (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">First Name:</span>
                <span>{profile.first_name || "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Last Name:</span>
                <span>{profile.last_name || "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{profile.email || "-"}</span>
              </div>

              {/* DELETE ACCOUNT BUTTON */}
              <button
                onClick={handleDeleteAccount}
                disabled={deleteLoading}
                className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                {deleteLoading ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <p className="text-gray-500">You have no orders yet.</p>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className="border p-4 rounded-md">
                    <div className="flex justify-between mb-2">
                      <span>Order ID: {order.id}</span>
                      <span>Status: {order.status}</span>
                    </div>
                    <div className="space-y-1">
                      {order.order_items.map((item: any) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.products.name}</span>
                          <span>
                            {item.quantity} × ${item.price_at_purchase}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 font-medium">
                      Total: ${order.total_amount}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="space-y-4">
              {wishlist.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="border p-4 rounded-md flex justify-between items-center">
                    <span>{item.products.name}</span>
                    <span>${item.products.price}</span>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "cancelled" && (
            <div className="space-y-4">
              {orders.filter(o => o.status === "cancelled").length === 0 ? (
                <p className="text-gray-500">No cancelled orders.</p>
              ) : (
                orders
                  .filter(o => o.status === "cancelled")
                  .map((order) => (
                    <div key={order.id} className="border p-4 rounded-md">
                      <div className="flex justify-between mb-2">
                        <span>Order ID: {order.id}</span>
                        <span>Status: {order.status}</span>
                      </div>
                      <div className="space-y-1">
                        {order.order_items.map((item: any) => (
                          <div key={item.id} className="flex justify-between">
                            <span>{item.products.name}</span>
                            <span>
                              {item.quantity} × ${item.price_at_purchase}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 font-medium">
                        Total: ${order.total_amount}
                      </div>
                    </div>
                  ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
