"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Check user session
  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();
      console.log("LOGGED-IN USER ID =>", data.user?.id);
      setUser(data.user || null);
    }
    loadUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/"); // redirect to home
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isLogin) {
        // SIGNUP
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) {
          alert(signUpError.message);
          setLoading(false);
          return;
        }

        if (data.user) {
          // send correct camelCase fields and userId
          const res = await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: data.user.id,
              userId: data.user.id,
              email,
              firstName,
              lastName,
            }),
          });

          const result = await res.json();

          if (result.error) {
            console.error(result.error);
            alert("Profile update failed.");
            setLoading(false);
            return;
          }
        }

        alert("Account & Profile created successfully!");
        setIsLogin(true);
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      } else {
        // LOGIN
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) {
          alert(loginError.message);
        } else {
          alert("Signed in successfully!");
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
      alert("Unexpected error occurred.");
    }

    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!email) return alert("Enter your email first");

    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) alert(error.message);
    else alert("Password reset email sent");
  };

  // If logged in → show logout button
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">You are already logged in</h2>
          <button
            onClick={() => router.push("/profile/details")}
            className="w-full py-2 bg-black text-white rounded-md mb-4"
          >
            Go to Dashboard
          </button>

          <button
            onClick={handleLogout}
            className="w-full py-2 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Authentication Form
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-16">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-md"
            disabled={loading}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {isLogin && (
          <p
            onClick={handleForgotPassword}
            className="text-right mt-2 text-sm text-blue-600 cursor-pointer"
          >
            Forgot Password?
          </p>
        )}

        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <span
            className="text-black font-medium cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create Account" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
}
