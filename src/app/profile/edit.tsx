"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      const user = supabase.auth.getUser();
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", (await user).data.user?.id)
        .single();

      if (data) {
        setFirstName(data.first_name || "");
        setLastName(data.last_name || "");
      }
    }

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    const user = await supabase.auth.getUser();

    const { error } = await supabase
      .from("profiles")
      .update({ first_name: firstName, last_name: lastName })
      .eq("id", user.data.user?.id);

    if (error) alert(error.message);
    else alert("Profile updated successfully!");

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-16">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
        <div className="space-y-4">
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="w-full py-2 bg-black text-white rounded-md"
            disabled={loading}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
