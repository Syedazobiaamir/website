"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Using next/image for optimized image handling
import Footer from "@/app/Footer/Footer";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Asgaard Sofa",
    image: "/c1.png",
    price: "Rs. 129,900.00",
    description: "The Asgaard Sofa combines elegance and comfort seamlessly.",
    colors: ["Blue", "Black", "White"],
  },
  // ... other product definitions
];

type CartItem = Product & { quantity: number };

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch Product
  useEffect(() => {
    const productId = parseInt(params.id, 10);
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct || null);
    setLoading(false);
  }, [params.id]);

  const relatedProducts = products.filter((p) => p.id !== product?.id);

  // Add to Cart Handler
  const handleAddToCart = (item: Product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setSidebarOpen(true);
  };

  // Remove from Cart Handler
  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update Quantity Handler
  const handleUpdateQuantity = (id: number, amount: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  if (loading) {
    return <div className="text-center p-8 text-xl">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center p-8 text-xl text-red-500">Product not found</div>;
  }

  return (
    <><div className="container mx-auto px-4 py-8">
      <div className="flex text-gray-500 text-sm mb-6">
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/Shop">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </div>

      <div className="flex gap-8 flex-wrap">
        {/* Image Column */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Details Column */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-yellow-600 mt-2">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="flex items-center mt-2 text-yellow-500">
            ★★★★☆ <span className="ml-2 text-gray-500 text-sm">(5 Customer Reviews)</span>
          </div>

          <div className="mt-6">
            <p className="font-medium">Color</p>
            <div className="flex gap-4 mt-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full cursor-pointer border-2"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Cart */}
      {sidebarOpen && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-auto">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              &#10005;
            </button>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <div className="flex items-center">
                    <button onClick={() => handleUpdateQuantity(item.id, -1)} className="border px-2 hover:bg-gray-100">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(item.id, 1)} className="border px-2 hover:bg-gray-100">+</button>
                  </div>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Related Products Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="flex flex-col items-center border p-4 rounded-lg">
              <Image
                src={relatedProduct.image}
                alt={relatedProduct.name}
                width={200}
                height={200}
                className="rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{relatedProduct.name}</h3>
              <p className="text-sm text-gray-500">{relatedProduct.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div><Footer /></>
  );
}
