"use client";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Sample default item for testing; replace with dynamic data
    {
      id: "1",
      name: "Sample Product",
      quantity: 1,
      price: 20,
      image: "/sample-image.jpg",
    },
  ]);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/com 8.jpg')", // Update with your actual image path
        }}
      >
        <h1 className="text-4xl font-bold">Cart</h1>
      </div>

      {/* Cart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Cart Items */}
        <div className="space-y-8">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Total */}
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-md">
            <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
            <button className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Delivery Information Section */}
      <div className="bg-[#F9F3F0] py-8 mt-8">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
