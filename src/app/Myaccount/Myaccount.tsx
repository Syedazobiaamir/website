"use client";

import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

const Page = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ email: "" });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging In:", loginForm);
    // Add your login logic (API call, validation, etc.)
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", registerForm);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center text-white bg-cover bg-center mb-8"
        style={{
          backgroundImage: "url('/com 8.jpg')", // Update to your banner image path
        }}
      >
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
      </div>

      {/* Forms Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl bg-white p-6 rounded-lg shadow-md mx-auto mb-8">
        {/* Log In Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2" htmlFor="login-email">
                Username or email address
              </label>
              <input
                id="login-email"
                type="email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input id="remember-me" type="checkbox" className="h-4 w-4" />
              <label htmlFor="remember-me" className="text-sm">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Log In
            </button>
            <div className="text-right text-sm mt-2">
              <Link href="/forgot-password" className="text-gray-500 hover:underline">
                Lost Your Password?
              </Link>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2" htmlFor="register-email">
                Email address
              </label>
              <input
                id="register-email"
                type="email"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <p className="text-sm text-gray-500">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-500">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-bold text-gray-800">privacy policy</span>.
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Delivery Information Section */}
      <div className="bg-[#F9F3F0] py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center w-full max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold text-lg text-gray-800">Free Delivery</h3>
            <p className="text-gray-600">For all orders over $50.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">90 Days Return</h3>
            <p className="text-gray-600">If goods have problems.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment methods.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
