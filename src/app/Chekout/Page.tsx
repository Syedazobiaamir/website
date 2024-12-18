"use client";

import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Page = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Select Country",
    streetAddress: "",
    city: "",
    province: "Select Province",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Details:", billingDetails);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar/>
      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center text-white bg-cover bg-center mb-8"
        style={{
          backgroundImage: "url('/com 8.jpg')", // Add your image path
        }}
      >
        <h1 className="text-4xl font-bold">Checkout</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
        {/* Billing Details */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Billing details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Company name (optional)</label>
              <input
                type="text"
                name="company"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Country / Region</label>
              <select
                name="country"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Street address</label>
              <input
                type="text"
                name="streetAddress"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Town / City</label>
              <input
                type="text"
                name="city"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Province</label>
              <select
                name="province"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option>Select Province</option>
                <option>Punjab</option>
                <option>Maharashtra</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Additional information</label>
              <input
                type="text"
                name="additionalInfo"
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="border border-gray-300 rounded-lg p-4">
            <p className="flex justify-between">
              <span>Product</span>
              <span>Subtotal</span>
            </p>
            <hr className="my-2" />
            <p className="flex justify-between">
              <span>Sample Product x1</span>
              <span>Rs. 250,000.00</span>
            </p>
            <p className="flex justify-between font-bold mt-4">
              <span>Total:</span>
              <span>Rs. 250,000.00</span>
            </p>
          </div>
          <div>
            <label className="flex items-center space-x-2 mb-2">
              <input type="radio" name="payment" className="h-4 w-4" />
              <span>Direct Bank Transfer</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="h-4 w-4" />
              <span>Cash on Delivery</span>
            </label>
          </div>
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
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
