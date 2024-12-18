"use client"; // Required for client-side rendering and hooks
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/Footer";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

const products: Product[] = [
  { id: 1, name: "Modern Armchair", image: "/c1.png", price: "Rs. 12,500.00" },
  { id: 2, name: "Classic Table", image: "/c2.png", price: "Rs. 25,000.00" },
  { id: 3, name: "Vintage Sofa", image: "/c3.png", price: "Rs. 29,999.00" },
  { id: 4, name: "Dining Set", image: "/c4.png", price: "Rs. 35,000.00" },
  { id: 5, name: "Lounge Chair", image: "/c5.png", price: "Rs. 14,500.00" },
  { id: 6, name: "Minimalist Desk", image: "/c6.png", price: "Rs. 8,999.00" },
  { id: 7, name: "Luxury Bed", image: "/c7.png", price: "Rs. 45,000.00" },
  { id: 8, name: "Bookshelf", image: "/c8.png", price: "Rs. 10,500.00" },
  { id: 9, name: "Wooden Stool", image: "/c9.png", price: "Rs. 4,200.00" },
  { id: 10, name: "Office Chair", image: "/c10.png", price: "Rs. 7,499.00" },
  { id: 11, name: "Side Table", image: "/c11.png", price: "Rs. 3,500.00" },
  { id: 12, name: "Recliner Sofa", image: "/c12.png", price: "Rs. 32,000.00" },
  { id: 13, name: "Coffee Table", image: "/c13.png", price: "Rs. 6,999.00" },
  { id: 14, name: "Bean Bag", image: "/c14.png", price: "Rs. 2,499.00" },
  { id: 15, name: "Outdoor Chair", image: "/c15.png", price: "Rs. 11,200.00" },
  { id: 16, name: "Study Table", image: "/c16.png", price: "Rs. 9,000.00" },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4 min-w-full">
      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/com 8.jpg')", // Update to your banner image path
        }}
      >
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
      </div>

      {/* Filter & Sorting Section */}
      <div className="flex justify-between items-center py-4 border-b">
        <div>
          <span className="mr-2">Showing all {products.length} products</span>
        </div>
        <div className="flex items-center gap-4">
          <span>View:</span>
          <button className="border px-2 py-1">Grid</button>
          <button className="border px-2 py-1">List</button>
          <div>
            <span>Sort By:</span>
            <select className="ml-2 border p-1">
              <option value="default">Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {products
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <Link href={`/product/${product.id}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <button className="inline-block mt-4 px-4 py-2 bg-yellow-200 text-black rounded text-center w-full">
                  View Product
                </button>
              </Link>
            </div>
          ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-8">
        <button
          className={`px-4 py-2 border ${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border mx-1 ${
              currentPage === index + 1
                ? "bg-yellow-500 text-white"
                : "bg-yellow-200 hover:bg-yellow-300"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 border ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Free Delivery Section */}
      <div className="bg-[#F9F3F0] py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
}
